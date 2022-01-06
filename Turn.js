class Turn extends Game {
  constructor(turnLeft, paladin, fighter, monk, assassin, berzerker) {
    super(paladin, fighter, monk, assassin, berzerker,turnLeft)
  }


  startTurn = () => {


      const fighter = fighters.filter(a => a.status != "loser");
      const looser = fighters.filter(a => a.status == "loser");
      console.log("")
      console.log(`Round numéro ${this.turnLeft}`)
      console.log("")


      for(let i = 0; i < fighter.length; i++){

        let perso = fighter[i];

      if (perso.status !== "playing"){
        break;
      }

      const pick = fighter.filter(c => c.name != perso.name && c.status != "loser");

      const name = pick.map(a => a.name);

      console.log("")
      console.log(`Pour ce tour tu vas incarner ${perso.name}`);
      console.log(`Choisi ta prochaine victime: ${name} ?`);
      console.log("")


      let special = prompt(`${perso.name} Veux-tu utiliser ton attaque spécial ? Tape "special" ou appuie sur entrer pour une attaque normal`);
      let foo = prompt(`${perso.name} Quel combattant choisis-tu d attaquer ? ${name} ?`);
      let victime = fighter.filter(d => d.name == foo);
      const others = fighter.filter(e => e.name != foo);

      if(special == "special"){
        perso.specialAttack();
        console.log(`${perso.name} choisi son attaque spécial`)
      }
      if (foo == fighters[0].name || foo == fighters[1].name || foo == fighters[2].name || foo == fighters[3].name || foo == fighters[4].name) {

        perso.dealDamage(victime[0]);

        if (victime[0].hp <= 0){
          victime[0].status = "loser";
          console.log(`${victime[0].name} est mort !`)
        }
        if (fighters.reduce((a, b, c, d)=> a.hp + b.hp + c.hp + d.hp == 0) ){
          console.log(`${perso.nam} a gagné !`)
        }
        if (this.turnLeft == 1){
          const winner = fighter.sort((a, b) => b.hp - a.hp)[0];
          console.log("")
          console.log(winner.name + " a remporté la partie avec " + winner.hp + "HP ! 🤟");
        }
      }
      else {
        console.log(" ")
        console.log("😈😈 ERREUR de saisie 😈😈");
      }
      let stat = prompt(`Infos stats  ? Ecrivez "Stat" ou appuyer sur Entrer`);
      if (stat == "Stat"){
        gaming.watchStats();
        }

      }


  }
}



  const gaming = new Turn();
  for(i = 0; i <= 9; i++){
    const looser = fighters.filter(a => a.status == "loser");
    const winner = fighters.filter(a => a.status == "playing")[0];
    if(looser.length === 4){
      console.log(winner.name + " a remporté le match !")
      break;
    } else {
    gaming.newTurn();
    }
  }
