class Game {
  constructor(paladin, fighter, monk, assassin, berzerker, turnLeft = 10) {
    this.paladin = paladin;
    this.fighter = fighter;
    this.monk = monk;
    this.assassin = assassin;
    this.berzerker = berzerker;
    this.turnLeft = turnLeft;
  }

  newTurn = () =>{
    gaming.startTurn();
    this.turnLeft--;
  }

  watchStats = () =>{
    console.log("");
    if(paladin.status == "loser"){
      console.log("le paladin " + paladin.name + " a été tué 😵")
    } else{
      console.log("le paladin " + paladin.name + " à "+ paladin.hp + " HP 😀" + " et " + paladin.mana + " mana")
    }

    if(monk.status == "loser"){
      console.log("le monk " + monk.name + " a été tué 😵")
    } else{
      console.log("le monk " + monk.name + " à "+ monk.hp + " HP 😀" + " et " + monk.mana + " mana")
    }

    if(assassin.status == "loser"){
      console.log("l'assassin " + assassin.name + " a été tué 😵")
    } else{
      console.log("l'assassin " + assassin.name + " à "+ assassin.hp + " HP 😀" + " et " + assassin.mana + " mana")
    }

    if(berzerker.status == "loser"){
      console.log("le berzerker " + berzerker.name + " a été tué 😵")
    } else{
      console.log("le berzerker " + berzerker.name + " à "+ berzerker.hp + " HP 😀" + " et " + berzerker.mana + " mana")
    }

    if(fighter.status == "loser"){
      console.log("le fighter " + fighter.name + " a été tué 😵")
    } else{
      console.log("le fighter " + fighter.name + " à "+ fighter.hp + " HP 😀" + " et " + fighter.mana + " mana")
    }
  }
}

const game1 = new Game (paladin, fighter, monk, assassin, berzerker);
const fighters = [paladin, fighter, monk, assassin, berzerker]
