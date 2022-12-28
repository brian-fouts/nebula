import * as THREE from 'three';

class Fog {
    constructor(config) {
        this.fog = new THREE.FogExp2(config.fog.color, config.fog.density);
    }
}

export default Fog;