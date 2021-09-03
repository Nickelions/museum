import React, { useEffect } from 'react'
import { Clock, MathUtils } from 'three';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { createCamera } from './components/objects/camera';
import { createCube } from './components/objects/cube';
import { createScene } from './components/objects/scene';
import { createRenderer } from './components/systems/renderer';
import { createResizer } from './components/systems/resizer';

const Museum = props => {

    //on_load
    useEffect(() => {
    
        //constatnts
        let container, stats;
			let camera, controls, scene, renderer;
			let mesh, texture;
        container = document.querySelector('#webgl_container');
        
        //renderer
        renderer = createRenderer(container);
        
        //scene
        scene = createScene();

        //camera
        camera = createCamera();
        camera.lookAt(scene.position);

        //objects
        const cube = createCube();

        //resize
        window.addEventListener('resize', () => {
            createResizer(camera, renderer, controls);
        });

        //controls
        controls = new FirstPersonControls( camera, renderer.domElement );
		controls.movementSpeed = 10;
		controls.lookSpeed = 0.1;

        //animation
        const clock = new Clock();
        const tick = () => {

            window.requestAnimationFrame(tick);

            cube.rotation.x += MathUtils.degToRad(30) * clock.getDelta();

            controls.update(clock.getDelta());
            //orbit.update(clock.getDelta());
            renderer.render(scene, camera);

        }

        tick();

        //implementation
        scene.add(cube);

    }, [])

    return (
        <div>
            <canvas id="webgl_container"></canvas>
        </div>
    )
}

export default Museum
