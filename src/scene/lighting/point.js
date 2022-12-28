import * as THREE from 'three';

class PointLight {
    constructor(config) {
        this.light = new THREE.PointLight(
            config.lights.point.color,
            config.lights.point.intensity,
            config.lights.point.distance,
            config.lights.point.decay,
        );
        this.light.position.set(
            config.lights.point.position[0],
            config.lights.point.position[1],
            config.lights.point.position[2]
        );
    }
};

export default PointLight;