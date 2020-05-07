const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img"]);
logo.src = "img/logo.png";

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img"]);
ctaImage.src = "img/header-img.png"

let midImage = document.getElementById("middle-img");
midImage.setAttribute('src', siteContent["main-content"]["img"]);
midImage.src = "img/mid-page-accent.jpg";

//text

const h1 = document.querySelector('.cta-text h1');
h1.textContent = siteContent.cta.h1;

const button = document.querySelector('.cta .cta-text button');
button.textContent = siteContent.cta.button;

// const featH4 = document.querySelector('.text-content h4');
// featH4.textContent = siteContent["main-content"]["top-content"]["text-content"].h4;
const featuresCont = document.querySelector('.top-content .text-content p');
featuresCont.textContent = siteContent["main-content"]["features-content"];

const aboutCont = document.querySelector('.top-content .text-content p');
aboutCont.textContent = siteContent["main-content"]["features-content"];

// nav bar

const navItems = document.querySelectorAll('nav a');
for (let i = 1; i<= navItems.length; i++) {
  navItems[i].textContent = siteContent.nav[`nav-item-${i}`];
};

// const h4 = document.querySelectorAll('h4');
// for (let i = 0; i<= h4.length; i++) {
//   h4[i].textContent = siteContent.h4[`${i}`];
// };
