//Bienvenue dans notre RPG maison !

class Paladin extends Character {
  constructor(name, hp = 16, dmg = 3, status = "playing", mana = 160) {
    super(hp, dmg, status, mana);
    this.name = name;
  }
  specialAttack = () => {
    this.mana = this.mana - 40;
    this.dmg = 4;
    this.hp = this.hp + 5;
  }
}

const paladin = new Paladin("Ulder");



