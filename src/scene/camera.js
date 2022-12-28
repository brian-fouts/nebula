import * as THREE from 'three';

class Camera {
    constructor(config) {
        this.camera = new THREE.PerspectiveCamera(
            config.camera.fieldOfView,
            window.innerWidth / window.innerHeight,
            config.camera.near,
            config.camera.far,
        );
        this.camera.position.setZ(config.camera.zPosition);
    }
}

export default Camera;