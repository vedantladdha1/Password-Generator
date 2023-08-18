const passwordbox = document.getElementById("password");
const length = 8;
const uppercase = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = " qwertyuiopasdfghjklzxcvbnm";
const numbers   = " 0123456789";
const symbols   = "!@#$&*?";

const allChars = uppercase + lowercase + numbers + symbols;

function createPassword(){
    let password = " ";
    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
    password += numbers[Math.floor(Math.random()*numbers.length)];
    password += symbols[Math.floor(Math.random()*symbols.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }

    passwordbox.value =  password;
}

function copyPassword(){
    passwordbox.select();
    document.execCommand("copy");
}