let checkPattern = function () {
  let passwordInput = document.getElementById("password-input");
  let errorContainer = document.querySelector(".info-content .error-messages");
  let passwordValue = passwordInput.value;
  let errorList = document.querySelector(".error-messages ul");

  if (!errorList) {
    errorList = document.createElement("ul");
    errorList.classList.add("password-errors");
    errorContainer.appendChild(errorList);
  }

  let hasError = false;

  errorList.innerHTML = "";

  if (passwordValue.length < 8) {
    let errorItem = document.createElement("li");
    errorItem.innerText = "گذرواژه باید 8 کاراکتر یا بیشتر باشد";
    errorList.appendChild(errorItem);
    hasError = true;
  }

  if (!/[a-z]/.test(passwordValue)) {
    let errorItem = document.createElement("li");
    errorItem.innerText = "گذرواژه باید دارای حروف a تا z باشد";
    errorList.appendChild(errorItem);
    hasError = true;
  }

  if (!/[A-Z]/.test(passwordValue)) {
    let errorItem = document.createElement("li");
    errorItem.innerText = "گذرواژه باید دارای حروف A تا Z باشد";
    errorList.appendChild(errorItem);
    hasError = true;
  }

  if (!hasError) {
    errorList.innerText = "";
  }

  return hasError;
};

document.getElementById("sign-in-form").onsubmit = function (e) {
  e.preventDefault();

  let passwordHasError = checkPattern();
  let email = document.querySelector(".sign-in-inputs").value;

  if (!passwordHasError && email) {
    alert("ورود با موفقیت انجام شد!");
  } else {
    alert("تطفا تمامی فیلد هارو پر کنید و خطا های فرم را رفع کنید .");
  }
};

let iconTag = document.getElementById("eye");
iconTag.onmousedown = function (e) {
  if (e.button === 0) {
    this.previousElementSibling.type = "text";
  }
};
let onMouseHandler = function () {
  this.previousElementSibling.type = "password";
};
iconTag.onmouseup = onMouseHandler;
iconTag.onmouseout = onMouseHandler;

let timeOutHandler;
document.getElementById("password-input").onkeypress = function () {
  clearTimeout(timeOutHandler);
  timeOutHandler = setTimeout(checkPattern, 1000);
};
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