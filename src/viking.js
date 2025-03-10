// Soldier
class Soldier {

  constructor(health, strength) {
      this.health = health;
      this.strength = strength;
  }

  attack() {
      return this.strength;
  }

  receiveDamage(damage) {
      this.health -= damage;
  }
  
}

// Viking
class Viking extends Soldier {

  constructor (name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {

    super.receiveDamage(damage);

    if (this.health <= 0) {
      return `${this.name} has died in act of combat`
    } else {
      return `${this.name} has received ${damage} points of damage`
    }
    
  }

  battleCry() {
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health <= 0) {
      return 'A Saxon has died in combat'
    } else {
      return `A Saxon has received ${damage} points of damage`
    }

  }


}

// War
class War {

  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {

    const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    const damage = randomSaxon.receiveDamage(randomViking.strength);

    if (randomSaxon.health <= 0) {
        this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
    }
    
    return damage;
  }

  saxonAttack() {
    
    const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const damage = randomViking.receiveDamage(randomSaxon.strength);

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
  }

    return damage   

  }

  showStatus() {
    
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!'
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...'
    } else if (this.vikingArmy.length === 1 && this.saxonArmy.length === 1) {
      return 'Vikings and Saxons are still in the thick of battle.'
    }

  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
