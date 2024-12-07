numberInput();

let checkNumberPattern = function () {
  let numberInput = document.getElementById("number-input");
  let errorContainer = document.querySelector(".info-content .error-messages");
  let numberValue = numberInput.value;
  let errorList = document.querySelector(".error-messages ul");

  if (!errorList) {
    errorList = document.createElement("ul");
    errorList.classList.add("password-errors");
    errorContainer.appendChild(errorList);
  }

  let hasError = false;

  errorList.innerHTML = "";

  if (numberValue.length !== 11 || isNaN(numberValue)) {
    let errorItem = document.createElement("li");
    errorItem.innerText = "شماره تلفن باید 11 رقم باشد و فقط شامل اعداد باشد";
    errorList.appendChild(errorItem);
    hasError = true;
  }

  return hasError;
};

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

  if (/[\u0600-\u06FF]/.test(passwordValue)) {
    let errorItem = document.createElement("li");
    errorItem.innerText = "گذرواژه نباید شامل حروف فارسی باشد";
    errorList.appendChild(errorItem);
    hasError = true;
  }
  if (!hasError) {
    errorList.innerText = "";
  }

  return hasError;
};

document.querySelector(".signup-form").onsubmit = function (e) {
  e.preventDefault();

  let name = document
    .querySelector("input[placeholder='اسم را وارد کنید .']")
    .value.trim();
  let family = document
    .querySelector("input[placeholder='فامیلی را وارد کنید .']")
    .value.trim();
  let email = document
    .querySelector("input[placeholder='حساب الکترونیک را وارد کنید .']")
    .value.trim();

  let passwordHasError = checkPattern();
  let numberHasError = checkNumberPattern();

  if (name && family && email && !passwordHasError && !numberHasError) {
    alert("ثبت‌نام با موفقیت انجام شد!");
  } else {
    if (!name || !family || !email) {
      alert("لطفاً تمامی فیلدهای نام، نام خانوادگی و ایمیل را پر کنید.");
    }
  }
};

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const debouncedCheck = debounce(() => {
  checkNumberPattern();
  checkPattern();
}, 1000);

document
  .getElementById("password-input")
  .addEventListener("input", debouncedCheck);

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

function numberInput() {
  document
    .getElementById("number-input")
    .addEventListener("keypress", function (e) {
      e.returnValue = /^[0-9]$/.test(e.key);
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
    dayName = "َشنبه";
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