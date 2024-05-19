var popone=document.getElementById("pop1")
var ca1=document.getElementById("c1")
var de1=document.getElementById("d1")
var taskone=document.getElementById("task-1")

function pop(){
    popone.style.display="block"   
}

ca1.onclick=function(){
    popone.style.display="none"
}

de1.onclick=function(){
    taskone.remove()
    popone.style.display="none"
}
var checkOne=document.getElementById("onone")
var exOne=document.getElementById("ex-1")
onone.style.display="none"
document.getElementById("radioone").onclick=function(){
    if(checkOne.style.display==="none"){
        checkOne.style.display="block"
        exOne.style.textDecoration="line-through"
        exOne.style.color="gray"
    }
    else if(checkOne.style.display==="block"){
        checkOne.style.display="none"
        exOne.style.textDecoration="none"
        exOne.style.color="black"
    }
}

document.getElementById("addone").style.display="none"

function addtask(){
    document.getElementById("addone").style.display="block"
}
    
document.getElementById("can").onclick=function(){
    document.getElementById("addone").style.display="none"
}