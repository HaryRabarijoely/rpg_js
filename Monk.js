class Monk extends Character {
  constructor(name, hp = 8, dmg = 2, status = "playing", mana = 200) {
    super(hp, dmg, status, mana);
    this.name = name;
  }
  specialAttack = () => {
    this.mana = this.mana - 25;
    this.hp = this.hp + 8;
  }
}

const monk = new Monk("Moana");