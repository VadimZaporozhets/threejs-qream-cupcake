import {
    FontLoader,
    TextGeometry,
    MeshLambertMaterial,
    Color,
    Mesh
} from 'three';

import { animateText } from './animations';

const fontLoader = new FontLoader();

export class Text {
    constructor(scene) {
        this.scene = scene;
    }

    loadText() {
        fontLoader.load('fonts/helvetiker.json', font => {
            // Qream Text
            const geometryQ = new TextGeometry('QREAM', {
                font,
                size: 0.5,
                height: 0.1
            });

            geometryQ.center();

            const materialQ = new MeshLambertMaterial({
                // color: new Color('#EE92C2')
                color: new Color('#fff')
            });

            this.meshTextQream = new Mesh(geometryQ, materialQ);
            this.meshTextQream.position.set(0, -1, 4);

            // World Text

            const geometryW = new TextGeometry('WORLD', {
                font,
                size: 0.3,
                height: 0.1
            });

            geometryW.center();

            const materialW = new MeshLambertMaterial({
                // color: new Color('#EFBC9B')
                color: new Color('#a29e99')
            });

            this.meshTextWorld = new Mesh(geometryW, materialW);
            this.meshTextWorld.position.set(0, -1.6, 4);

            this.scene.add(this.meshTextQream);
            this.scene.add(this.meshTextWorld);
        });
    }

    animateText() {
        animateText(this.meshTextQream, this.meshTextWorld);
    }
}
