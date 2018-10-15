function Cell() {
  this.life = false;
}

Cell.prototype.check = function(numAlive) {
  (this.life) ? this.aliveCheck(numAlive) : this.deadCheck(numAlive);
}

Cell.prototype.aliveCheck = function(numAlive) {
  if (numAlive < 2 || numAlive > 3) {
    this.life = false;
  }
}

Cell.prototype.deadCheck = function(numAlive) {
  if (numAlive == 3) {
    this.life = true;
  }
}

module.exports = Cell;
