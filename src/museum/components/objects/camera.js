import { PerspectiveCamera } from 'three'

function createCamera() {

    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 2, 100);
    camera.position.set( 10, 10, - 10 );

    return camera;

}

export {createCamera}