import * as THREE from 'three';

class WebGLRenderer {
    constructor(canvas) {
        this.renderer = new THREE.WebGL1Renderer({
            canvas: canvas
        })
        this.renderer.clear()
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

export default WebGLRenderer;