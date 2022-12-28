import * as THREE from 'three';

class DirectionalLight {
    constructor(config) {
        this.light = new THREE.DirectionalLight(
            config.lights.directional.color
        );
        this.light.position.set(
            config.lights.directional.position[0],
            config.lights.directional.position[1],
            config.lights.directional.position[2]
        );
    }
};

export default DirectionalLight;