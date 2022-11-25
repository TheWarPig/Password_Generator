const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const noNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const noSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const onlyLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const generateBtnEl = document.getElementById("generate")
const password1El = document.getElementById("password1-el")
const password2El = document.getElementById("password2-el")
const passwords = document.querySelectorAll(".password")
const passwordLengthEl = document.getElementById("passwordLength-el")


generateBtnEl.addEventListener("click", function generate() {

    let passwordLength = passwordLengthEl.value

    if  (passwordLength > 20){
        let maxLengthEl = document.getElementById("maxLength-el")
        maxLengthEl.style.color = "red"
        return
    }

    let includeNumbers = document.getElementById("numbers").checked
    let includeSymbols = document.getElementById("symbols").checked

    if (includeNumbers === true && includeSymbols === true) {
        generatePasswords(...characters)
    }
    if (includeNumbers === false && includeSymbols === true) {
        generatePasswords(...noNumbers)
    }
    if (includeNumbers === true && includeSymbols === false) {
        generatePasswords(...noSymbols)
    }
    if (includeNumbers === false && includeSymbols === false) {
        generatePasswords(...onlyLetters)
    }
})


function generatePasswords(...pool) {

    let passwordLength = document.getElementById("passwordLength-el").value
    let password1 =""
    let password2 =""
    for (let i = 0 ; i < passwordLength ; i++ ){
        password1 += pool[Math.floor(Math.random() * pool.length)]
    }
    for (let i = 0 ; i < passwordLength ; i++ ){
        password2 += pool[Math.floor(Math.random() * pool.length)]
    }
    password1El.textContent = password1
    password2El.textContent = password2
}

passwords.forEach(password => {
    password.addEventListener("click", function copyToClipboard(){
        let text = password.textContent
        navigator.clipboard.writeText(text)
      .then(() => {
        alert("successfully copied");
      })
      .catch(() => {
        alert("something went wrong");
      });
    })
})


