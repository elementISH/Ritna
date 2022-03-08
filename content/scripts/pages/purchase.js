let productImg,
productName,
productColor,
productType,
productOnlyName,
modal = document.querySelector(".modalToggler"),
inputName = document.querySelector('input[name="name-input"]'),
inputEmail = document.querySelector('input[name="email-input"'),
inputPhone = document.querySelector('input[name="phone-input"'),
inputCountry = document.querySelector('select[name="country-input'),
inputExpire = document.querySelector('input[name="expire-input'),
inputCard = document.querySelector('input[name="card-input"'),
inputCvv = document.querySelector('input[name="cvv-input"');
function purchase(product) {
  productImg = product.getAttribute("data-img");
  productName = product.getAttribute("data-name");
  productColor = product.getAttribute("data-colors");
  productType = product.getAttribute("data-type");
  productOnlyName = product.getAttribute("data-product-name");
  let changePage = window.location.href;
  if (changePage.includes("purchase")) {
    changePage = changePage.substring(0, changePage.lastIndexOf("/p"));
  } else {
    changePage = changePage.substring(0, changePage.lastIndexOf("/"));
  }
  window.location.href =
    changePage +
    `/purchase.html?product="${productImg}"&product="${productName}"&product="${productColor}"&product="${productType}"&product="${productOnlyName}"`;
}

function purchasePage() {
  let url = window.location.href;
  let params = new URL(url).searchParams;

  function productTags() {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  let productData = params.getAll("product");

  let productImg = document.querySelector(".product__img"),
    productName = document.querySelector(".product-name"),
    productDropdown = document.querySelectorAll(
      ".product__types-dropdown option"
    ),
    productTag = document.querySelector(".product-tag");
  colorPickers = document.querySelectorAll(".colors .color");
  productImg.src = productData[0].replaceAll('"', "");
  productName.innerHTML = productData[1].replaceAll('"', "") + `<br>`;
  for (let i = 0; i < productDropdown.length; i++) {
    let option = productDropdown[i];
    if (option.getAttribute("name") == productData[3].replaceAll('"', "")) {
      option.setAttribute("selected", "selected");
    }
  }
  productTag.innerHTML = productTags();
  if (productData[2] == '"bgcg"') {
    colorPickers[0].style.background = "#141C1E";
    colorPickers[0].setAttribute("data-hex", "#141C1E");

    colorPickers[1].style.background = "#436D47";
    colorPickers[1].setAttribute("data-hex", "#436D47");

    colorPickers[2].style.background = "#554101";
    colorPickers[2].setAttribute("data-hex", "#554101");

    colorPickers[3].style.background = "#7E563D";
    colorPickers[3].setAttribute("data-hex", "#7E563D");
  } else if (productData[2] == '"bbmb"') {
    colorPickers[0].style.background = "#141C1E";
    colorPickers[0].setAttribute("data-hex", "#141C1E");

    colorPickers[1].style.background = "#1A2539";
    colorPickers[1].setAttribute("data-hex", "#1A2539");

    colorPickers[2].style.background = "#113D68";
    colorPickers[2].setAttribute("data-hex", "#113D68");

    colorPickers[3].style.background = "#351F4F";
    colorPickers[3].setAttribute("data-hex", "#351F4F");
  } else if (productData[2] == '"bgbo"') {
    colorPickers[0].style.background = "#141C1E";
    colorPickers[0].setAttribute("data-hex", "#141C1E");

    colorPickers[1].style.background = "#132344";
    colorPickers[1].setAttribute("data-hex", "#132344");

    colorPickers[2].style.background = "#9B7701";
    colorPickers[2].setAttribute("data-hex", "#9B7701");

    colorPickers[3].style.background = "#827B00";
    colorPickers[3].setAttribute("data-hex", "#827B00");
  }

  var el = document.getElementsByClassName("color");
  for (var i = 0; i < el.length; i++) {
    el[i].onclick = changeColor;
  }

  function changeColor(e) {
    let hex = e.target.getAttribute("data-hex");
    let newText = productName.innerHTML;
    newText = newText.substring(0, newText.lastIndexOf("-"));

    if (productData[4] == '"tresta"') {
      if (hex == "#141C1E") {
        productImg.src = "content/images/watch.png";
        productName.innerHTML = newText + "- Black <br>";
      } else if (hex == "#436D47") {
        productImg.src = "content/images/watch-soft__green.png";
        productName.innerHTML = newText + "- Soft Green <br>";
      } else if (hex == "#554101") {
        productImg.src = "content/images/watch-gold.png";
        productName.innerHTML = newText + "- Gold <br>";
      } else if (hex == "#7E563D") {
        productImg.src = "content/images/watch-caffee.png";
        productName.innerHTML = newText + "- Coffee <br>";
      }
    } else if (productData[4] == '"crysta"') {
      if (hex == "#141C1E") {
        productImg.src = "content/images/glasses.png";
        productName.innerHTML = newText + "- Black <br>";
      } else if (hex == "#1A2539") {
        productImg.src = "content/images/glasses-dark-blue.png";
        productName.innerHTML = newText + "- Dark Blue <br>";
      } else if (hex == "#113D68") {
        productImg.src = "content/images/glasses-light-blue.png";
        productName.innerHTML = newText + "- Soft Blue <br>";
      } else if (hex == "#351F4F") {
        productImg.src = "content/images/glasses-soft-purple.png";
        productName.innerHTML = newText + "- Dark Magenta <br>";
      }
    } else if (productData[4] == '"heldor"') {
      if (hex == "#141C1E") {
        productImg.src = "content/images/mask.png";
        productName.innerHTML = newText + "-  Black <br>";
      } else if (hex == "#9B7701") {
        productImg.src = "content/images/mask-gold.png";
        productName.innerHTML = newText + "- Gold <br>";
      } else if (hex == "#132344") {
        productImg.src = "content/images/mask-blue.png";
        productName.innerHTML = newText + "- Blue <br>";
      } else if (hex == "#827B00") {
        productImg.src = "content/images/mask-oil.png";
        productName.innerHTML = newText + "- Oil <br>";
      }
    }
  }
}
maxDate();

async function validateData() {
  let nameIsValid = false,
    emailIsValid = true,
    phoneIsValid = false,
    cardIsValid = true,
    expireIsValid = false,
    cvvIsValid = false;

  if (!inputName.value) {
    modal.click();
    inputName.style.borderColor = "red";
    nameIsValid = false;
  } else if (hasNumber(inputName.value)) {
    modal.click();
    inputName.style.borderColor = "red";
    nameIsValid = false;
  } else {
    inputName.style.borderColor = "green";
    nameIsValid = true;
  }

  if (inputEmail.value) {
    if (!isEmail(inputEmail.value)) {
      modal.click();
      inputEmail.style.borderColor = "red";
      emailIsValid = false;
    } else {
      inputEmail.style.borderColor = "green";
      emailIsValid = true;
    }
  } else {
    inputEmail.style.borderColor = "#002147";
    emailIsValid = true;
  }

  if (!inputPhone.value) {
    modal.click();
    inputPhone.style.borderColor = "red";
    phoneIsValid = false;
  } else if (!hasCharacter(inputPhone.value)) {
    modal.click();
    inputPhone.style.borderColor = "red";
    phoneIsValid = false;
  } else {
    inputPhone.style.borderColor = "green";
    phoneIsValid = true;
  }

  if (!inputCard.value) {
    modal.click();
    inputCard.style.borderColor = "red";
    cardIsValid = false;
  } else if (isMinimum(inputCard.value)) {
    modal.click();
    inputCard.style.borderColor = "red";
    cardIsValid = false;
  } else {
    inputCard.style.borderColor = "green";
    cardIsValid = true;
  }

  if (!inputExpire.value) {
    modal.click();
    inputExpire.style.borderColor = "red";
    expireIsValid = false;
  } else {
    inputExpire.style.borderColor = "green";
    expireIsValid = true;
  }

  if (!inputCvv.value) {
    modal.click();
    inputCvv.style.borderColor = "red";
    cvvIsValid = false;
  } else if (inputCvv.value.length < 3) {
    modal.click();
    inputCvv.style.borderColor = "red";
    cvvIsValid = false;
  } else if (!hasCharacter(inputCvv.value)) {
    modal.click();
    inputCvv.style.borderColor = "red";
    cvvIsValid = false;
  } else if (inputCvv.value.length == 3) {
    inputCvv.style.borderColor = "green";
    cvvIsValid = true;
  }

  if (
    nameIsValid === true &&
    emailIsValid === true &&
    phoneIsValid === true &&
    cardIsValid === true &&
    expireIsValid === true &&
    cvvIsValid === true
  ) {
    // show delivery
    let img = document.querySelector(".product__img").src,
    email = document.querySelector('input[name="email-input"').value,
    type = document.querySelector(".product__types-dropdown").value,
    country = document.querySelector('select[name="country-input').value,
    tag = document.querySelector('.product-tag').value;
    let msg = `
        <h1 class="decorated-text"> Dear, ${inputName.value}: </h1>
        <h3>we have recieved your order and this is a tracking email to verify the order</h3>
    `;
    showDelivery("purchase_service", "purchase_template", msg, email, img, tag, type, country).then(
      function () {
        document.querySelector("section.product").style.display = "none";
        document.querySelector("section.success-section").style.display = "block";
      },
      function (error) {
        alert("FAILED...", error);
      });
  }

  inputCountry.style.borderColor = "green";
}
function hasNumber(string) {
  return stringContainsNumber(string);
  function stringContainsNumber(_string) {
    return /\d/.test(_string);
  }
}

// checking if string contains characters

function hasCharacter(string) {
  return stringContainsCharacter(string);
  function stringContainsCharacter(_string) {
    return /^\d+$/.test(_string);
  }
}

// email validation

function isEmail(email) {
  const EMAILREGEX =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return EMAILREGEX.test(email.trim());
}

// checking if string has a minimum of 15 characters

function isMinimum(text) {
  return text.length < 12;
}

// set max date

function maxDate() {
  let element = document.querySelector('input[name="expire-input'),
    today = new Date(),
    day = today.getDate(),
    month = today.getMonth() + 1,
    year = today.getFullYear();

  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }

  today = year + "-" + month + "-" + day;
  const MAXDATE = today;

  if (element) element.setAttribute("min", MAXDATE);
}
