import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import EffectComposer from './renderer/composer'
import WebGLRenderer from './renderer/webgl'
import Camera from './camera'
import Fog from './fog'
import SceneManager from './manager'
import ResourceManager from './resource'
import LightingManager from './lighting/manager'
import Star from './objects/star'
import Nebula from './objects/nebula'
import config from './config'


class Simulation {
    constructor(canvas) {
        this.canvas = canvas;
        this.resourceManager = new ResourceManager(config);
        this.sceneManager = new SceneManager();
        this.lightingManager = new LightingManager(config);
        this.camera = new Camera(config);
        this.renderer = new WebGLRenderer(this.canvas);
        this.composer = new EffectComposer(
            config,
            this.renderer.renderer,
        );
        this.fog = new Fog(config);
    }

    init() {
        this.resourceManager.init().then(() => {
            if(config.debugMode) {
                this.enableDebugFeatures();
            }
            this.composer.init(
                this.resourceManager,
                this.camera.camera,
                this.sceneManager.scene
            );
            this.renderer.renderer.setClearColor(this.fog.fog.color);
            this.sceneManager.scene.fog = this.fog.fog;
            this.lightingManager.init(this.sceneManager.scene);
            this.populateScene()
            this.render();
        })
    }

    enableDebugFeatures() {
        const gridHelper = new THREE.GridHelper(200, 50)
        this.sceneManager.scene.add(gridHelper);

        const orbitalControls = new OrbitControls(
            this.camera.camera,
            this.canvas
        );

        this.sceneManager.addSceneObject(orbitalControls);
    }

    render() {
        this.renderer.renderer.clear();
        this.sceneManager.update();
        this.composer.render()
        requestAnimationFrame(() => this.render());
    }

    populateScene() {
        this.addNebula();
        this.populateStars();
    }

    addNebula() {
        const nebula = new Nebula(config.nebula, this.resourceManager);
        nebula.addToScene(this.sceneManager.scene);
        this.sceneManager.addSceneObject(nebula);
    }
    populateStars() {
        config.stars.data.forEach(starData => {
            const star = new Star(
                this.resourceManager,
                config.stars.shader.vertex,
                config.stars.shader.fragment,
                starData.radius,
                starData.numSegments,
                starData.temperature,
            );
            star.setPosition(starData.position[0], starData.position[1], starData.position[2])
            star.addToScene(this.sceneManager.scene);
        })
    }
};

export default Simulation;