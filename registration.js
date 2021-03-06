function signUp() {
  location.href = "registration.html";
}

let errors = [];

function checkValidity(input) {
  let validity = input.validity;

  if (validity.valueMissing) {
    errors.push("Поле " + input.placeholder + " не заполнено");
  }

  if (validity.patternMismatch) {
    errors.push("Неверный формат заполнения " + input.placeholder);
  }
}

function checkAll() {
  errors = [];
  let inputs = document.querySelectorAll("input");
  let name = document.getElementById("inputName").value;

  for (let input of inputs) {
    checkValidity(input);
  }

  if (errors != "") {
    document.getElementById("errorMessage").innerHTML = errors.join(". <br>");
  } else {
    document.getElementById("errorMessage").innerHTML = "";
    const allInput = document.querySelectorAll("input");
    allInput.forEach((input) => {
      input.value = "";
    });

    //alert(`Добро пожаловать, ${name}!`);
    location.href = "main.html";
  }
}
