class Fighter extends Character {
  constructor(name, hp = 16, dmg = 3, status = "playing", mana = 40) {
    super(hp, dmg, status, mana);
    this.name = name;
  }

  specialAttack = () => {
    this.mana = this.mana - 20;
    this.dmg = 5;
  }

}

const fighter = new Fighter("Grace");