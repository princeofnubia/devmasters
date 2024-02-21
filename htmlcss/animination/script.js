const brown = document.getElementById("cl-brown");
const blue = document.getElementById("cl-blue");
const yellow = document.getElementById("cl-yellow");
const sleep = (time) => {
  return new Promise((resolve, reject) => {
    return setTimeout(resolve, time);
  });
};

brown.addEventListener("animationend", (event) => {
  // when the animation ends delay it for 2 seconds and go back again

  sleep(1000).then(() => {
    brown.classList.toggle("cl-brown-alternate");
  });
});

blue.addEventListener("animationend", (event) => {
  // when the animation ends delay it for 2 seconds and go back again

  sleep(850).then(() => {
    blue.classList.toggle("cl-blue-alternate");
  });
});

yellow.addEventListener("animationend", (event) => {
  // when the animation ends delay it for 2 seconds and go back again

  sleep(800).then(() => {
    yellow.classList.toggle("cl-yellow-alternate");
  });
});
