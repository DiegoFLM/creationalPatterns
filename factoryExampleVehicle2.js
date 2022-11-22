class Car {
    constructor(options) {
        this.wheels = options.wheels || 4;
        this.doors = options.doors || 4;
        this.color = options.color || "silver"; 
    }
}

class Truck {
    constructor(options) {
        this.wheels = options.wheels || 6;
        this.doors = options.doors || 2;
        this.color = options.color || "red"; 
    }
}

class Bus {
    constructor(options) {
        this.wheels = options.wheels || 4;
        this.doors = options.doors || 4;
        this.color = options.color || "white"; 
    }
}

class Motorcycle {
    constructor(options) {
        this.wheels = options.wheels || 2;
        this.doors = options.doors || 0;
        this.color = options.color || "Black"; 
    }
}


class Factory {

    create = (options, vehicleType) => {

        if(!vehicleType) {
            return "unable to make vehicle. Please specify a vehicle type and tryagain!"
        }

        let vehicle;
        
        if (vehicleType === "car") {
            vehicle = new Car(options);
        } else if (vehicleType === "truck") {
            vehicle = new Truck(options);
        } else if (vehicleType === "bus") {
            vehicle = new Bus(options);
        } else if (vehicleType === "motorcycle") {
            vehicle = new Motorcycle(options);
        }

		
        vehicle.vehicleType = vehicleType;

        vehicle.startEngine = ()=> console.log(`Reving ${vehicleType} engine`);

        vehicle.driveVehicle = ()=> console.log(`Driving ${vehicleType}...`);

        vehicle.stopEngine = ()=> console.log(`Stop ${vehicleType} engine`);

        return vehicle;
    }
	
};

const vehicleFactory = new Factory();

const bus = vehicleFactory.create({
    wheels: 4,
    doors: 4,
    color: "yellow",
}, "bus");

console.log(bus);
bus.startEngine()
bus.driveVehicle();

// prints:
// Bus {
//  wheels: 4,
//  doors: 4,
//  color: 'yellow',
//  vehicleType: 'bus',
//  startEngine: [Function],
//  driveVehicle: [Function],
//  stopEngine: [Function]
//}

// Reving bus engine
// Driving bus...

const bike = vehicleFactory.create({
    wheels: 2,
	doors: 0,
	color: "red",
}, "motorcycle")

console.log(bike)
bike.startEngine()
bike.stopEngine()
// prints
// Motorcycle {
//  wheels: 2,
//  doors: 0,
//  color: 'red',
//  vehicleType: 'bike',
//  startEngine: [Function],
//  driveVehicle: [Function],
//  stopEngine: [Function]
//}

// Reving motorcycle engine
// Stop motorcycle engine