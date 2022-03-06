// form validation

function validateEmail(email) {
  const REGEX =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return REGEX.test(email);
}

function validate(mail) {
  const EMAIL = $(mail);
  const LABEL = $(".validation-text");
  const FORM = $(".subscribe-form").eq(0);
  const SUBSCRIBEBUTTON = $(".subscribe-btn");
  if (validateEmail(EMAIL.val())) {
    // valid
    LABEL.text("email is valid! ");
    LABEL.removeClass("icon-no-email");
    LABEL.removeClass("icon-invalid");
    LABEL.addClass("icon-valid validation-text");
    FORM.css("border-color", "green");
    SUBSCRIBEBUTTON.attr("disabled", false);
    LABEL.css("color", "green");
  } else if (!EMAIL.val()) {
    // no email
    LABEL.text("please enter an email! ");
    LABEL.removeClass("icon-invalid");
    LABEL.removeClass("icon-valid");
    LABEL.addClass("icon-no-email validation-text");
    FORM.css("border-color", "#dba644");
    SUBSCRIBEBUTTON.attr("disabled", true);
    LABEL.css("color", "#dba644");
  } else {
    // invalid
    LABEL.text("email is invalid! ");
    LABEL.removeClass("icon-no-email");
    LABEL.removeClass("icon-valid");
    LABEL.addClass("icon-invalid validation-text");
    FORM.css("border-color", "red");
    SUBSCRIBEBUTTON.attr("disabled", true);
    LABEL.css("color", "red");
  }
  return;
}

// search popup
let searchInputContainer = document.getElementById("search__container");

// get full document height

var body = document.body,
  html = document.documentElement;

var height = Math.max(
  body.scrollHeight,
  body.offsetHeight,
  html.clientHeight,
  html.scrollHeight,
  html.offsetHeight
);

function popupSearch() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  searchInputContainer.style.display = "block";
  searchInputContainer.style.height = height + "px";
  document.querySelector("html, body").style.overflow = "hidden";
  let searchInput = document.querySelector(
      ".search-input__container .search-input"
    ),
    watch = document.querySelector(".watch-card"),
    glasses = document.querySelector(".glasses-card"),
    mask = document.querySelector(".mask-card");

  searchInput.focus();

  watch.style.display = "none";
  glasses.style.display = "none";
  mask.style.display = "none";

  searchInput.addEventListener("keyup", function () {
    let watch_key = watchArray.includes(searchInput.value.toLowerCase());
    let glasses_key = glassesArray.includes(searchInput.value.toLowerCase());
    let mask_key = maskArray.includes(searchInput.value.toLowerCase());

    if (watch_key) {
      console.log("worsk");
      watch.style.display = "block";
      glasses.style.display = "none";
      mask.style.display = "none";
    } else if (glasses_key) {
      watch.style.display = "none";
      glasses.style.display = "block";
      mask.style.display = "none";
    } else if (mask_key) {
      watch.style.display = "none";
      glasses.style.display = "none";
      mask.style.display = "block";
    }
  });
}

function closePopup() {
  searchInputContainer.style.display = "none";
  document.querySelector("html, body").style.overflow = "auto";
}

// modals

function validateModal() {
  $("body").css("overflow", "hidden");
}

function validateModalClose() {
  $("body").css("overflow", "auto");
}

// account

let signupBtn = document.querySelector(".sign-up");
signupBtn.innerHTML = localStorage.getItem("username") || "Sign up";
if (localStorage.getItem("username")) {
  document.querySelector(".logOut").style.display = "inline-block";
  signupBtn.removeAttribute("data-toggle");
  signupBtn.removeAttribute("data-target");
  signupBtn.removeAttribute("onclick");
} else {
  document.querySelector(".logOut").style.display = "none";
  signupBtn.setAttribute("data-toggle", "modal");
  signupBtn.setAttribute("data-target", "#account");
  signupBtn.setAttribute("onclick", "validateModal()");
}
// login

$(".logIn-submit").click(function () {
  let emailInput = document.forms["login"].getElementsByTagName("input")[0],
    passInput = document.forms["login"].getElementsByTagName("input")[1],
    logOutBtn = document.querySelector(".logOut");
  const rege =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailInput.value || !passInput.value || !rege.test(emailInput.value)) {
    setTimeout(() => {
      alert("you provided wrong data");
    }, 1000);
  } else {
    let user = emailInput.value;
    user = user.substring(0, user.lastIndexOf("@"));
    localStorage.setItem("username", user);
    document.querySelector(".sign-up").innerHTML = user;
    signupBtn.removeAttribute("data-toggle");
    signupBtn.removeAttribute("data-target");
    signupBtn.removeAttribute("onclick");
    logOutBtn.style.display = "inline-block";
  }
});

// signup

$(".signUp-submit").click(function () {
  let emailInput = document.forms["signUp"].getElementsByTagName("input")[0],
    passInput = document.forms["signUp"].getElementsByTagName("input")[1],
    passInput2 = document.forms["signUp"].getElementsByTagName("input")[2],
    logOutBtn = document.querySelector(".logOut");
  const rege =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (
    !emailInput.value ||
    !passInput.value ||
    !rege.test(emailInput.value) ||
    passInput.value !== passInput2.value ||
    passInput2.value !== passInput.value
  ) {
    setTimeout(() => {
      alert("you provided wrong data");
    }, 1000);
  } else {
    let user = emailInput.value;
    user = user.substring(0, user.lastIndexOf("@"));
    localStorage.setItem("username", user);
    document.querySelector(".sign-up").innerHTML = user;
    signupBtn.removeAttribute("data-toggle");
    signupBtn.removeAttribute("data-target");
    signupBtn.removeAttribute("onclick");
    logOutBtn.style.display = "inline-block";
  }
});

$(".logOut").click(function () {
  localStorage.removeItem("username");
  window.location.reload();
  document.querySelector(".logOut").style.display = "none";
});

let passInput = document.forms["signUp"].getElementsByTagName("input")[1],
  passInput2 = document.forms["signUp"].getElementsByTagName("input")[2],
  passInput3 = document.forms["login"].getElementsByTagName("input")[1];

passInput.onmouseover = function () {
  passInput.removeAttribute("type");
};

passInput.onmouseout = function () {
  passInput.setAttribute("type", "password");
};

passInput2.onmouseover = function () {
  passInput2.removeAttribute("type");
};

passInput2.onmouseout = function () {
  passInput2.setAttribute("type", "password");
};

passInput3.onmouseover = function () {
  passInput3.removeAttribute("type");
};

passInput3.onmouseout = function () {
  passInput3.setAttribute("type", "password");
};
