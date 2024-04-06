//pop up script
// Get the popup and button
var popup = document.getElementById("popup");
var popupBtn = document.getElementById("popup-btn");

// Get the close button
var closeBtn = popup.querySelector(".close");

// When the user clicks the button, open the popup
popupBtn.onclick = function() {
    popup.style.display = "block";
}

// When the user clicks on <span> (x), close the popup
closeBtn.onclick = function() {
    popup.style.display = "none";
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}
