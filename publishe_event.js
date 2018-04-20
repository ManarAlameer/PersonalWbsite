var name; 
var email; 
var RadioResult; 
var describtion;
var check;
function getFirstName() {
    return document.getElementById("name").value;
}
function getSecondName() {
    return document.getElementById("email").value;
}
function getButtonRadio()
{
  if(document.getElementById("poll1").checked)
    return document.getElementById("poll1").value; 
    if(document.getElementById("poll2").checked)
    return document.getElementById("poll2").value; 
    if(document.getElementById("poll3").checked)
    return document.getElementById("poll3").value; 
}
function getCheck()
{
  if(document.getElementById("check1").checked && document.getElementById("check2").checked)
     { 
    check=document.getElementById("check1").value+" , "+ document.getElementById("check2").value
    return check;   
    }
      if(document.getElementById("check1").checked)
    return document.getElementById("check1").value; 
    if(document.getElementById("check2").checked)
    return document.getElementById("check2").value; 
}
function getDesc()
{
      return document.getElementById("describtion").value;

}

function display() {
    name = getFirstName();
    email = getSecondName();
  RadioResult=getButtonRadio();
  check=getCheck();
  describtion=getDesc();
   document.write("Event's Name: <br/>");
     document.write(name);
   document.write("<br/><br/>Contact via Email:<br/>");
     document.write(email);
document.write("<br/><br/>Radio Button result<br/>");
 document.write(RadioResult);
   document.write("<br/><br/>Check result: <br/>");
     document.write(check);
document.write("<br/><br/>Describtion<br/>");
 document.write(describtion);

    document.getElementById("form").submit();

} 


