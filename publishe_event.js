<script>
var name; 
var email; 
function getFirstName() {
    return document.getElementById("name").value;
}
function getSecondName() {
    return document.getElementById("email").value;
}
function display() {
    name = getFirstName();
    email = getSecondName();
   document.write("Event's Name: <br/>");
     document.write(name);
   document.write("<br/><br/>Contact via Email:<br/>");
     document.write(email);
    document.getElementById("form").submit();

} 
</script>