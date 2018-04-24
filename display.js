
/* global document*/ 
/* global localStorage*/ 
/* global window*/ 


function getUserInfo() {
            document.getElementById("name").innerHTML = localStorage.getItem("name");
            document.getElementById("capacity").innerHTML = localStorage.getItem("capacity");
                 document.getElementById("price").innerHTML = localStorage.getItem("price");
      document.getElementById("time").innerHTML = localStorage.getItem("time");
            document.getElementById("date2").innerHTML = localStorage.getItem("date2");
            document.getElementById("Month").innerHTML = localStorage.getItem("Month");
            document.getElementById("Year").innerHTML = localStorage.getItem("Year");
            document.getElementById("RadioResult").innerHTML = localStorage.getItem("RadioResult");
            document.getElementById("check").innerHTML = localStorage.getItem("check");
            document.getElementById("describtion").innerHTML = localStorage.getItem("describtion");
     
        }
        window.onload = getUserInfo;