import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry';
import { ScreenContent } from './ScreenContent.js';

export class GameBoyBody {
  build() {
    const geometry = new RoundedBoxGeometry(20, 30, 3, 5, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0xD4AF7F,              // A soft champagne gold
      metalness: 0.4,               // Gives it a more metallic look
      roughness: 0.2                // A bit of shine but not overly glossy
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
    this.canvas.height = 128;
    this.ctx = this.canvas.getContext('2d');
    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.minFilter = THREE.LinearFilter;

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
      this.render();
    }).catch((err) => {
      console.error('Font failed to load:', err);
    });

    this.render();
  }

  render() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.font = '20px GameBoyFont';
    ctx.fillStyle = '#4A4A4A';

    const lines = this.content.getContent();
    lines.forEach((line, i) => {
      if (this.content.state === 'menu') {
        ctx.fillText(line, 10, 25 + i * 25);
      }
      else {
        ctx.fillText(line, 5, 15 + i * 20);
      }
    });

    this.texture.needsUpdate = true;
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
}


export class Button {
    constructor(x, y, z, color) {
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
      if (this.screen.content.state === 'menu') {
        this.screen.moveUp();
      }
    }
  
    handleDown() {
      if (this.screen.content.state === 'menu') {
        this.screen.moveDown();
      }
    }
  
    handleLeft() {
      if (this.screen.content.state === 'menu') {
        console.log('⬅️ Left arrow pressed from class');
      }
    }
  
    handleRight() {
      if (this.screen.content.state === 'menu') {
        console.log('➡️ Right arrow pressed from class');
      }
    }
  
    handleA() {
      if (this.screen.content.state === 'menu') {
        this.screen.select();
      }
    }
  
    handleB() {
      this.screen.goMenu(); // Always allow going back
    }
  }
  