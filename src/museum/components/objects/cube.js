import { BoxBufferGeometry, Color, Mesh, MeshBasicMaterial } from "three";

function createCube() {

    const geometry = new BoxBufferGeometry(2, 2, 2);
    const material = new MeshBasicMaterial();
    material.color = new Color('white');
    const cube = new Mesh(geometry, material);

    return cube;
}

export {createCube}