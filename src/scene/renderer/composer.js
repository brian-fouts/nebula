import * as POSTPROCESSING from "postprocessing";

import BloomEffect from './effects/bloom'
import TextureEffect from './effects/texture'

class EffectComposer {
    constructor(config, renderer) {
        this.config = config;
        this.composer = new POSTPROCESSING.EffectComposer(renderer);
    }

    init(resourceManager, camera, scene) {
        this.bloomEffect = new BloomEffect(this.config.effectComposer.effects.bloom)
        this.textureEffect = new TextureEffect(this.config.effectComposer.effects.texture, resourceManager);

        this.effectPass = new POSTPROCESSING.EffectPass(
            this.camera,
            this.bloomEffect.effect,
            this.textureEffect.effect
        )
        this.effectPass.renderToScreen = true;

        this.composer.addPass(new POSTPROCESSING.RenderPass(scene, camera))
        this.composer.addPass(this.effectPass);
    }

    render() {
        this.composer.render(this.config.renderDelay);
    }
};

export default EffectComposer;