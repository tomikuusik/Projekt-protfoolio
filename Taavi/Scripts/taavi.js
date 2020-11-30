function toggleMenu(){
    const nav = document.getElementById("hamburger-menu");
    nav.classList.toggle("active");
}

function closeMenu(){
    const toggle = document.getElementsByClassName("menu-item");
    toggle.classList.toggle("close");
}

let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}
