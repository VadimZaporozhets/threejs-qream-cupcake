import TWEEN from '@tweenjs/tween.js';
import { Math } from 'three';

export const animateCamera = camera => {
    new TWEEN.Tween({ val: 12 })
        .to({ val: 7 }, 10000)
        .delay(4000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(obj => {
            camera.position.z = obj.val;
        })
        .start();
};

export const animateCupcake = (
    cupcake,
    cupcakeTop,
    balloons,
    cupcaketopStartOffset,
    balloonsStartOffset
) => {
    new TWEEN.Tween({ val: Math.degToRad(-90) })
        .to({ val: Math.degToRad(0) }, 9500)
        .delay(3800)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(obj => {
            cupcake.rotation.x = obj.val;
        })
        .start();

    cupcakeTop.forEach(topPart => {
        new TWEEN.Tween({
            val: cupcake.children[topPart].position.y
        })
            .to(
                {
                    val:
                        cupcake.children[topPart].position.y -
                        cupcaketopStartOffset
                },
                9000
            )
            .delay(5500)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(obj => {
                cupcake.children[topPart].position.y = obj.val;
            })
            .start();
    });

    balloons.forEach(balloon => {
        new TWEEN.Tween({
            val: cupcake.children[balloon].position.y
        })
            .to(
                {
                    val:
                        cupcake.children[balloon].position.y +
                        balloonsStartOffset
                },
                9400
            )
            .delay(7800)
            .easing(TWEEN.Easing.Back.InOut)
            .onUpdate(obj => {
                cupcake.children[balloon].position.y = obj.val;
            })
            .start();
    });
};

export const animateText = (meshTextQream, meshTextWorld) => {
    new TWEEN.Tween({ val: -1 })
        .to({ val: -0.5 }, 11000)
        .delay(4000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(obj => {
            meshTextQream.position.y = obj.val;
        })
        .start();

    new TWEEN.Tween({ val: -1.6 })
        .to({ val: -1.1 }, 11000)
        .delay(4000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(obj => {
            meshTextWorld.position.y = obj.val;
        })
        .start();

    new TWEEN.Tween({ val: 4 })
        .to({ val: 3.5 }, 10000)
        .delay(5500)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(obj => {
            meshTextWorld.position.z = obj.val;
            meshTextQream.position.z = obj.val;
        })
        .start();

    new TWEEN.Tween({ val: 1 })
        .to({ val: 1.5 }, 11000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(obj => {
            meshTextQream.scale.set(obj.val, obj.val, obj.val);
        })
        .start();
};

export const animateFadeIn = (ambientLight, spotLight) => {
    new TWEEN.Tween({ val: 0 })
        .to({ val: 0.9 }, 4000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(obj => {
            ambientLight.intensity = obj.val;
        })
        .start();

    new TWEEN.Tween({ val: 0 })
        .to({ val: 2 }, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(obj => {
            spotLight.intensity = obj.val;
        })
        .start();
};

export const animateLight = spotLight => {
    new TWEEN.Tween({ val: -50 })
        .to({ val: 50 }, 10000)
        .delay(4000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(obj => {
            spotLight.position.z = obj.val;
        })
        .start();
};
