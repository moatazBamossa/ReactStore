export const downloadCV = () => {};

export const Links = [
  {
    to: "home",
    title: "Home",
  },
  {
    to: "about",
    title: "About",
  },
  {
    to: "projects",
    title: "Projects",
  },
  {
    to: "contact",
    title: "Contact",
  },
];
export const sochialMidiaLinks = [
  {
    to: "https://www.instagram.com/mb_progarmer/?utm_source=qr&r=nametag",
    icon: "instagram",
  },
  {
    to: "https://www.linkedin.com/in/moataz-albar-bamossa",
    icon: "linkedin",
  },
  {
    to: "https://github.com/moatazAlbar",
    icon: "github",
  },
  {
    to: "https://twitter.com/mb_programer?t=Q_zVS7Bupjm0HT1-Xvw4gA&s=31",
    icon: "x-twitter",
  },
];

// /* ----- NAVIGATION BAR FUNCTION ----- */
// // export function myMenuFunction() {
// //   const menuBtn = document.getElementById("myNavMenu");

// //   if (menuBtn.className === "nav-menu") {
// //     menuBtn.className += " responsive";
// //   } else {
// //     menuBtn.className = "nav-menu";
// //   }
// // }

// /* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
// window.onscroll = function () {
//   const s = document.getElementsByTagName("section");
//   console.log("s", s);
// };

// function headerShadow() {
//   const navHeader = document.getElementById("header");

//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
//     navHeader.style.height = "70px";
//     navHeader.style.lineHeight = "70px";
//   } else {
//     navHeader.style.boxShadow = "none";
//     navHeader.style.height = "90px";
//     navHeader.style.lineHeight = "90px";
//   }
// }

// /* ----- TYPING EFFECT ----- */
// const typingEffect = new Typed(".typedText", {
//   strings: ["Developer", "Front-end"],
//   loop: true,
//   typeSpeed: 100,
//   backSpeed: 80,
//   backDelay: 2000,
// });

// /* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
// const sr = ScrollReveal({
//   origin: "top",
//   distance: "80px",
//   duration: 2000,
//   reset: true,
// });

// /* -- HOME -- */
// sr.reveal(".featured-text-card", {});
// sr.reveal(".featured-name", { delay: 100 });
// sr.reveal(".featured-text-info", { delay: 200 });
// sr.reveal(".featured-text-btn", { delay: 200 });
// sr.reveal(".social_icons", { delay: 200 });
// sr.reveal(".featured-image", { delay: 300 });

// /* -- PROJECT BOX -- */
// sr.reveal(".project-box", { interval: 200 });

// /* -- HEADINGS -- */
// sr.reveal(".top-header", {});

// /* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

// /* -- ABOUT INFO & CONTACT INFO -- */
// const srLeft = ScrollReveal({
//   origin: "left",
//   distance: "80px",
//   duration: 2000,
//   reset: true,
// });

// srLeft.reveal(".about-info", { delay: 100 });
// srLeft.reveal(".contact-info", { delay: 100 });

// /* -- ABOUT SKILLS & FORM BOX -- */
// const srRight = ScrollReveal({
//   origin: "right",
//   distance: "80px",
//   duration: 2000,
//   reset: true,
// });

// srRight.reveal(".skills-box", { delay: 100 });
// srRight.reveal(".form-control", { delay: 100 });

// /* ----- CHANGE ACTIVE LINK ----- */

// const sections = document.querySelectorAll("section[id]");

// function scrollActive() {
//   const scrollY = window.scrollY;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight,
//       sectionTop = current.offsetTop - 50,
//       sectionId = current.getAttribute("id");

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector(".nav-menu a[href*=" + sectionId + "]")
//         .classList.add("active-link");
//     } else {
//       document
//         .querySelector(".nav-menu a[href*=" + sectionId + "]")
//         .classList.remove("active-link");
//     }
//   });
// }
