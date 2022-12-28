import * as THREE from 'three';

class ResourceManager {
    constructor(config) {
        this.config = config;
        this.textureLoader = new THREE.TextureLoader();
        this.textures = {}
        this.shaders = {}
    }
    
    init() {
        const texturePromises = this.config.resources.textures.map(textureConfig => {
            return this.textureLoader.loadAsync(textureConfig.url).then((texture) => {
                this.textures[textureConfig.name] = texture
            })
        });
        
        const shaderPromises = this.config.resources.shaders.map(shaderConfig => {
            return fetch(shaderConfig.url).then(r => {
                return r.text().then(shader => {
                    this.shaders[shaderConfig.name] = shader;
                })
            })
        });
        return Promise.all([...texturePromises, ...shaderPromises]);
    }

    getTexture(name) {
        return this.textures[name];
    }

    getShader(name) {
        return this.shaders[name];
    }
};

export default ResourceManager;