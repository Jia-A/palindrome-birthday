var dob = document.querySelector("#birthdate");
var btn1 = document.querySelector("#check");
var result = document.querySelector("#answer");

btn1.addEventListener("click", checkPalindrome)

function checkPalindrome(){
     var birthday = dob.value
     var birthdate = dob.value.replaceAll("-", "").split('').reverse().join('');
     
     

    console.log(birthdate);
}