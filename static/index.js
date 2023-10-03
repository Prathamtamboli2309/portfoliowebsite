
function validate(){
    var fname=document.getElementById("name").value;
    var gmail=document.getElementById("email").value;
    var suject=document.getElementById("suject").value;
    var message=document.getElementById("message").value;

    if(fname=="" && gmail=="" && suject=="" && message==""){
        document.getElementById("error").innerHTML="<font color='red'>Please fill the Field</font>";
        console.log("hi")
        return false;
    }
}
