const config = {
    "debugMode": false,
    "camera": {
        "fieldOfView": 75,
        "near": 0.1,
        "far": 1000,
        "zPosition": 1 
    },
    "lights": {
        "directional": {
            "color": 0xffffff,
            "position": [0, 0, 1]
        },
        "ambient": {
            "color": 0xffffff,
        }
    },
    "fog": {
        "color": 0x03544e,
        "density": 0.001
    },
    "effectComposer": {
        "renderDelay": 0.1,
        "effects": {
            "texture": {
                "textureName": "milky-way",
                "opacity": 0.2
            },
            "bloom": {
                "luminanceThreshold": 0.7,
                "luminanceSmoothing": 0.75,
                "opacity": 1.5
            }
        }
    },
    "nebula": {
        "lights": [
            {
                "name": "orange",
                "intensity": 50,
                "distance": 400,
                "decay": 1.7,
                "color": 0xcc6600,
                "position":  [-150, 150, -150]
            },
            {
                "name": "red",
                "intensity": 50,
                "distance": 400,
                "decay": 1.7,
                "color": 0xd8547e,
                "position":  [150, 150, -150]
            },
            {
                "name": "blue",
                "intensity": 50,
                "distance": 400,
                "decay": 1.7,
                "color": 0xc3677ac,
                "position":  [-150, -150, -150]
            }
        ],
        "clouds": {
            "count": 50,
            "textureName": "smoke",
            "positionRange": {
                "x": [-600, 300],
                "y": [-50, 250],
                "z": [-400, -400],
            },
            "planeBuffer": [500, 500],
            "opacity": 0.55
        }
    },
    "stars": {
        "data": [
            {
                "position": [300, 400, -600],
                "temperature": 2400,
                "radius": 300,
                "numSegments": 32,
            },
            {
                "position": [-600, -200, -600],
                "temperature": 2600,
                "radius": 300,
                "numSegments": 32,
            }
        ],
        "shader": {
            "vertex": "corona-vertex",
            "fragment": "corona-fragment",
        }
    },
    "resources": {
        "textures": [
            {
                "name": "smoke",
                "url": "/images/smoke.png"
            },
            {
                "name": "milky-way",
                "url": "/images/milky-way.webp"
            },
        ],
        "shaders": [
            {
                "name": "corona-vertex",
                "url": "/shaders/stars/corona-vertex-shader.txt"
            },
            {
                "name": "corona-fragment",
                "url": "/shaders/stars/corona-fragment-shader.txt"
            }
        ]
    }
}

export default config;