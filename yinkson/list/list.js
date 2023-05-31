const inputText=document.getElementById("inputBox");
const p = document.querySelector("p");
const addButton=document.getElementById("addButton");
const descriptionButton=document.getElementById("descriptionButton");


descriptionButton.addEventListener("click",()=>{
    p.textContent = inputText.value +":";
});
addButton.addEventListener("click",()=>{
    let ul=document.getElementsByTagName("ul")[0];
 let li=document.createElement("li");
 li.textContent = inputText.value;
ul.appendChild(li);
if(li.textContent.length===0){
    li.style.display="none";
}
})
    

