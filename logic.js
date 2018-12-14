// When the user clicks on div, open the pop up
function myFunction(el, event) {
    console.log(event) //test
    event.preventDefault(); //I'll learn about this later lol
    var popup =
document.getElementById("myPopup");
    popup.classList.toggle("show");
}