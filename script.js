const header = document.getElementById("header");
const footer = document.getElementById("footer"); 

function contact() {
    alert("Thank you. Our team will message you soon...");
}

function btn(event) {
    alert("This is not available now..");
}

function reservation() {
    alert("Thank you. Your table was reserved...");
}


const links = [
    {href: "index.html", text: "Home"},
    {href: "menu.html", text: "Menu"},
    {href: "reservation.html", text: "Reservation"},
    {href: "#contact", text: "Contact"},
    {href: "index.html#about", text: "About us"}
];


const soc_lin = [
    {href: "https://www.facebook.com/login", class: "fab fa-facebook"},
    {href: "https://twitter.com/i/flow/login", class: "fab fa-twitter"},
    {href: "https://www.instagram.com/login", class: "fab fa-instagram"}
]

document.addEventListener('DOMContentLoaded', () => {

    function showNavbar() {
        side_nav.style.left = "0";
    }
    
    function closeNavbar() {
        side_nav.style.left = "-60%";
    }

    // Side Navbar
    const side_nav = document.createElement("nav");
    side_nav.className = "side-navbar";
    header.appendChild(side_nav);

    const side_div = document.createElement("div");
    side_div.className = "navbar-menu-toggle";
    side_div.addEventListener('click', closeNavbar);
    side_nav.appendChild(side_div);

    const side_itag = document.createElement("i");
    side_itag.className = "fa-solid fa-xmark";
    side_itag.setAttribute("aria-hidden", "true");
    side_itag.style.position = "absolute";
    side_itag.style.right = "20px";
    side_itag.style.top = "20px";
    side_div.appendChild(side_itag);

    const side_div2 = document.createElement("div");
    side_div2.className = "side-navbar-links";
    side_nav.appendChild(side_div2);

    links.forEach(link => {
        const para = document.createElement('p');
        para.className = "side-navbar-link";

        const a_tag = document.createElement('a');
        a_tag.href = link.href;
        a_tag.textContent = link.text;

        para.appendChild(a_tag);
        side_div2.appendChild(para);
    });

    // Header content
    const nav = document.createElement('nav');
    nav.className = "navbar";
    header.appendChild(nav);

    const h1 = document.createElement('h1');
    h1.innerHTML = "Burger Hut";
    nav.appendChild(h1);

    const div1 = document.createElement('div');
    div1.className = "navbar-links";
    nav.append(div1);

    links.forEach((link) => {
        const para = document.createElement('p');
        para.className = "navbar-link";

        const a_tag = document.createElement('a');
        a_tag.href = link.href;
        a_tag.textContent = link.text;

        para.appendChild(a_tag);
        div1.appendChild(para);
    });

    const div2 = document.createElement('div');
    div2.className = "navbar-menu-toggle";
    // div2.setAttribute('onclick', 'showNavbar()');
    div2.addEventListener('click', showNavbar);
    nav.append(div2);

    const i_tag = document.createElement('i');
    i_tag.className = "fa-solid fa-bars";
    i_tag.setAttribute('aria-hidden', 'true');
    div2.appendChild(i_tag);

    // Footer content
    const footerDiv1 = document.createElement('div');
    footerDiv1.className = "footer-content";
    footer.appendChild(footerDiv1);

    const footerDiv2 = document.createElement('div');
    footerDiv2.className = "footer-logo";
    footerDiv1.appendChild(footerDiv2);

    const img = document.createElement('img');
    img.src = "./images/download.png";
    img.alt = "Logo";
    img.style.border = "2px solid white";
    img.style.borderRadius = "100%";
    footerDiv2.appendChild(img);

    const footerNav = document.createElement('nav');
    footerNav.className = "footer-links";
    footerDiv1.appendChild(footerNav);

    links.forEach(link => {
        const a_tag = document.createElement('a');
        a_tag.href = link.href;
        a_tag.textContent = link.text;

        footerNav.appendChild(a_tag);
    });

    const footerDiv3 = document.createElement('div');
    footerDiv3.className = "footer-social";
    footerDiv1.appendChild(footerDiv3);

    soc_lin.forEach((social) => {
        const a_tag = document.createElement('a');
        a_tag.href = social.href;
        a_tag.className = social.class;

        footerDiv3.appendChild(a_tag);
    });

    const footerPara = document.createElement('p');
    footerPara.className = "footer-text";
    footerPara.textContent = "© 2024 Burger Hut. All rights reserved.";
    footer.appendChild(footerPara);
});
