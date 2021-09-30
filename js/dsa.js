function search() {

}

function openMenu() {
    
    sideNav.classList.add("is-active");

    document.getElementById("side-nav").style.width = "250px";

    document.getElementById("page").style.marginLeft = "250px";
    document.getElementById("bot-foot").style.marginLeft = "250px";
}

function closeMenu() {

    sideNav.classList.remove("is-active");

    document.getElementById("side-nav").style.width = "0px";

    document.getElementById("page").style.marginLeft = "0px";
    document.getElementById("bot-foot").style.marginLeft = "0px";
}

var sideNav = document.querySelector('.menu');

sideNav.addEventListener('click', () => sideNav.classList.contains('is-active') ? closeMenu() : openMenu());

closeMenu();