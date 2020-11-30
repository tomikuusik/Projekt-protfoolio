//Toggles CSS class "active" on click --> to open/close menu
function toggleMenu(){
    const nav = document.getElementById("hamburger-menu");
    nav.classList.toggle("active");
}

//https://www.youtube.com/watch?v=qYFkQa0Bbq0
let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}
