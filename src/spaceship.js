class Spaceship {
  constructor(name, crew, phasers, shields, cloaked = false, warpDrive = "disengaged", docked = true, phasersCharge = "uncharged"){
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = cloaked;
    this.warpDrive = warpDrive;
    if(crew.length != 0){
      this.docked = false;
      crew.forEach(member => member.currentShip = this);
    }
    else{
      this.docked = docked;
    }
    this.phasersCharge = phasersCharge;
  }

}
