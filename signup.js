function page(){

    var password=document.getElementById("Password").value;
    var email=document.getElementById("Email").value;
    var paragraph=document.getElementById("Paragraph")
    

    // function filterpassword(Password) {
    //     var regex = /^^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/;
    //     return regex.test(Password);
    // }

    // function filterema(Email) {
    //     var regex1 = /^^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //     return regex1.test(Email);
    // }

    // if(filterpassword(password)&&filterema(email)){
    //     location.href="task.html"
    // }
    // else{
    //     paragraph.style.display="block"   
    // }

    if(email===localStorage.getItem("ls_email")&&password===localStorage.getItem("ls_password")){
        location.href="task.html"
    }
    else{
        paragraph.style.display="block"
    }
    localStorage.setItem('ls_password',password);
    localStorage.setItem('ls_email',email);
}