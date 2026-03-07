class Cricketer {
  consturctor(name, role) {
    ((this.name = name),
      (this.role = role),
      (this.matchesPlayed = 1),
      (this.stamina = this.stamina));
  }
  introduce() {
    return `${this.name} the ${this.role} | matchesPlayed: ${this.matchesPlayed} | stamina: ${this.stamina}`;
  }
}

const player1 = new Cricketer("Virat Kohli", "Batsman");
const player2 = new Cricketer("Jasprit Bumrah", "Bowler");

console.log(player1.hasOwnProperty("name"));
console.log(player2.hasOwnProperty("name"));

console.log(typeof Cricketer);

class Debutant {
  constructor(name) {
    this.name = name;
    this.walkOut = () => `${this.name} walks out to bat for the first time`;
  }
}

const debutant1 = new Debutant("Shubham");
const somethingFromLastClass = debutant1.walkOut;

const debutant2 = new Debutant("Yashasvi");
console.log(debutant1.walkOut === debutant2.walkOut);
console.log(somethingFromLastClass());
