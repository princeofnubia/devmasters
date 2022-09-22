const input = document.getElementById("input");
const btn = document.querySelector("#input-sec");

const eventNames = ["keypress", "focus"];
const keyPressHandler = (evt) => {
  if (evt.code === "Enter") {
    input.disabled = true;
  }
};
const dblClickHandler = (evt) => {
  input.removeAttribute("disabled");
};
const eventListeners = [keyPressHandler, dblClickHandler];

const multiEvent = (element, eventNames, eventListeners) => {
  for (let i = 0; i < eventNames.length; i++) {
    element.addEventListener(eventNames[0], eventListeners[0], false);
  }
};

multiEvent(input, eventNames, eventListeners);

btn.addEventListener("dblclick", (evt) => {
  evt.preventDefault();
  input.removeAttribute("disabled");
  input.focus();
});

btn.addEventListener("mousedown", (evt) => {
  evt.preventDefault();
});
