import * as THREE from 'three';

class SceneObject {
    constructor(geometry, material) {
        this.geometry = geometry;
        this.material = material;
        this.mesh = new THREE.Mesh(geometry, material)
        this.behaviors = [];
    }

    addToScene(scene) {
        scene.add(this.mesh);
    }

    removeFromScene(scene) {
        scene.remove(this.mesh);
    }

    update() {
        this.behaviors.forEach(behavior => behavior.update(this))
    }

    addBehavior(behavior) {
        this.behaviors.push(behavior);
    }

    rotate(x, y, z) {
        this.mesh.rotation.x += x;
        this.mesh.rotation.y += y;
        this.mesh.rotation.z += z;
    }

    setRotation(x, y, z) {
        this.mesh.rotation.set(x, y, z);
    }

    translate(x, y, z) {
        this.mesh.position.x += x;
        this.mesh.position.y += y;
        this.mesh.position.z += z;
    }

    setPosition(x, y, z) {
        this.mesh.position.set(x, y, z);
    }
}

export default SceneObject