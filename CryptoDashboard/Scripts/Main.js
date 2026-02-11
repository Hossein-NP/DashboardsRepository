//Variabels
let burgerMenu = document.querySelector(".burger-menu");
let aside = document.querySelector(".aside");
let asideMiddleText = document.querySelectorAll(".aside-middle__text");
let asideMiddleLinks = document.querySelectorAll(".aside-middle__links");
let asideTopLogoText = document.querySelectorAll(".aside-top__logoText");
let setting = document.querySelector(".setting");
let logOut = document.querySelector(".logout");
let overlay = document.querySelectorAll(".overlay");


// App Script >> 1) Switch theme 
let lightTheme = document.querySelector(".aside-bottom__theme-light");
let darkTheme = document.querySelector(".aside-bottom__theme-dark");



// App Script >> 2) Open Sidebar --- Small Screen.
burgerMenu.addEventListener("click", e => {
    aside.classList.toggle("aside--open");
    asideTopLogoText.forEach(function(text) {
        text.classList.add("aside-top__logoText--open");
    });
    asideMiddleLinks.forEach(function(link) {
        link.classList.add("aside-top__link--open");
    });
    asideMiddleText.forEach(function(text) {
      text.classList.add("aside-middle__text--open");
    })
    overlay.forEach(function(overlay) {
        overlay.classList.add("overlay--active");
    });
})

overlay.forEach(function(overlay) {
    overlay.addEventListener("click", e => {
        aside.classList.remove("aside--open");
        asideTopLogoText.forEach(function(text) {
            text.classList.remove("aside-top__logoText--open");
        });
        overlay.classList.remove("overlay--active");
    });
});