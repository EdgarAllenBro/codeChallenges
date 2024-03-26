class Marine {
  constructor() {
    this.health=100
  }
  accept(visitor){
    this.health = visitor.visitLight(this)
  }
}

class Marauder {
  constructor() {
    this.health=125
  }
  accept(visitor){
    this.health = visitor.visitArmored(this)
  }
}

class TankBullet {
  visitLight(unit) {
    return unit.health - 21
  }
  visitArmored(unit) {
    return unit.health - 32
  }
}