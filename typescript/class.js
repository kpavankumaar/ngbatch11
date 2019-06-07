var Engine = /** @class */ (function () {
    function Engine(val, brand) {
        this.brand = brand;
        this.engineType = val;
    }
    Engine.prototype.Test = function () {
        console.log(this.engineType, this.brand);
    };
    return Engine;
}());
var engine = new Engine("v6", "fiat");
console.log(engine.brand);
console.log(engine.Test());
