var sidnav = document.querySelector(".side-navbar");
var links = document.querySelectorAll(".side-navbar-links a");

function showNavbar() {
    sidnav.style.left = "0";
}

function closeNavbar() {
    sidnav.style.left = "-60%";
}

// Add event listeners to all sidebar links
links.forEach(link => {
    link.addEventListener("click", closeNavbar);
});

function contact() {
    alert("Thank you. Our team will message you soon...");
}

function btn(event) {
    alert("This is not available now..");
}

function reservation() {
    alert("Thank you. Your table was reserved...");
}
