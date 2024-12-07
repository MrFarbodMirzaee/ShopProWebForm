document.getElementById("send-news-form").onsubmit = function (e) {
  e.preventDefault();
  let emailFooterInput = document.getElementById("footer-input").value;
  if (emailFooterInput) {
    alert("مرسی اخبار های جدید به ایمیل تان ارسال خواهد شد .");
  } else {
    alert("لطفا ایمیل تان را وارد کنید .");
  }
};
numberInput();
let checkNumberPattern = function () {
  let numberInput = document.getElementById("number-input");
  let errorContainer = document.querySelector(
    ".info-content .error-messages-call-us"
  );
  let numberValue = numberInput.value;
  let errorList = document.querySelector(".error-messages-call-us ul");

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
document.querySelector(".contact-us-form").onsubmit = function (e) {
  e.preventDefault();
  let number = checkNumberPattern();
  let email = document.getElementById("email-input-call-us").value.trim();
  let name = document.getElementById("name-input-call-us").value.trim();
  let family = document.getElementById("family-input-call-us").value.trim();
  let messages = document.getElementById("textarea").value.trim();
  let phoneNumber = document.getElementById("number-input").value.trim();

  if (!number && email && name && family && messages && phoneNumber) {
    alert("پیغام با موفقیت فرستاده شد ");
  } else {
    alert("لطفا فیلد هارو پر کنید و خطا هارو رفع");
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


function numberInput() {
  document
    .getElementById("number-input")
    .addEventListener("keypress", function (e) {
      e.returnValue = /^[0-9]$/.test(e.key);
    });
}
let timeOutHandler;
document.getElementById("password-input").onkeypress = function () {
  clearTimeout(timeOutHandler);
  timeOutHandler = setTimeout(checkNumberPattern, 1000);
};
