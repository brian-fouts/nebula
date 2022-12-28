class Rotate {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    update(sceneObject) {
        sceneObject.rotate(this.x, this.y, this.z);
    }
}

export default Rotate;