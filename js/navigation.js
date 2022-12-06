const toggleHamburgerMenu = document.getElementById("toggleHamburgerMenu");
const toggleFooterMenu = document.getElementById("toggleFooterMenu");

toggleHamburgerMenu.addEventListener('click',() => {
    let menu = document.getElementById("menu");
    if (menu.className === "menu") {
        menu.className += "-open";
    } else {
        menu.className = "menu";
    }
});

toggleFooterMenu.addEventListener('click',() => {
    let menu = document.getElementById("site-footer");
    let icon = document.getElementById("footer-icon");
    if (menu.className === "site-footer") {
        menu.className += "-up";
        icon.className = "fa fa-minus-circle";
    } else {
        menu.className = "site-footer";
        icon.className = "fa fa-plus-circle";
    }
});





