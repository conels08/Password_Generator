

let passwordEl = document.getElementById("password-field")
let passwordElTwo = document.getElementById("password-field-two")
let passwordBtn = document.getElementById("generate-btn")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generatePassword(length = 12) {
    let password = ""
    for (let i = 0; i < length; i++) {
        password += characters[getChar()]
    }
    return password
}

function getChar() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return randomChar
}

// Listen for click event on the button
passwordBtn.addEventListener("click", function() {
    const newPasswordOne = generatePassword(9);
    const newPasswordTwo = generatePassword(16);
    passwordEl.value = newPasswordOne;
    passwordElTwo.value = newPasswordTwo; // update input field
});

function copyToClipboard(el) {
    el.select();
    el.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(el.value)
    .then (() => {
        alert("password copied to clipboard!");
    })
    .catch(err => {
        console.error("Failed to copy!", err)
    });
}

passwordEl.addEventListener("click", function() {
    copyToClipboard(passwordEl)
});

passwordElTwo.addEventListener("click", function() {
    copyToClipboard(passwordElTwo)
});

console.log(generatePassword())