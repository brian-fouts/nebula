import * as THREE from 'three';
import SceneObject from './base'

class Star extends SceneObject {
    constructor(resourceManager, vertexShader, fragmentShader, radius, numSegments, temperature) {
        super(
            new THREE.CircleGeometry(radius, numSegments),
            new THREE.ShaderMaterial({
                uniforms: {
                  scale: {type: "f", value: radius},
                  temp: {type: "f", value: temperature}
                },
                vertexShader: resourceManager.getShader(vertexShader),
                fragmentShader: resourceManager.getShader(fragmentShader),
                transparent: true,
              })
        )
    }
};

export default Star
