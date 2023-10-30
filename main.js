//MENUE
let barBtn = document.querySelector("i.bars");
let clsoeBtn = document.querySelector("i.close");
let menue = document.querySelector("header .ul-list");
let nav = document.querySelector("nav");
barBtn.onclick = () => {
  nav.style.display = "block";
  menue.classList.remove("hidden");
};
clsoeBtn.onclick = () => {
  menue.classList.add("hidden");
  nav.style.display = "hidden";
};
//  MENUE LINKS
let menueLinks = document.querySelectorAll("header ul.ul-list li");
menueLinks.forEach((link) => {
  link.onclick = () => {
    if (!menue.classList.contains("hidden")) {
      menue.classList.add("hidden");
      window.scrollTo({
        top: document.getElementById(`${link.dataset.link}`).offsetTop,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: document.getElementById(`${link.dataset.link}`).offsetTop,
        behavior: "smooth",
      });
    }
  };
});

//TABS
let tabs = document.querySelectorAll(".games ul.tabs li");
let cards = document.querySelectorAll(".games .cards-container .card");
tabs.forEach((tab) => {
  tab.onclick = () => {
    tabs.forEach((e) => {
      e.classList.remove("active");
    });
    tab.classList.add("active");
    cards.forEach((ele) => {
      ele.classList.remove("show");
    });
    cards.forEach((card) => {
      if (card.classList.contains(`${tab.dataset.card}`)) {
        card.classList.add("show");
      }
    });
  };
});
let aboutsectionOffset = document.querySelector(".about").offsetTop;
let aboutSection = document.querySelector(".about .container");
window.addEventListener("scroll", () => {
  if (window.scrollY >= aboutsectionOffset - 100) {
    aboutSection.classList.add("show");
  } else {
    aboutSection.classList.remove("show");
  }
});
let progressSpans = document.querySelectorAll("span.prog");
let gamesSectionOffset = document.querySelector(".games").offsetTop;
let gamesection = document.querySelector(".games .container");
window.addEventListener("scroll", () => {
  if (window.scrollY >= gamesSectionOffset - 100) {
    gamesection.classList.add("show");
    setTimeout(() => {
      progressSpans.forEach((span) => {
        span.style.width = `${span.dataset.progress}`;
      });
    }, 2000);
  } else {
    gamesection.classList.remove("show");
    progressSpans.forEach((span) => {
      span.style.width = `0`;
    });
  }
});

window.addEventListener("scroll", () => {
  if (
    window.scrollY >= document.querySelector("section.intro").offsetTop &&
    window.scrollY < aboutsectionOffset
  ) {
    makeItActive(menueLinks[0]);
  } else if (
    window.scrollY >= aboutsectionOffset &&
    window.scrollY < gamesSectionOffset
  ) {
    makeItActive(menueLinks[1]);
  } else if (
    window.scrollY >= gamesSectionOffset &&
    window.scrollY < document.querySelector("section.tour").offsetTop
  ) {
    makeItActive(menueLinks[2]);
  } else if (
    window.scrollY >= document.querySelector("section.tour").offsetTop &&
    window.scrollY < document.querySelector("section.contact").offsetTop
  ) {
    makeItActive(menueLinks[3]);
  } else if (
    window.scrollY >= document.querySelector("section.contact").offsetTop
  ) {
    makeItActive(menueLinks[4]);
  }
});
function makeItActive(link) {
  menueLinks.forEach((e) => {
    e.classList.remove("active");
  });
  link.classList.add("active");
}
