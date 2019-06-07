class Engine{
    engineType:string;
    constructor(val, public brand){
        this.engineType = val;
    }
    Test(){
        console.log(this.engineType, this.brand);
    }
}
var engine = new Engine("v6","fiat");
console.log(engine.brand);
console.log(engine.Test());
