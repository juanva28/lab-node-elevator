class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.waitinglist = [];
    this.direction = "up";
    this.passengers = [];
  }

  start() {
     this.interval = setInterval( () => this.update() , 1000);
  }
  stop() {
    clearInterval(this.interval);
  }
  update() {
    if(this.floor<this.MAXFLOOR && this.direction == "up"){
      this.floorUp();
    }else if(this.floor>0 && this.direction == "down"){
      this.floorDown();
    }
    this.log();
    this._passengersEnter();
    console.log(this.waitinglist);
    console.log(this.passengers);
    // this._passengersLeave();
  }

  passengerWaiting(arr, value){
    let personwaiting  = arr.filter(function(e){return e.origingFloor == value;} );
    return result? result[0] : null;
  }
  _passengersEnter() {
  if(passengerWaiting(this.waitinglist, this.floor)){
    this.passengers.push(passengerWaiting(this.waitinglist, this.floor));
    this.waitinglist.slice(passengerWaiting(this.waitinglist, this.floor));
    this.requests.push(passengerWaiting(this.waitinglist, this.floor).origingFloor);
  };
  }


  floorUp() {
    this.floor++;
    this.direction = "up";
    if(this.floor == 10) this.direction = "down";
  }
  floorDown() {
    this.floor--;
    this.direction = "down";
    if(this.floor == 0) this.direction = "up";
  }
  call() {
    this.waitinglist.push(person);
    this.request.push(person.originFloor);

  }

  log() {
    console.log("Direction: " + this.direction + " | Floor: " + this.floor);
  }
}

module.exports = Elevator;
