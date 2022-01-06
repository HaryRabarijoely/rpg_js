class Berzerker extends Character {
  constructor(name, hp = 8, dmg = 4, status = "playing", mana = 0) {
    super(hp, dmg, status, mana);
    this.name = name;
  }
  specialAttack = () => {
    this.dmg = this.dmg + 1;
    this.hp = this.hp - 1;
  }
}

const berzerker = new Berzerker("Draven");