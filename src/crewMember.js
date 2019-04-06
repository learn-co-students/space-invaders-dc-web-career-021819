let crewIds = 0;
const cantina = [];
class CrewMember {
  constructor(position, ship = "Looking for a rig") {
    this.position = position;
    this.currentShip = ship;
    this.id = ++crewIds;
  }

  engageWarpDrive() {
    if (this.currentShip === "Looking for a rig") {
      return "had no effect";
    } else if (this.position === "Pilot") {
      this.currentShip.warpDrive = "engaged";
    }
  }
  setsInvisibility() {
    if (this.currentShip === "Looking for a rig") {
      return "had no effect";
    } else if (this.position === "Defender") {
      this.currentShip.cloaked = true;
    }
  }
  chargePhasers() {
    if (this.currentShip === "Looking for a rig") {
      return "had no effect";
    } else if (this.position === "Gunner") {
      this.currentShip.phasersCharge = "charged";
    }
  }
}
