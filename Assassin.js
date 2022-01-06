class Assassin extends Character {
  constructor(name, hp = 6, dmg = 6, status = "playing", mana = 20) {
    super(hp, dmg, status, mana);
    this.name = name;
  }
}

const assassin = new Assassin("Carl");