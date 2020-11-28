function toggleMenu(){
    const nav = document.getElementById("hamburger-menu");
    nav.classList.toggle("active");
}

let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}

new hoverEffect({
    parent: document.querySelector(".my-image"),
    intensity: 0.5,
    image1: "Pictures/124192624_1826986344121385_6771965711143217214_o.jpg",
    image2: "Pictures/Outdoors-man-portrait_(cropped).jpg",
    displacementImage: "Pictures/fluid.jpg"
})
