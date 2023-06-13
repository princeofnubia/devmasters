const inputText = document.getElementById("inputBox");
const p = document.querySelector("p");
const addButton = document.getElementById("addButton");
// const descriptionButton = document.getElementById("descriptionButton");
const disableButton = document.getElementById("descriptorButton");
const removeButton = document.getElementById("removeButton");
const listItem = document.getElementsByTagName("inputBox");
let ul = document.getElementById("taskList");
let source;


let xResize = document.getElementById("resize-r")
resizing(xResize)
addButton.addEventListener("click", () => {
  if (inputText.value === "") {
    return;
  }

  let li = document.createElement("li");
  let checkList = document.createElement("input");
  let span = document.createElement("span");

  checkList.type = "checkbox";
  checkList.id = "check";

  li.setAttribute("draggable", "true");
  li.setAttribute("key", ul.children.length);
  span.innerText = inputText.value;
  li.classList.add("taskList");

  li.appendChild(span);
  li.appendChild(checkList);

  ul.appendChild(li);
  inputText.value = "";
});

taskList.addEventListener("dblclick", (e) => {
  e.target.remove("li");
  const title = document.createElement("title");
    title.value = "double click to delete";
});

li.addEventListener("dragstart", (e) => {
  console.log("I am dragging");
  source = e;

  e.target.classList.add("source");
  e.target.classList.remove("target");
  e.target.classList.add("dragging");
});
li.addEventListener("dragend", (e) => {
  e.target.classList.remove("dragging");
  e.target.classList.remove("source");
  console.log("stopped dragging");
});
li.addEventListener("dragover", (e) => {
  e.preventDefault();
  if (!e.target.classList.contains("source")) {
    li.classList.add("target");
  }
  console.log("He is entering me");
  e.preventDefault();
});

li.addEventListener("drop", (e) => {
  e.preventDefault();
  let src = source;
  let target = li;
  let sourceID = source.target.getAttribute("key");
  let targetID = target.getAttribute("key");
  // src.target.child Nodes[0].replaceChild(target.childNodes[0])
});

li.addEventListener("dragleave", (e) => {
  console.log("He is going out");
  e.preventDefault();
  if (!e.target.classList.contains("source")) {
    li.classList.remove("target");
  }
});
li.addEventListener("drop", (e) => {
  console.log("I am dropping");
  console.log(e);
});

removeButton.addEventListener("click", () => {
  let ul = document.getElementsByTagName("ul")[0];
  let li = document.querySelector("li:last-child");

  ul.removeChild(li);
});
