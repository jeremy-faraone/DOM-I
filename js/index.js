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

const feats = document.getElementsByTagName('p');
feats[0].textContent = siteContent["main-content"]["features-content"];

const featHead = document.getElementsByTagName('h4');
featHead[0].textContent = siteContent["main-content"]["features-h4"];

const abtHead = document.getElementsByTagName('h4');
abtHead[1].textContent = siteContent["main-content"]["about-h4"];

const abt = document.getElementsByTagName('p');
abt[1].textContent = siteContent["main-content"]["about-content"];
//
const srvHead = document.getElementsByTagName('h4');
srvHead[2].textContent = siteContent["main-content"]["services-h4"];

const srv = document.getElementsByTagName('p');
srv[2].textContent = siteContent["main-content"]["services-content"];

const prodHead = document.getElementsByTagName('h4');
prodHead[3].textContent = siteContent["main-content"]["product-h4"];

const prod = document.getElementsByTagName('p');
prod[3].textContent = siteContent["main-content"]["product-content"];

const visHead = document.getElementsByTagName('h4');
visHead[4].textContent = siteContent["main-content"]["vision-h4"];

const vis = document.getElementsByTagName('p');
vis[4].textContent = siteContent["main-content"]["vision-content"];

// Contact

const contHead = document.getElementsByTagName('h4');
contHead[5].textContent = siteContent["contact"]["contact-h4"];

const cont1 = document.getElementsByTagName('p');
cont1[5].textContent = siteContent["contact"]["address"];

const cont2 = document.getElementsByTagName('p');
cont2[6].textContent = siteContent["contact"]["phone"];

const cont3 = document.getElementsByTagName('p');
cont3[7].textContent = siteContent["contact"]["email"];

// footer

const foot = document.getElementsByTagName('p');
foot[8].textContent = siteContent["footer"]["copyright"];

// nav bar

const navItems = document.querySelectorAll('nav a');
for (let i = 1; i<= navItems.length; i++) {
  navItems[i].textContent = siteContent.nav[`nav-item-${i}`];
};