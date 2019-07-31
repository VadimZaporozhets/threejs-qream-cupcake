import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    PCFSoftShadowMap,
    AmbientLight,
    SpotLight,
    DefaultLoadingManager
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import TWEEN from '@tweenjs/tween.js';
import Stats from 'stats.js';
import * as dat from 'dat.gui';

import { Cupcake } from './cupcake';
import { Text } from './text';
import { FoxAudio } from './audio';
import { animateCamera, animateFadeIn, animateLight } from './animations';
import { BackgroundMesh } from './background';

const startBtn = document.getElementById('start-button');
const loader = document.getElementById('loader');
const overlay = document.getElementById('overlay');
const loadedWrapper = document.getElementById('loaded-wrapper');
const canvas = document.getElementById('canvas');

let scene,
    renderer,
    camera,
    stats,
    controls,
    screenWidth = window.innerWidth,
    screenHeight = window.innerHeight;

const gui = new dat.GUI();

const createScene = () => {
    renderer = new WebGLRenderer();
    scene = new Scene();
    stats = new Stats();
    camera = new PerspectiveCamera(75, screenWidth / screenHeight, 0.1, 10000);
    controls = new OrbitControls(camera, renderer.domElement);

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;

    camera.position.set(0, 0, 12);
    camera.lookAt(0, 0, 0);

    renderer.setSize(window.innerWidth, window.innerHeight);
    canvas.appendChild(renderer.domElement);
    document.body.appendChild(stats.dom);

    window.addEventListener('resize', handleWindowResize);
};

let ambientLight, spotLight;

const createLights = () => {
    ambientLight = new AmbientLight(0xffffff, 0);
    spotLight = new SpotLight(0xffffff, 0);

    spotLight.position.set(15, 40, -50);
    spotLight.angle = Math.PI / 4;
    spotLight.penumbra = 0.05;
    spotLight.decay = 2;
    spotLight.distance = 200;
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;
    spotLight.shadow.camera.near = 10;
    spotLight.shadow.camera.far = 200;

    gui.add(spotLight, 'intensity', 0, 2)
        .name('Spotlight intensity')
        .listen();
    gui.add(spotLight.position, 'x', -50, 50).name('Spotlight x');
    gui.add(spotLight.position, 'y', -50, 50).name('Spotlight y');
    gui.add(spotLight.position, 'z', -50, 50)
        .name('Spotlight z')
        .listen();

    gui.add(ambientLight, 'intensity', 0, 2)
        .name('Ambient intensity')
        .listen();

    scene.add(spotLight);
    scene.add(ambientLight);
};

const render = () => {
    renderer.render(scene, camera);
    controls.update();
    stats.update();
    TWEEN.update();

    requestAnimationFrame(render);
};

const init = () => {
    createScene();
    createLights();

    scene.add(BackgroundMesh);

    const cupcake = new Cupcake(scene);
    cupcake.loadCupcake();

    const text = new Text(scene);
    text.loadText();

    const audio = new FoxAudio(camera);
    audio.loadAudio();

    startBtn.addEventListener('click', () => {
        startScene(audio, cupcake, text);
    });

    DefaultLoadingManager.onLoad = () => {
        render();

        loadedWrapper.classList.remove('hidden');
        loader.classList.add('hidden');
    };
};

const startScene = (audio, cupcake, text) => {
    overlay.classList.add('hidden');

    setTimeout(() => {
        document.body.removeChild(overlay);
        audio.playAudio();

        animateFadeIn(ambientLight, spotLight);
        animateLight(spotLight);
        cupcake.animateCupcake();
        text.animateText();
        animateCamera(camera);
    }, 1000);
};

const handleWindowResize = () => {
    screenHeight = window.innerHeight;
    screenWidth = window.innerWidth;
    renderer.setSize(screenWidth, screenHeight);
    camera.aspect = screenWidth / screenHeight;
    camera.updateProjectionMatrix();
};

init();
