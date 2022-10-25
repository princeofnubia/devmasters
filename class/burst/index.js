const btn = document.querySelector(".btn");
const me = document.getElementById("me");
const sleep = (time) => {
  return new Promise((resolve, reject) => {
    return setTimeout(resolve, time);
  });
};
btn.addEventListener("click", async (event) => {
  for (let index = 0; index < 100; index++) {
    await sleep(100);
    let elem = document.createElement("div");
    elem.className = "burst";
    elem.style.backgroundColor = `rgb(${Math.random() * 255}, ${
      Math.random() * 255
    }, ${Math.random() * 255})`;
    me.append(elem);
  }
});
