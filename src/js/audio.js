import {
    AudioListener,
    Audio,
    AudioLoader,
    DefaultLoadingManager
} from 'three';

const audioLoader = new AudioLoader(DefaultLoadingManager);

export class FoxAudio {
    constructor(camera) {
        this.camera = camera;
        this.listener = new AudioListener();
        this.sound = new Audio(this.listener);
        this.camera.add(this.listener);
    }

    loadAudio() {
        audioLoader.load('assets/sound/1.mp3', buffer => {
            this.sound.setBuffer(buffer);
            this.sound.setVolume(0.5);
            this.sound.setPlaybackRate(1.2);
        });
    }

    playAudio() {
        this.sound.play();
    }
}
