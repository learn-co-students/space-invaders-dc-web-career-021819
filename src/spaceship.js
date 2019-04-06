let shipIds = 0;
const ships = [];

class Spaceship {
  constructor(name, crew, phasers, shields, cloaked = false, warpDrive = "disengaged", phasersCharge = "uncharged") {
    this.name = name;
    this.crew = crew;
    this.crew.forEach(member => {
      member.currentShip = this;
    });
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = cloaked;
    this.warpDrive = warpDrive;
    this.docked = this.crew.length === 0;
    this.phasersCharge = phasersCharge;
    ships.push(this);
    this.id = ++shipIds;
  }
}
