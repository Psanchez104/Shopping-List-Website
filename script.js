//alert("A JavaScript file is linked");

var input = document.getElementById("input");
var button = document.getElementById("enter");
var ul = document.getElementById("myList");
var clr = document.getElementById("clear");

function checkInputLength(){
    return input.value.length;
}
function createElement(){
    var li = document.createElement("li");
    var btn = document.createElement("button");
    li.appendChild(document.createTextNode(input.value));
    btn.appendChild(document.createTextNode("Delete"));
    btn.classList.add("delete");
    ul.appendChild(li);
    li.appendChild(btn);
    input.value = "";
    console.log("added!");
}
function clickToList(event){
    if(checkInputLength() > 0 ){
        createElement();
    }
}
function enterToList(event){
    if(checkInputLength() > 0 && event.which === 13){
        createElement();
    }
}



function clearList(){
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
}



button.addEventListener("click", clickToList);
input.addEventListener("keypress", enterToList);
clr.addEventListener("click", clearList);



//toggle done and delete
function listHandle(event){
    if(event.target.tagName === "LI"){
       event.target.classList.toggle("done");
    }
    else if(event.target.classList.contains("delete")){
        ul.removeChild(event.target.parentElement);
    }
}

ul.addEventListener("click", listHandle);




















