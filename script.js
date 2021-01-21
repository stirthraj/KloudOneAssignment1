var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}












function Hello()
{
	alert("Hello World!	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
}
function Show()
{
	
	document.getElementById("id1").style.display = "";
}
function Hide()
{
	document.getElementById("id1").style.display = "none";
}
function Show1()
{
	
	document.getElementById("id2").style.display = "";
}
function Hide1()
{
	document.getElementById("id2").style.display = "none";
}