const ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];

class Warrior {
  constructor() {
      this._level = 1;
      console.log(this._level);
      this._rank = "Pushover";
      this._exp = 100;
      this._achievements = [];
  }
  
  level() {
    return this._level;
  }
  
  experience() {
      return this._exp;
  }
  
  rank() {
    return this._rank;
  }
  
  achievements() {
    return this._achievements;
  }
  
  /*battle(level) {
      if (level < 1 || level > 100)
        return "Invalid level";
      
      if (this._level == level) {
          this.exp += 10;    
      }
    
      if (this._level - level == 1) {
          this.exp += 1;        
      }
      
      if (this._level - level >= 2) {
          this.exp += 0;
      }
    
      if (level - this._level >= 1) {
          this.exp += 20 * Math.pow(level - this.level);
      }
    
      this._rank = ranks[Math.ceil(this.exp / 100)];
  }*/
}

const Goku = new Warrior();
console.log(Goku.level());

// Create a Warrior class
// It must support level, rank, experience, achievements, training(event), and battle(enemy_level) methods