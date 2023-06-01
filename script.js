var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".side-bar");
var main = document.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    main.classList.toggle("large-contaner");
}
