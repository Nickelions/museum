import { FlyControls } from "three/examples/jsm/controls/FlyControls";
import { useEffect } from "react";
import { createCube } from "./components/objects/cube";
import { createScene } from "./components/objects/scene";
import { createCamera } from "./components/objects/camera";
import { createRenderer } from "./components/systems/renderer";
import { Clock } from "three";
import { VirtualJoystick } from "./components/objects/virtualjoystick";

const Museum = (props) => {
  //on_load
  useEffect(() => {

    //constants
    let container;
    let camera, controls, scene, joystick, renderer;
    const clock = new Clock();

    //functions__on_load
    init();
    animate();
    
    function init() {

      //container
      container = document.getElementById("container");

      //scene
      scene = createScene();

      //camera
      camera = createCamera();
      camera.position.set(10, 10, -10);
      camera.lookAt(scene.position);

      //renderer
      renderer = createRenderer();
      container.appendChild(renderer.domElement);

      //controls
      controls = new FlyControls(camera, renderer.domElement);
      controls.movementSpeed = 10;
      controls.domElement = renderer.domElement;
      controls.rollSpeed = 0.8;
      controls.autoForward = false;
      controls.dragToLook = true;

      //objects
      const cube = createCube();

      //resize
      window.addEventListener("resize", onWindowResize);

      //implementation
      scene.add(cube);
    
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);

    }

    function animate() {
      requestAnimationFrame(animate);

      //joystick
      joystick = new VirtualJoystick({
        container: container,
        mouseSupport: true
      });

      if( joystick.right() ){
        console.log('right');
      }
      if( joystick.left() ){
        console.log('left');
      }
      if( joystick.up() ){
        console.log('up');
      }
      if( joystick.down() ){
        console.log('down');
      }

      render();
    }

    function render() {
      //controls.update(clock.getDelta());
      renderer.render(scene, camera);
    }
  }, []);

  return (
    <div>
      <div id="container"></div>
    </div>
  );
};

export default Museum;
