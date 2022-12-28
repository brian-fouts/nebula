import * as THREE from 'three';

class SceneManager {
    constructor() {
        this.sceneObjects = [];
        this.scene = new THREE.Scene();
    }

    update() {
        this.sceneObjects.forEach(sceneObject => {
            sceneObject.update();
        })
    }

    addSceneObject(sceneObject){
        this.sceneObjects.push(sceneObject);
    }
}

export default SceneManager;