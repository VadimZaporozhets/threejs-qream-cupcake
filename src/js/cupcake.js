import { Color, Math } from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { animateCupcake } from './animations';

const objLoader = new OBJLoader();

export class Cupcake {
    constructor(scene) {
        this.scene = scene;
        this.balloonsStartOffset = 1.5;
        this.cupcaketopStartOffset = 0.07;
    }

    loadCupcake() {
        objLoader.load('assets/models/cupcake.obj', object => {
            this.cupcake = object;

            object.children[2].visible = false;
            object.children[6].visible = false;

            this.balloons = [0, 25, 26, 27];

            this.cupcakeTop = [
                3,
                4,
                5,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ];

            this.cupcakeStars = [
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21
            ];

            this.balloons.forEach(balloon => {
                // cupcake.children[balloon].material.transparent = true;
                this.cupcake.children[balloon].material.opacity = 0;
                this.cupcake.children[
                    balloon
                ].position.y -= this.balloonsStartOffset;
                this.cupcake.children[balloon].material.color = new Color(
                    '#D22318'
                );
            });

            this.cupcakeTop.forEach(topPart => {
                this.cupcake.children[
                    topPart
                ].position.y += this.cupcaketopStartOffset;
            });

            // Add color to stars
            this.cupcakeStars.forEach(star => {
                this.cupcake.children[star].material.color = new Color(
                    // '#FBA4DD'
                    'rgba(22,22,22,0.87)'
                );
            });

            //Cupcake wrapper
            // this.cupcake.children[24].material.color = new Color('#22B1C3');
            this.cupcake.children[24].material.color = new Color(
                'rgba(22,22,22,0.87)'
            );

            //Cupcake plate
            // this.cupcake.children[1].material.color = new Color('#E0E6F2');
            this.cupcake.children[1].material.color = new Color(
                'rgba(22,22,22,0.87)'
            );

            //Cream
            // this.cupcake.children[7].material.color = new Color('#DED3B5');
            this.cupcake.children[7].material.color = new Color(
                'rgba(22,22,22,0.87)'
            );

            //Cupcake cherry
            // this.cupcake.children[22].material.color = new Color('#00C2BD');
            this.cupcake.children[22].material.color = new Color(
                'rgba(22,22,22,0.87)'
            );

            //Cupcake base
            // this.cupcake.children[23].material.color = new Color('#CBBFA1');
            this.cupcake.children[23].material.color = new Color(
                'rgba(22,22,22,0.87)'
            );

            //Candle
            // this.cupcake.children[3].material.color = new Color('#FFFCB0');
            this.cupcake.children[3].material.color = new Color(
                'rgba(22,22,22,0.87)'
            );
            // this.cupcake.children[4].material.color = new Color('#FFFCB0');
            this.cupcake.children[4].material.color = new Color(
                'rgba(22,22,22,0.87)'
            );
            // this.cupcake.children[5].material.color = new Color('#88a0ac');
            this.cupcake.children[5].material.color = new Color(
                'rgba(22,22,22,0.87)'
            );

            this.cupcake.position.y = -2;
            this.cupcake.scale.set(50, 50, 50);
            this.cupcake.rotation.x = Math.degToRad(-90);
            this.scene.add(this.cupcake);
        });
    }

    animateCupcake() {
        animateCupcake(
            this.cupcake,
            this.cupcakeTop,
            this.balloons,
            this.cupcaketopStartOffset,
            this.balloonsStartOffset
        );
    }
}

// export const loadCupcake = scene => {
//     objLoader.load('assets/models/cupcake.obj', object => {
//         cupcake = object;
//
//         object.children[2].visible = false;
//         object.children[6].visible = false;
//
//         balloons = [0, 25, 26, 27];
//
//         cupcakeTop = [
//             3,
//             4,
//             5,
//             7,
//             8,
//             9,
//             10,
//             11,
//             12,
//             13,
//             14,
//             15,
//             16,
//             17,
//             18,
//             19,
//             20,
//             21,
//             22,
//             23
//         ];
//
//         cupcakeStars = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
//
//         balloons.forEach(balloon => {
//             // cupcake.children[balloon].material.transparent = true;
//             cupcake.children[balloon].material.opacity = 0;
//             cupcake.children[balloon].position.y -= balloonsStartOffset;
//             cupcake.children[balloon].material.color = new Color('#D22318');
//         });
//
//         cupcakeTop.forEach(topPart => {
//             cupcake.children[topPart].position.y += cupcaketopStartOffset;
//         });
//
//         // Add color to stars
//         cupcakeStars.forEach(star => {
//             cupcake.children[star].material.color = new Color('#FBA4DD');
//         });
//
//         //Cupcake wrapper
//         cupcake.children[24].material.color = new Color('#22B1C3');
//
//         //Cupcake plate
//         cupcake.children[1].material.color = new Color('#E0E6F2');
//
//         //Cream
//         cupcake.children[7].material.color = new Color('#DED3B5');
//
//         //Cupcake cherry
//         cupcake.children[22].material.color = new Color('#00C2BD');
//
//         //Cupcake base
//         cupcake.children[23].material.color = new Color('#CBBFA1');
//
//         //Candle
//         cupcake.children[3].material.color = new Color('#FFFCB0');
//         cupcake.children[4].material.color = new Color('#FFFCB0');
//         cupcake.children[5].material.color = new Color('#88a0ac');
//
//         cupcake.position.y = -2;
//         cupcake.scale.set(50, 50, 50);
//         cupcake.rotation.x = Math.degToRad(-90);
//         scene.add(cupcake);
//
//         animateCupcake(
//             cupcake,
//             cupcakeTop,
//             balloons,
//             cupcaketopStartOffset,
//             balloonsStartOffset
//         );
//     });
// };
