function toggleTask(checkbox) {
  var taskname = checkbox.closest('.first').querySelector('h4');

  if (checkbox.checked) {
    taskname.style.textDecoration = "line-through";
    taskname.style.color= "gray";
  } else {
    taskname.style.textDecoration = "none";
    taskname.style.color= "black";
  }
}

var aoverlay=document.getElementById("a-overlay")
var cancelbutton=document.getElementById("cancel-button")
aoverlay.style.display="none"
function newtask(){
  aoverlay.style.display="block"
}
function canceloverlay(){
    aoverlay.style.display="none"
}

var addbutton=document.getElementById("addbutton")
var Task=document.getElementById("tasks-1")
var inputname=document.getElementById("inputname")
var category=document.getElementById("category")

addbutton.addEventListener("click",function(){
   var div=document.createElement("div")
    div.setAttribute("class","first")
    div.innerHTML=`<div id="radioone">
    <input type="checkbox"  onchange="toggleTask(this)">
    </div>

    <div class="line-1"></div>

    <div id="example-1">
     <h4>${inputname.value}</h4>
     <p>${category.value}</p>
   </div>

  <div class="icon-1">
     <i class="fa-solid fa-pen"></i>
     <i class="fa-solid fa-trash" id="deleleicon" onclick="deleteicon()" ></i>
  </div>`
    Task.append(div)
    aoverlay.style.display="none"
})

var popsure=document.getElementById("pop1")

popsure.style.display="none"
function delicon(){
  popsure.style.display="block"
}

function cancelpop(){
  popsure.style.display="none"
}

// function deltask(event){
//   var taskName = button.closest('.tasks-1').querySelector('.first');
//   taskName.event.remove()
//   popsure.style.display="none"
// }
// function deltask(event) {
//     var divToDelete = event.closest('.first');
//     divToDelete.parentNode.removeChild(divToDelete);
//     Optionally hide any confirmation popups or overlays here if needed
//     event.target.parentElement.remove()
// }

// var deleteButtons = document.getElementById("delete1");

// deleteButtons.forEach(function(deleteButton) {
//     deleteButton.addEventListener('click', function() {
//         var taskBlock = this.closest('.first');
//         taskBlock.remove();
//     });
// });
// function deletedata(){
// }