let vid = document.getElementById("myVideo");

vid.playbackRate = 0.5;

function data(){
var a = document.getElementById("n1").value;
var b = document.getElementById("n2").value;
var c = document.getElementById("n3").value;

if(a=="" || b=="" || c=="")
{
alert("All Field Are Mandtory");
return false;   
}
else if(b.length<11 || b.length>11)
{
alert("Only 11 Digits Are Allowed ! Please Enter Valid Number");
return false;
}
else if(isNaN(b))
{
alert("Only Numbers Are Allowed ! Please Enter Valid Number");
return false;
}
else
{
true;
}

}