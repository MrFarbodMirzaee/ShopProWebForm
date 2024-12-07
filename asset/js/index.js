document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".swiper-container", {
    direction: "horizontal",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    effect: "fade",
    speed: 1100,
  });
});

let currentIndex = 0;
const items = document.querySelectorAll(".discounted-item");
const totalItems = items.length;

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalItems;
  if (currentIndex < 7) {
    updateCarousel();
  }
});

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentIndex !== 0) {
    currentIndex = (currentIndex - 1) % totalItems;
    updateCarouselMinus();
  }
  updateCarouselMinus();
});

function updateCarousel() {
  const itemWidth = items[0].offsetWidth;
  items.forEach((item, index) => {
    item.style.transform = `translateX(${currentIndex * itemWidth}px)`;
    item.style.transition = "all .4s";
  });
}

function updateCarouselMinus() {
  const itemWidth = items[0].offsetWidth;

  items.forEach((item, index) => {
    item.style.transform = `translateX(-${0}px)`;
    item.style.transition = "all .4s";
  });
}

document.getElementById("send-news-form").onsubmit = function (e) {
  e.preventDefault();
  let emailFooterInput = document.getElementById("footer-input").value;
  if (emailFooterInput) {
    alert("مرسی اخبار های جدید به ایمیل تان ارسال خواهد شد .");
  } else {
    alert("لطفا ایمیل تان را وارد کنید .");
  }
};
updateDateTime();
function updateDateTime() {
  let myDate = new Date();
  let dateTag = document.getElementById("date-info");
  dateTag.innerHTML = myDate.toLocaleString("fa", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}


setInterval(updateDateTime, 1000);
let day = new Date().getDay();
switch (day) {
  case 5:
    dayName = "جمعه";
    break;
  case 0:
    dayName = "یکشنبه";
    break;
  case 1:
    dayName = "دوشنبه";
    break;
  case 2:
    dayName = "سه شنبه";
    break;
  case 3:
    dayName = "چهارشنبه";
    break;
  case 4:
    dayName = "پنجشنبه";
    break;

  default:
    dayName = "شنبه";
    break;
}
document.getElementById("date-info-day").innerHTML = `امروز ${dayName}`;

let hamburgerButton = document.getElementById("hamburger");
let menuIcon = document.getElementById("menu-icon");
let navLinks = document.getElementById("nav-links"); 

hamburgerButton.addEventListener("click", () => {
  // Toggle between hamburger and close icon
  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
    navLinks.classList.remove("d-none");
  } else {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
    navLinks.classList.add("d-none");
  }
});
