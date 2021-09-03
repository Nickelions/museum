import { WebGL1Renderer } from 'three'

function createRenderer(container) {

    const renderer = new WebGL1Renderer({
        antialias: true,
        canvas: container
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    

    return renderer;
}

export {createRenderer}