module EngineTypes{
    class Engine{
        protected name_1 :string;
        private engineType:string;
        constructor(val, public brand){
            this.engineType = val;
        }
        Test(){
            console.log(this.engineType, this.brand);
        }
    }
    var engine = new Engine("v6","fiat");
    engine.enginetype;
    engine.brand;
    engine.name;
    console.log(engine.brand);
    console.log(engine.engineType);
    
    class Bike extends Engine{
        engine:string;
        transmission:string;
        exhaust:string;
        brand 
        
        constructor(){
            super("450cc", "ktm");
            console.log(this.name_1);
        }
    }
    
}

var tvs = new Bike();
var pulsar = new Bike();
tvs.name_1
