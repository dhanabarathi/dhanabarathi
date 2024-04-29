document.getElementById("heading").innerHTML="Table"
document.getElementById("heading").style.textAlign="center"
document.getElementById("fname").innerHTML=""
function prin(){
    var fname=document.getElementById("cat").value
   document.getElementById("fname").innerHTML="welcome: "+fname
   var lname=document.getElementById("dog").value
   document.getElementById("lname").innerHTML=" "+lname
   var gender=document.getElementById("box").value
   document.getElementById("gender").innerHTML=""+gender
    var email=document.getElementById("box1").value
    document.getElementById("email").innerHTML="Your email is:"+email
    var mnum=document.getElementById("box2").value
    document.getElementById("mnum").innerHTML="Your number:"+mnum
}