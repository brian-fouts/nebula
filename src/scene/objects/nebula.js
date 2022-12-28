import * as THREE from 'three';

class Nebula {
    constructor(config, resourceManager) {
        this.clouds = [];
        const geometry = new THREE.PlaneBufferGeometry(
            config.clouds.planeBuffer[0],
            config.clouds.planeBuffer[1],
        );
        const material = new THREE.MeshLambertMaterial({
            map: resourceManager.getTexture(config.clouds.textureName),
            transparent:true
        });
        for(let i = 0; i < config.clouds.count; i++) {
            let cloud = new THREE.Mesh(geometry, material);
            cloud.position.set(
                config.clouds.positionRange.x[0] + Math.random() * (config.clouds.positionRange.x[1]-config.clouds.positionRange.x[0]),
                config.clouds.positionRange.y[0] + Math.random() * (config.clouds.positionRange.y[1]-config.clouds.positionRange.y[0]),
                config.clouds.positionRange.z[0] + Math.random() * (config.clouds.positionRange.z[1]-config.clouds.positionRange.z[0]),
            );
            cloud.material.opacity = config.clouds.opacity;
            cloud.rotation.z = Math.random() * 2 * Math.PI;
            this.clouds.push(cloud)
        }
        this.lights = config.lights.map(lightConfig => {
            const light = new THREE.PointLight(
                lightConfig.color,
                lightConfig.intensity,
                lightConfig.distance,
                lightConfig.decay
            );
            light.position.set(
                lightConfig.position[0],
                lightConfig.position[1],
                lightConfig.position[2],
            );
            return light
        })
        
    }
    addToScene(scene) {
        this.clouds.forEach(cloud => {
            scene.add(cloud);
        })
        this.lights.forEach(light => {
            scene.add(light);
        })
    }
    removeFromScene(scene) {
        this.clouds.forEach(cloud => {
            scene.remove(cloud);
        })
        this.lights.forEach(light => {
            scene.remove(light);
        })
    }

    update() {
        this.clouds.forEach(cloud => {
            cloud.rotation.z -= 0.001;
        })
    }
};

export default Nebula