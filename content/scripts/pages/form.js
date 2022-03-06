// form validation
let subscribeSection = document.querySelector(".subscribe-form"),
  successfulSection = document.querySelector(".success-section");
(submitButton = document.querySelector(".form-submit__btn")),
  (IDInput = document.querySelector(".id-input__container")),
  (passportInput = document.querySelector(".passport-input__container")),
  (countrySelection = document.getElementById("countrySelection")),
  (dateSelection = document.getElementById("ageInput"));

let inputs = [];
let formData = [];
let validInputsLength;
let formLength;

if (subscribeSection != null) {
  let subscribeForm = document.querySelector(".subscribe-form__form-container");
  let subscribeErrors = [
    {
      nameRequired: document.querySelector(".name .required"),
      nameInvalid: document.querySelector(".name .normal"),
      isRequired: true,
      isValid: false,
    },
    {
      emailRequired: document.querySelector(".email .required"),
      emailInvalid: document.querySelector(".email .invalid"),
      isRequired: true,
      isValid: false,
    },
    {
      phoneInvalid: document.querySelector(".phone .normal"),
      isRequired: false,
      isValid: true,
    },
    {
      noteInvalid: document.querySelector(".note .normal"),
      isRequired: true,
      isValid: true,
    },
    {
      ageRequired: document.querySelector(".age .required"),
      nameInvalid: document.querySelector(".age .invalid"),
      isRequired: true,
      isValid: false,
    },
    {
      isRequired: true,
      isValid: false,
    },
    {
      IDRequired: document.querySelector("#idRequired"),
      IDInvalid: document.querySelector("#idNormal"),
      isRequired: true,
      isValid: false,
    },
    {
      passportRequired: document.querySelector("#passportRequired"),
      passportInvalid: document.querySelector("#passportNormal"),
      isRequired: true,
      isValid: false,
    },
  ];
  async function validateForm() {
    for (let i = 0; i < subscribeErrors.length; i++) {
      let input = subscribeForm[i].getAttribute("name");
      await inputs.push(document.querySelector(`[name=${input}`));
    }

    // name input validation

    if (!inputs[0].value) {
      subscribeErrors[0].nameRequired.style.display = "block";
      subscribeErrors[0].nameInvalid.style.display = "none";
      document.querySelector(".name .valid").style.display = "none";
      subscribeErrors[0].isValid = false;
    } else if (hasNumber(inputs[0].value)) {
      subscribeErrors[0].nameRequired.style.display = "none";
      subscribeErrors[0].nameInvalid.style.display = "block";
      document.querySelector(".name .valid").style.display = "none";
      subscribeErrors[0].isValid = false;
    } else {
      subscribeErrors[0].nameRequired.style.display = "none";
      subscribeErrors[0].nameInvalid.style.display = "none";
      subscribeErrors[0].isValid = true;
      document.querySelector(".name .valid").style.display = "block";
    }

    // email input validation

    if (!inputs[1].value) {
      subscribeErrors[1].emailRequired.style.display = "block";
      subscribeErrors[1].emailInvalid.style.display = "none";
      document.querySelector(".email .valid").style.display = "none";
      subscribeErrors[1].isValid = false;
    } else if (!isEmail(inputs[1].value)) {
      subscribeErrors[1].emailRequired.style.display = "none";
      subscribeErrors[1].emailInvalid.style.display = "block";
      document.querySelector(".email .valid").style.display = "none";
      subscribeErrors[1].isValid = false;
    } else {
      subscribeErrors[1].emailRequired.style.display = "none";
      subscribeErrors[1].emailInvalid.style.display = "none";
      subscribeErrors[1].isValid = true;
      document.querySelector(".email .valid").style.display = "block";
    }

    // phone input validation

    if (inputs[2].value) {
      if (!hasCharacter(inputs[2].value)) {
        subscribeErrors[2].phoneInvalid.style.display = "block";
        document.querySelector(".phone .valid").style.display = "none";
        subscribeErrors[2].isValid = false;
      } else {
        subscribeErrors[2].phoneInvalid.style.display = "none";
        document.querySelector(".phone .valid").style.display = "block";
        subscribeErrors[2].isValid = true;
      }
    }

    // note input validation

    if (inputs[3].value) {
      if (isMinimum(inputs[3].value)) {
        subscribeErrors[3].noteInvalid.style.display = "block";
        document.querySelector(".note .valid").style.display = "none";
        subscribeErrors[3].isValid = false;
      } else {
        subscribeErrors[3].noteInvalid.style.display = "none";
        subscribeErrors[3].isValid = true;
        document.querySelector(".note .valid").style.display = "block";
      }
    }

    // age input validation

    if (!inputs[4].value) {
      subscribeErrors[4].ageRequired.style.display = "block";
      document.querySelector(".age .valid").style.display = "none";
      subscribeErrors[4].isValid = false;
    } else {
      subscribeErrors[4].ageRequired.style.display = "none";
      document.querySelector(".age .valid").style.display = "block";
      subscribeErrors[4].isValid = true;
    }

    // country input validation

    if (inputs[5].value) {
      document.querySelector(".country .valid").style.display = "block";
      subscribeErrors[5].isValid = true;
    }

    // id

    if (!inputs[6].value) {
      subscribeErrors[6].IDRequired.style.display = "block";
      subscribeErrors[6].IDInvalid.style.display = "none";
      document.querySelector("#idValid").style.display = "none";
      subscribeErrors[6].isValid = false;
    } else if (!hasCharacter(inputs[6].value)) {
      subscribeErrors[6].IDRequired.style.display = "none";
      subscribeErrors[6].IDInvalid.style.display = "block";
      document.querySelector("#idValid").style.display = "none";
      subscribeErrors[6].isValid = false;
    } else {
      subscribeErrors[6].IDRequired.style.display = "none";
      subscribeErrors[6].IDInvalid.style.display = "none";
      subscribeErrors[6].isValid = true;
      document.querySelector("#idValid").style.display = "block";
    }

    // passport

    if (!inputs[7].value) {
      subscribeErrors[7].passportRequired.style.display = "block";
      subscribeErrors[7].passportInvalid.style.display = "none";
      document.querySelector("#passportValid").style.display = "none";
      subscribeErrors[7].isValid = false;
    } else if (!hasCharacter(inputs[7].value)) {
      subscribeErrors[7].passportRequired.style.display = "none";
      subscribeErrors[7].passportInvalid.style.display = "block";
      document.querySelector("#passportValid").style.display = "none";
      subscribeErrors[7].isValid = false;
    } else {
      subscribeErrors[7].passportRequired.style.display = "none";
      subscribeErrors[7].passportInvalid.style.display = "none";
      subscribeErrors[7].isValid = true;
      document.querySelector("#passportValid").style.display = "block";
    }

    await validateAll();
  }

  submitButton.addEventListener("click", validateForm);
  isEgypt(countrySelection.value);
  maxDate(dateSelection);
  // posting data if everything is valid
  async function validateAll() {
    validInputsLength = 1;
    formLength = subscribeForm.length - 1;
    for (let valid = 0; valid < subscribeErrors.length; valid++) {
      if (subscribeErrors[valid].isValid === true) {
        validInputsLength++;
      }
    }
    if (validInputsLength == formLength) {
      subscribeSection.style.display = "none";
      successfulSection.style.display = "block";
      for (let data = 0; data < inputs.length; data++) {
        let dataValues = inputs[data].value;
        await formData.push(dataValues);
      }
      console.log(formData);
    }
  }
}

// checking if string contains numbers

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
  return text.length < 15;
}

// checking if country is egypt

function isEgypt(value) {
  if (value === "Egypt") {
    IDInput.style.display = "block";
    passportInput.style.display = "none";
  } else {
    passportInput.style.display = "block";
    IDInput.style.display = "none";
  }
  return;
}

// set max date

function maxDate(element) {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();

  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }

  today = year + "-" + month + "-" + day;
  const MAXDATE = today;
  element.setAttribute("max", MAXDATE);
}
