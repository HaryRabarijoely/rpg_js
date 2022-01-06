class Character {
  constructor(hp, dmg, status, mana) {
    this.hp = hp;
    this.dmg = dmg;
    this.status = status;
    this.mana = mana;
  }

  takeDamage = (damage) => {
    if (this.hp > 0){
      this.hp = this.hp - damage;
    } else {
      console.log(`Vous ne pouvez pas taper ${this.name} car il a été tué `)
    }
  }

  dealDamage = (victim) => {
    if (this.dmg > victim.hp){
      this.mana = this. mana + 20;
      console.log(`${this.name} gagne 20 mana pour avoir éliminer ${victim.name}`)
    }
    if (this.status != "loser"){
      victim.takeDamage(this.dmg);
      console.log(`Attaque Spécial de ${this.name} de ${this.dmg} sur la victime ${victim.name} 💥🥊`)
      console.log(victim.name + " a désormais " + victim.hp + " HP ! 🚑")
    }

  }
}
