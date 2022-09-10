console.log("dsd");
// demonstrate closure

const functq = () => {
  // local scope
  let a = 2;

  return function (b) {
    a++;
    console.log("assessing a even outside its scope", a);
    return a + b;
  };
};
// global scope
let b = functq();

const task = function () {
  let a = [];
  return {
    addTask: (task) => {
      a.push(task);
      return this;
    },
    removeTask: (index) => {
      a.splice(index, 1);
      return this;
    },
    totalNumTask: () => {
      return a.length;
    },
    listTask: () => {
      a.forEach((item) => console.log(item.type));
    },
  };
};

let d = task();
d.addTask({ type: "I need to go to toilet", time: new Date().now });
d.addTask({ type: "I need to go to school", time: new Date().now });
d.addTask({ type: "I need to go to class", time: new Date().now });
d.addTask({ type: "I need to go home", time: new Date().now });
d.listTask();
