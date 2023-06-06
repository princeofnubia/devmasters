const inputText=document.getElementById("inputBox");
const p = document.querySelector("p");
const addButton=document.getElementById("addButton");
const descriptionButton=document.getElementById("descriptionButton");
const disableButton=document.getElementById("descriptorButton");
const removeButton=document.getElementById("removeButton");
const listItem=document.getElementsByTagName("LI");






for (let i=0; i<listItem.length; i++){
listItem[i].addEventListener("mouseover",()=>{
    listItem[i].textContent = listItem[i].textContent.toUpperCase();

})
listItem[i].addEventListener("mouseout",()=>{
    listItem[i].textContent = listItem[i].textContent.toLowerCase();

})
listItem[i].addEventListener("dblclick",(e)=>{

//  if(e.target.tagName=="LI"){
//     let li=e.target;
//     let ul = li.parentNode;
//     ul.removeChild(li);
e.target.remove();
 
})


inputText.addEventListener("mouseover",()=>{
   inputText.style.borderColor="black";
})
}

const changeDescription = () => {
    if(inputText.value==""){
        return;
       }
       p.textContent = inputText.value +":";
}

descriptionButton.addEventListener("click",changeDescription);
addButton.addEventListener("click",()=>{
 
    let ul=document.getElementsByTagName("ul")[0];
 let li=document.createElement("li");
 li.textContent = inputText.value;
ul.appendChild(li);

if(li.textContent.length===0){
    li.style.display="none";
}
})
removeButton.addEventListener("click",()=>{
 
    let ul=document.getElementsByTagName("ul")[0];
    let li=document.querySelector("li:last-child");

ul.removeChild(li);

}
)
// let num1=prompt("first ");
// let num2=prompt("first ");
// first=parseFloat(num1);
// second=parseFloat(num2);
// remainder= first % second;
// ans= parseFloat(remainder);
// alert(ans);


