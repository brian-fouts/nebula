import * as THREE from 'three';
import AmbientLight from "./ambient"
import DirectionalLight from "./directional"

class LightingManager {
    constructor(config) {
        this.config = config
        this.directionalLight = new DirectionalLight(config)
        this.ambientLight = new AmbientLight(config);
    }
    init(scene) {
        scene.add(this.ambientLight.light, this.directionalLight.light);
        if(this.config.debugMode) {
            const directionalLightHelper = new THREE.PointLightHelper(this.directionalLight.light);
            scene.add(directionalLightHelper);

            const ambientLightHelper = new THREE.PointLightHelper(this.ambientLight.light);
            scene.add(ambientLightHelper);
        }
    }
}

export default LightingManager;