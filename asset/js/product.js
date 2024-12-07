productAsideScroll();
function productAsideScroll() {
  let asideProduct = document.getElementById("aside");
  let scrollThreshold = 1249;
  addEventListener("scroll", () => {
    if (scrollY >= scrollThreshold) {
      aside.classList.add("postion-static");
    } else {
      aside.classList.remove("postion-static");
    }
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