/* global document*/ 
/* global localStorage*/ 
/* global window*/ 


var name; 
var time; 
var price; 
var capacity; 
var RadioResult; 
var describtion;
var check;
 var date;
 var date2;

var Month;
                 var Year;
function getFirstName() {
    return document.getElementById("name").value;
}
function getCap() {
    return document.getElementById("capacity").value;
}
                 function getTime() {
    return document.getElementById("time").value;
}function getPrice() {
    return document.getElementById("price").value;
}
function getButtonRadio()
{
  if(document.getElementById("poll1").checked)
    return document.getElementById("poll1").value; 
    if(document.getElementById("poll2").checked)
    return document.getElementById("poll2").value; 
   
}
function getCheck()
{
  if(document.getElementById("check1").checked && document.getElementById("check2").checked)
     { 
    check=document.getElementById("check1").value+" and "+ document.getElementById("check2").value
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
 function getDate()
            {
            
                 date = document.getElementById("date");
return  date.options[date.selectedIndex].value   
            }
function getMonth()
            {
            
                 Month = document.getElementById("Month");
return  Month.options[Month.selectedIndex].value   
            }
                 function getYear()
            {
            
                 Year = document.getElementById("Year");
return  Year.options[Year.selectedIndex].value   
            }
function display() {
    name = getFirstName();
    capacity = getCap();
  RadioResult=getButtonRadio();
  check=getCheck();
  describtion=getDesc();
    date2=getDate();
    Month=getMonth();
    Year=getYear();
    time=getTime();
   price=getPrice();
	
	localStorage.setItem("name", name);
		localStorage.setItem("capacity", capacity);

			localStorage.setItem("RadioResult", RadioResult);

				localStorage.setItem("check", check);

					localStorage.setItem("describtion", describtion);

						localStorage.setItem("date2", date2);

							localStorage.setItem("Month", Month);

								localStorage.setItem("Year", Year);
								localStorage.setItem("time", time);
								localStorage.setItem("price", price);

							     document.write("Thank you for publishing the following event <br/>");
	
	window.location.replace("display.html")
    

   // document.write("Event's Name: <br/>");
     // document.write(name);
   // document.write("<br/><br/>Total Event Capacity:<br/>");
     // document.write(capacity);
       // document.write("<br/><br/>Time:<br/>");
     // document.write(time);  
    // document.write("<br/><br/>Price:<br/>");
     // document.write(price);
// document.write("<br/><br/>Cancellation Allowd?<br/>");
 // document.write(RadioResult);
   // document.write("<br/><br/>Gender: <br/>");
     // document.write(check);
    
       // document.write("<br/><br/>Date: <br/>");
// document.write(date2)
    // document.write("/")
    // document.write(Month)
        // document.write("/")
    // document.write(Year)



// document.write("<br/><br/>Describtion<br/>");
 // document.write(describtion);
    // document.getElementById("form").submit();

} 
