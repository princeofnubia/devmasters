let m = {
  prop: 1,
  sayMyName() {
    console.log(this.prop);
  },
};

// constructor function
function myObject() {
  this.name = "I am Abu";
  this.sayMyName = function () {
    console.log(this.name);
  };
}

function f(a) {
  // this
  return a;
}

class Game {
  name = "game";
  sayMyName() {
    console.log(this.name);
  }
}

class Ball extends Game {
  constructor() {
    super();
  }
  sayMyName() {
    console.log("I play football");
  }
}

class BasketBall extends Game {
  constructor() {
    super();
  }
  sayMyName() {
    console.log("I play basketball");
  }
}
let k = new f();
let d = new Game();
console.log(d.sayMyName());
let bl = new Ball();
let nf = new BasketBall();

console.log("from bl");
bl.sayMyName();

console.log("from nf");
nf.sayMyName();

console.log(typeof BasketBall);
console.log(typeof Ball);
console.log(Ball === BasketBall);

console.log(1 == "1");
