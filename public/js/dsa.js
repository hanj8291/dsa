//const { attemptSilentLogin } = require("express-openid-connect");

// directs the user to the searched webpage
function search() {

    // gets the text input from the search bar
    var text = document.getElementById("searchbar").value;

    // very basic if else to check if entered text matches 1 of 2 pages available otherwise refresh to home page
    // when more pages are available, this needs to be updated to a more sophisticated search engine
    if(text == 'algorithms') {
        window.location.href = "/algorithms";
    }
    else if(text == 'data structures') {
        window.location.href = "/datastructures";

    }
    else {
        window.location.href = "/";
    }
}

// opens side navigation menu bar
function openMenu() {
    
    // marks side nav bar as open
    sideNav.classList.add("is-active");

    // extends the width of the side nav to make it appear on the webpage
    document.getElementById("side-nav").style.width = "250px";

    // decreases the left margin of the main page to make room for the side nav
    document.getElementById("page").style.marginLeft = "250px";
    document.getElementById("bot-foot").style.marginLeft = "250px";
}

// closes side nav
function closeMenu() {

    // marks side nav as closed
    sideNav.classList.remove("is-active");

    // reduces side nav width to make it disappear
    document.getElementById("side-nav").style.width = "0px";

    // extends the left margin of the main page to original sizing
    document.getElementById("page").style.marginLeft = "0px";
    document.getElementById("bot-foot").style.marginLeft = "0px";
}

// onclick listener for when hamburger menu icon is clicked to open/close side nav
var sideNav = document.querySelector('.menu');

sideNav.addEventListener('click', () => sideNav.classList.contains('is-active') ? closeMenu() : openMenu());

// sets the side nav as closed when web page is initially loaded
closeMenu();

