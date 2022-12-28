import * as POSTPROCESSING from "postprocessing";

class BloomEffect {
    constructor(config) {
        this.effect = new POSTPROCESSING.BloomEffect({
            blendFunction: POSTPROCESSING.BlendFunction.COLOR_DODGE,
            kernelSize: POSTPROCESSING.KernelSize.SMALL,
            useLuminanceFilter: true,
            luminanceThreshold: config.luminanceThreshold,
            luminanceSmoothing: config.luminanceSmoothing
        })
        this.effect.blendMode.opacity.value = config.opacity;
    }
}

export default BloomEffect;