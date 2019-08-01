import { MeshLambertMaterial, Color, PlaneGeometry, Mesh } from 'three';

const geometry = new PlaneGeometry(90, 50);
const material = new MeshLambertMaterial({
    color: new Color('rgba(55,55,55,0.77)')
});

export const BackgroundMesh = new Mesh(geometry, material);
BackgroundMesh.position.z = -10;
