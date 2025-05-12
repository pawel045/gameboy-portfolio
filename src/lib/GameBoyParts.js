import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry';
import { ScreenContent } from './ScreenContent.js';
import sqlLogo from '/src/assets/logo/sqlLogo.png';
import pythonLogo from '/src/assets/logo/pythonLogo.png';
import dwhLogo from '/src/assets/logo/dwhLogo.png';
import bigdataLogo from '/src/assets/logo/bigdataLogo.png';


export class GameBoyBody {
  build() {
    const geometry = new RoundedBoxGeometry(20, 30, 3, 5, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0xFF3333,// 0xD4AF7F,              // A soft champagne gold
      metalness: 0.2,               // Gives it a more metallic look
      roughness: 0.4                // A bit of shine but not overly glossy
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, 0);
    return mesh;
  }
}

export class Screen {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 256;
    this.canvas.height = 140;
    this.ctx = this.canvas.getContext('2d');
    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.minFilter = THREE.LinearFilter;
    this.animationTimeouts = [];
    this.isRendering = true;

    this.material = new THREE.MeshBasicMaterial({
      map: this.texture,
      transparent: true
    });

    this.textPlane = new THREE.Mesh(new THREE.PlaneGeometry(14, 7), this.material);
    this.textPlane.position.set(0, 6.6, 1.71);

    this.content = new ScreenContent(); // 👈 Injected logic

    const font = new FontFace('GameBoyFont', 'url(/fonts/VT323.ttf)');
    font.load().then((loadedFont) => {
      document.fonts.add(loadedFont);
      this.ctx.font = '10px GameBoyFont';
      this.ctx.fillStyle = '#707070'; // ✅ Set default fill color
      this.render();
    }).catch((err) => {
      console.error('Font failed to load:', err);
    });
    
    this.skillLogos = {
      'SQL': { image: new Image(), loaded: false, src: sqlLogo },
      'Python': { image: new Image(), loaded: false, src: pythonLogo },
      'Data Warehousing': { image: new Image(), loaded: false, src: dwhLogo },
      'Big Data Tools': { image: new Image(), loaded: false, src: bigdataLogo },
      // Add more skills and logos as needed
    };
    
    Object.keys(this.skillLogos).forEach(skill => {
      const entry = this.skillLogos[skill];
      entry.image.onload = () => entry.loaded = true;
      entry.image.src = entry.src;
    });
    

    this.render();
  }

  render({ animate = true } = {}) {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.font = '20px GameBoyFont';
  
    let lines = this.content.getContent();
    if (this.tempOverlayLines?.length) {
      lines = [...lines, ...this.tempOverlayLines];
    }
  
    const state = this.content.state;
  
    if (state === 'menu') {
      this.drawMenu(lines);
    } else if (['about me', 'contact', 'projects'].includes(state)) {
      if (animate && state !== 'projects') {
        this.animateLines(lines);
      } else {
        this.drawDefault(lines);
      }
    } else {
      this.drawDefault(lines);
    }
  }

  stopRender() {
    this.isRendering = false;
    this.animationTimeouts.forEach(clearTimeout);
    this.animationTimeouts = [];
  }

  drawMenu(lines) {
    lines.forEach((line, i) => {
      this.ctx.fillText(line, 10, 25 + i * 25);
    });
    this.texture.needsUpdate = true;
  }
  
  drawDefault(lines) {
    lines.forEach((line, i) => {
      let x = 10;
      let y = 25 + i * 20;
  
      if (this.content.state === 'skills') {
        for (const skill in this.skillLogos) {
          const logo = this.skillLogos[skill];
          if (line.includes(skill) && logo.loaded) {
            const width = 150;
            const height = 150;
            const centerX = (this.canvas.width - width) / 2;
            const centerY = this.canvas.height / 2 - height / 2;
            this.ctx.drawImage(logo.image, centerX, centerY, width, height);
            this.texture.needsUpdate = true;
            return; // Skip text rendering
          }
        }
  
        const textWidth = this.ctx.measureText(line).width;
        x = (this.canvas.width - textWidth) / 2;
        y = this.canvas.height / 2;
      }
  
      this.ctx.fillText(line, x, y);
    });
  
    this.texture.needsUpdate = true;
  }
  
  
  
  
  animateLines(lines) {
    let lineIndex = 0;
    
    const drawNextLine = () => {
      if (!this.isRendering) return;
      if (lineIndex < lines.length) {
        const line = lines[lineIndex];
        let charIndex = 0;
  
        const drawNextChar = () => {
          if (!this.isRendering) return;
          if (charIndex < line.length) {
            const char = line[charIndex];
            
            // Conditionally adjust positions for 'contact' state
            const xPosition = this.content.state === 'contact' ? 10 + charIndex * 8 : charIndex * 8;
            const yPosition = this.content.state === 'contact' ? 25 + lineIndex * 20 : 13 + lineIndex * 20;
            
            // Draw the character at the adjusted position
            this.ctx.fillText(char, xPosition, yPosition);
            this.texture.needsUpdate = true;
            charIndex++;
            
            const timeout = setTimeout(drawNextChar, 13);
            this.animationTimeouts.push(timeout);
          } else {
            lineIndex++;
            const timeout = setTimeout(drawNextLine, 13);
            this.animationTimeouts.push(timeout);
          }
        };
  
        drawNextChar();
      }
    };
    
    this.isRendering = true;
    drawNextLine();
  }  

  showTemporaryMessage(message, duration = 1500) {
    this.tempOverlayLines = [message];
    this.render({ animate: false });
  
    setTimeout(() => {
      this.tempOverlayLines = [];
      this.render({ animate: false });
    }, duration);
  }  

  moveUp() {
    this.content.moveUp();
    this.render();
  }

  moveDown() {
    this.content.moveDown();
    this.render();
  }

  goMenu() {
    this.content.goMenu();
    this.render();
  }

  select() {
    this.content.select();
    this.render();
  }

  buildScreen() {
    const geometry = new RoundedBoxGeometry(15, 11, 1, 3, 0.5);
    const material = new THREE.MeshStandardMaterial({
      color: 0x000000,
      metalness: 0.3,
      roughness: 0.5
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 6.6, 1.2);
    return mesh;
  }

  buildTextPlane() {
    return this.textPlane;
  }

  appendLine(line) {
    this.lines = [...this.lines, line];
  }
}


export class Button {
    constructor(x, y, z, color = 0x444444) {
      const circleShape = new THREE.Shape();
      circleShape.absarc(0, 0, 1, 0, Math.PI * 2, false);
  
      const extrudeSettings = {
        depth: 0.3,
        bevelEnabled: true,
        bevelSegments: 5,
        steps: 1,
        bevelSize: 0.2,
        bevelThickness: 0.1
      };
  
      this.mesh = new THREE.Mesh(
        new THREE.ExtrudeGeometry(circleShape, extrudeSettings),
        new THREE.MeshStandardMaterial({ color })
      );
  
      this.mesh.position.set(x, y, z);
      this.mesh.userData.clickable = true;
      this.mesh.userData.parent = this; // so we can access `click()` later

      // return this.mesh
    }
  
    click() {
        this.mesh.position.z -= 0.2;
        setTimeout(() => {
            this.mesh.position.z += 0.2;
        }, 100);

        if (this.clickHandler) {
            this.clickHandler();
        }
    }
}

class ArrowButton {
    constructor(x, y, z = 1.6, color = 0x444444) {
        const size = 2, depth = 0.5, radius = 1, smoothness = 1;
        const geometry = new RoundedBoxGeometry(size, size, depth, radius, smoothness);
        const material = new THREE.MeshStandardMaterial({ color });

        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.set(x, y, z);

        this.mesh.userData.clickable = true;
        this.mesh.userData.parent = this;
    }

    click() {
        this.mesh.position.z -= 0.2;
        setTimeout(() => {
            this.mesh.position.z += 0.2;
        }, 100);

        if (this.clickHandler) {
            this.clickHandler();
        }
    }
}

export class Arrows {
    constructor() {
      const cx = -4, cy = -5;
      this.up = new ArrowButton(cx, cy + 2);
      this.down = new ArrowButton(cx, cy - 2);
      this.left = new ArrowButton(cx - 2, cy);
      this.right = new ArrowButton(cx + 2, cy);
    }
  
    getArrows() {
      return [this.up, this.down, this.left, this.right];
    }
}

export class staticButtons {
    buildStartStop() {
      const geometry = new RoundedBoxGeometry(1.75, 0.6, 0.5, 0.1, 10);
      const material = new THREE.MeshStandardMaterial({ color: 0x444444 });
  
      const start = new THREE.Mesh(geometry, material);
      const stop = new THREE.Mesh(geometry, material);
      start.position.set(1.25, -11, 1.5);
      stop.position.set(-1.25, -11, 1.5);
  
      return [start, stop];
    }

    buildCenterDPad() {
        const geometry = new RoundedBoxGeometry(2, 2, 0.5, 1, 1);
        const material = new THREE.MeshStandardMaterial({ color: 0x444444 });
        const center = new THREE.Mesh(geometry, material);
        center.position.set(-4, -5, 1.6);

        return center
    }
  }

  export class ButtonsHandler {
    constructor(screen) {
      this.screen = screen;
    }
  
    handleUp() {
      const state = this.screen.content.state;
    
      if (state === 'menu') {
        this.screen.moveUp(); // Moves the selection up in the menu
      } else if (state === 'projects') {
        this.screen.content.moveUp();          // Move selection up in the projects grid
        this.screen.render({ animate: false }); // Render without animation
      }
    }
  
    handleDown() {
      const state = this.screen.content.state;
    
      if (state === 'menu') {
        this.screen.moveDown(); // already handles render()
      } else if (state === 'projects') {
        this.screen.content.moveDown();           // update selection
        this.screen.render({ animate: false });   // render without typing animation
      }
    }
    
    handleRight() {
      if (this.screen.content.state === 'skills') {
        this.screen.content.moveRight();
        this.screen.render({ animate: false });
      }
    }
    
    handleLeft() {
      if (this.screen.content.state === 'skills') {
        this.screen.content.moveLeft();
        this.screen.render({ animate: false });
      }
    }   
  
    handleA() {
      const state = this.screen.content.state;
    
      if (state === 'menu') {
        this.screen.select();
      } else if (state === 'contact') {
        const email = 'proszczyk96@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
          this.screen.showTemporaryMessage('Email was copied!');
        }).catch(err => {
          console.error('Failed to copy email:', err);
        });
      } else if (state === 'projects') {
        const index = this.screen.content.selectedProjectIndex;
        const link = this.screen.content.projectLinks[index];
        if (link) {
          window.open(link, '_blank');
        }
      }
    }   
  
    handleB() {
      this.screen.stopRender();   // ✅ Stop ongoing animations
      this.screen.goMenu();       // ⬅️ Then go back to menu
    }
    
  }
  