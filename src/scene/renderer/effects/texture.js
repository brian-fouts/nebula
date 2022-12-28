import * as POSTPROCESSING from "postprocessing";

class TextureEffect {
    constructor(config, resourceManager) {
        this.effect = new POSTPROCESSING.TextureEffect({
            blendFunction: POSTPROCESSING.BlendFunction.COLOR_DODGE,
            texture: resourceManager.getTexture(config.textureName)
        });
        this.effect.blendMode.opacity.value = config.opacity;
    }
}

export default TextureEffect;