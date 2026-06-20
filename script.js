const menu = document.querySelector(".menu-icon");

const sidebar = document.querySelector(".left-sidebar");

menu.addEventListener("click", ()=>{

    sidebar.classList.toggle("hide");

});