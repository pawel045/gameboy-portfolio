import { useEffect } from 'react';
import * as THREE from 'three';
import SceneInit from './lib/SceneInit';
import { GameBoyBody, Screen, Button, staticButtons, Arrows, ButtonsHandler } from './lib/GameBoyParts';

function App() {
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    // Initialize static parts
    const body = new GameBoyBody().build();
    const buttons = new staticButtons();
    const [startButton, stopButton] = buttons.buildStartStop();
    const centerDPad = buttons.buildCenterDPad();

    // Initialize screen
    const screen = new Screen();
    const screenMesh = screen.buildScreen();
    const textPlane = screen.buildTextPlane();

    // Initialize button handlers - logic
    const handler = new ButtonsHandler(screen)

    // AB Buttons
    const aButton = new Button(6, -4, 1.4, 0xB00000);
    aButton.clickHandler = handler.handleA.bind(handler);
    const bButton = new Button(3.25, -6, 1.4, 0xB00000);
    bButton.clickHandler = handler.handleB.bind(handler);

    // Arrows
    const arrows = new Arrows();
    arrows.up.clickHandler = handler.handleUp.bind(handler);
    arrows.down.clickHandler = handler.handleDown.bind(handler);
    arrows.left.clickHandler = handler.handleLeft.bind(handler);
    arrows.right.clickHandler = handler.handleRight.bind(handler);

    const arrowsButtons = arrows.getArrows();
    const arrowsMeshes = arrowsButtons.map(btn => btn.mesh);
    
    // Add all objects to the scene
    const meshes = [
      body,
      screenMesh,
      textPlane,
      aButton.mesh,
      bButton.mesh,
      startButton,
      stopButton,
      centerDPad,
      ...arrowsMeshes
    ];
    meshes.forEach(mesh => test.scene.add(mesh));

    // === Click detection setup ===
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const clickable = [aButton.mesh, bButton.mesh, ...arrowsMeshes];

    const handleClick = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, test.camera);
      const intersects = raycaster.intersectObjects(clickable);

      if (intersects.length > 0) {
        const mesh = intersects[0].object;
        if (mesh.userData?.parent?.click) {
          mesh.userData.parent.click();
        }
      }
    };

    window.addEventListener('click', handleClick);

    // Cleanup
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="custom-background">
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default App;
