var sidnav = document.querySelector(".side-navbar");

function showNavbar() {
    sidnav.style.left = "0";
}

function closeNavbar() {
    sidnav.style.left = "-60%";
}

function contact() {
    alert("Thank you. Our team will message you soon...");
}

function btn(event) {
    alert("This is not available now..");
}

function reservation() {
    alert("Thank you. Your table was reserved...");
}

document.addEventListener("DOMContentLoaded", () => {
    // Create the header element
    const header = document.createElement("header");

    // Create the nav element
    const nav = document.createElement("nav");
    nav.className = "navbar";

    // Create the h1 element and set its text
    const heading = document.createElement("h1");
    heading.textContent = "Burger Hut";

    // Create the div for navbar links
    const navbarLinks = document.createElement("div");
    navbarLinks.className = "navbar-links";

    // Create an array of link data
    const links = [
        { href: "index.html", text: "Home" },
        { href: "menu.html", text: "Menu" },
        { href: "reservation.html", text: "Reservation" },
        { href: "#contact", text: "Contact" },
        { href: "index.html#about", text: "About us" }
    ];

    // Create the links and append them to the navbarLinks div
    links.forEach(linkData => {
        const p = document.createElement("p");
        p.className = "navbar-link";
        const a = document.createElement("a");
        a.href = linkData.href;
        a.textContent = linkData.text;
        p.appendChild(a);
        navbarLinks.appendChild(p);
    });

    // Create the menu toggle
    const menuToggle = document.createElement("div");
    menuToggle.className = "navbar-menu-toggle";
    const menuIcon = document.createElement("i");
    menuIcon.className = "fa-solid fa-bars";
    menuIcon.setAttribute("aria-hidden", "true");
    menuToggle.appendChild(menuIcon);

    // Append elements to nav
    nav.appendChild(heading);
    nav.appendChild(navbarLinks);
    nav.appendChild(menuToggle);

    // Append nav to header
    header.appendChild(nav);

    // Append header to the existing header in the document
    const existingHeader = document.querySelector("header");
    existingHeader.appendChild(header);

    // Create the footer element
    const footer = document.createElement("footer");
    footer.className = "footer";

    // Create the div for footer content
    const footerContent = document.createElement("div");
    footerContent.className = "footer-content";

    // Create the footer logo div
    const footerLogo = document.createElement("div");
    footerLogo.className = "footer-logo";
    const logoImg = document.createElement("img");
    logoImg.src = "./image/download.png";
    logoImg.alt = "Logo";
    logoImg.style.borderRadius = "100%";
    logoImg.style.border = "2px solid white";
    footerLogo.appendChild(logoImg);

    // Create the nav for footer links
    const footerLinks = document.createElement("nav");
    footerLinks.className = "footer-links";

    // Create an array of link data
    const link = [
        { href: "index.html", text: "Home" },
        { href: "index.html#about", text: "About" },
        { href: "menu.html", text: "Menu" },
        { href: "reservation.html", text: "Reservations" },
        { href: "#gallery", text: "Gallery" },
        { href: "#contact", text: "Contact" }
    ];

    // Create the links and append them to the footerLinks nav
    link.forEach(linkData => {
        const a = document.createElement("a");
        a.href = linkData.href;
        a.textContent = linkData.text;
        footerLinks.appendChild(a);
    });

    // Create the div for footer social links
    const footerSocial = document.createElement("div");
    footerSocial.className = "footer-social";

    // Create an array of social link data
    const socialLinks = [
        { href: "https://www.facebook.com/login", className: "fab fa-facebook" },
        { href: "https://twitter.com/i/flow/login", className: "fab fa-twitter" },
        { href: "https://www.instagram.com/", className: "fab fa-instagram" }
    ];

    // Create the social links and append them to the footerSocial div
    socialLinks.forEach(socialLinkData => {
        const a = document.createElement("a");
        a.href = socialLinkData.href;
        const icon = document.createElement("i");
        icon.className = socialLinkData.className;
        a.appendChild(icon);
        footerSocial.appendChild(a);
    });

    // Append the footerLogo, footerLinks, and footerSocial to the footerContent div
    footerContent.appendChild(footerLogo);
    footerContent.appendChild(footerLinks);
    footerContent.appendChild(footerSocial);

    // Append the footerContent div to the footer
    footer.appendChild(footerContent);

    // Create the footer text
    const footerText = document.createElement("p");
    footerText.className = "footer-text";
    footerText.textContent = "© 2024 Burger Hut. All rights reserved.";
    footer.appendChild(footerText);

    // Append the footer to the body of the document
    document.body.appendChild(footer);
});
