const generateBtn = document.querySelector("#generate");

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function writePassword() {
  let passWordLength = prompt(
    "How many characters would you like your password to Contain?"
  );
  if (passWordLength < 8) {
    alert("Password lenght must be atleast 8 characters");
  } else if (passWordLength > 128) {
    alert("password lenght must be less than 129 characters");
  }
  if (passWordLength >= 8 && passWordLength <= 128) {
    number = confirm(
      "would you like to include numeric characters then click OK if not click CANCEL"
    );
    special = confirm(
      "would you like to include special characters then click OK if not click CANCEL"
    );
    lower = confirm(
      "would you like to include lowercase characters  then click OK if not click CANCEL"
    );
    upper = confirm(
      "would you like to include uppercase characters  then click OK if not click CANCEL"
    );
  }

  const numberOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const specialOption = ["!", "@", "#", "$", "%", "&", "^", "&", "*"];
  const lowerOptions = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const upperOptions = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let pool = [];
  if (number === true) {
    for (let i = 0; i < numberOptions.length; i++) {
      pool.push(numberOptions[i]);
    }
  }
  if (special === true) {
    for (let i = 0; i < specialOption.length; i++) {
      pool.push(specialOption[i]);
    }
  }
  if (lower === true) {
    for (let i = 0; i < lowerOptions.length; i++) {
      pool.push(lowerOptions[i]);
    }
  }
  if (upper === true) {
    for (let i = 0; i < upperOptions.length; i++) {
      pool.push(upperOptions[i]);
    }
  }

  let currentPassword = "";
  for (let i = 0; i < passWordLength; i++) {
    let randomCharPosition = Math.floor(Math.random() * pool.length);
    currentPassword += pool[randomCharPosition];
    console.log(currentPassword);
  }
  document.getElementById("password").value = currentPassword;
}

generateBtn.addEventListener("click", writePassword);
