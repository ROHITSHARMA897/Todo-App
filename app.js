let inp =document.querySelector("input");
let btn=document.querySelector("button");
let ol = document.querySelector("ol");


btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;
    
    if(inp.value == 0){
      alert("enter your task");
    } else {
    let delbtn= document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    ol.appendChild(item);
    inp.value = "";
    }
  });

  ol.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
     let listItem = event.target.parentElement;
     listItem.remove();
     console.log("deleted");
    }
 });
 
 