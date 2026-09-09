function showError(id, message) {
  document.getElementById(id).innerText = message;
}

function clearError(id) {
  document.getElementById(id).innerText = "";
}

function clearAll() {
  document.querySelectorAll("span").forEach(e => e.innerText = "");
  document.getElementById("successMsg").innerText = "";
}

function validateField(field) {
  let value = field.value.trim();
  let id = field.id;

  if (id === "fname") {
    if (value.length < 3) showError("fnameError", " Minimum 3 characters required");
    else clearError("fnameError");
  }

  if (id === "lname") {
    if (value.length < 3) showError("lnameError", " Minimum 3 characters required");
    else clearError("lnameError");
  }

  if (id === "email") {
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!value.match(emailPattern)) showError("emailError", " Invalid email format");
    else clearError("emailError");
  }

  if (id === "mobile") {
    let mobilePattern = /^(\+91|0)?[6-9]\d{9}$/;
    if (!value.match(mobilePattern)) showError("mobileError", " Invalid mobile number");
    else clearError("mobileError");
  }

  if (id === "password") {
    let passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!value.match(passPattern)) showError("passwordError", " Weak password");
    else clearError("passwordError");
  }

  if (id === "confirmPassword") {
    let password = document.getElementById("password").value;
    if (value !== password || value === "") showError("confirmPasswordError", " Passwords do not match");
    else clearError("confirmPasswordError");
  }
}

function validateAllFields() {
  let fields = document.querySelectorAll("#fname, #lname, #email, #mobile, #password, #confirmPassword");
  fields.forEach(field => validateField(field));

  let gender = document.querySelector('input[name="gender"]:checked');
  let skills = document.querySelectorAll('input[name="skills"]:checked');
  let valid = true;

  if (!gender) {
    showError("genderError", " Please select your gender");
    valid = false;
  } else clearError("genderError");

  if (skills.length === 0) {
    showError("skillsError", " Select at least one skill");
    valid = false;
  } else clearError("skillsError");

  
  let anyError = false;
  document.querySelectorAll("span").forEach(e => {
    if (e.innerText.includes) anyError = true;
  });

  return !anyError && valid;
}

function submitForm() {
  if (validateAllFields()) {
    document.getElementById("successMsg").innerText = "Form Submitted Successfully!";
    
    
  } else {
    document.getElementById("successMsg").innerText = "";
  }
}


window.onload = function () {
  let fields = document.querySelectorAll("#fname, #lname, #email, #mobile, #password, #confirmPassword");
  
  fields.forEach(field => {
    field.addEventListener("blur", function () {
      validateField(this);
    });

    field.addEventListener("input", function () {
      validateField(this);
    });
  });
};
