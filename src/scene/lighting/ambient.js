import * as THREE from 'three';

class AmbientLight {
    constructor(config) {
        this.light = new THREE.AmbientLight(config.color);
    }
}

export default AmbientLight;