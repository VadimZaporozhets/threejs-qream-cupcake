import { MeshLambertMaterial, Color, PlaneGeometry, Mesh } from 'three';

const geometry = new PlaneGeometry(90, 50);
const material = new MeshLambertMaterial({
    color: new Color('#000')
});

export const BackgroundMesh = new Mesh(geometry, material);
BackgroundMesh.position.z = -10;
