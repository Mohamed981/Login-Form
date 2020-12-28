//Error handling
function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form__message");

  messageElement.textContent = message;
  messageElement.classList.remove("form__message--success", "form__message--error");
  messageElement.classList.add(`form__message--${type}`);
}
// L O G I N   V A R S
emailLogin=document.getElementById("emaillog");
passLog=document.getElementById("passlog");

// S I G N   U P   V A R S
user=document.getElementById("signupUsername");
email=document.getElementById("email");
pass=document.getElementById("pass");
conpass=document.getElementById("conpass");

//Error Message
function setInputError(inputElement, message) {
  inputElement.classList.add("form__input--error");
  inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

//Clear error message
function clearInputError(inputElement) {
  inputElement.classList.remove("form__input--error");
  inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}
const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");
document.addEventListener("DOMContentLoaded", () => {
  

  //Hide Login form on switching
  document.querySelector("#linkCreateAccount").addEventListener("click", e => {
      e.preventDefault();
      loginForm.classList.add("form--hidden");
      createAccountForm.classList.remove("form--hidden");
  });
//Hide Signup form on switching
  document.querySelector("#linkLogin").addEventListener("click", e => {
      e.preventDefault();
      loginForm.classList.remove("form--hidden");
      createAccountForm.classList.add("form--hidden");
  });
//On login
  loginForm.addEventListener("submit", e => {
      e.preventDefault();
      if(emailLogin.value.length==0||passLog.value.length==0){

if(emailLogin.value.length==0){
  setInputError(emailLogin, "Email is empty");}
if(passLog.value==""){
  setInputError(passLog, "Password is empty");

}
}else{
  //Ajax call
  loadAjax1();
}

  });
  //On Signup
  createAccountForm.addEventListener('submit', e => {
    e.preventDefault();
    if(user.value==''||email.value==''||pass.value==''||conpass.value==''){
      output='Empty '
      if(user.value==""){
      setInputError(user, "Username is empty");

      }if(email.value==""){
        setInputError(email, "Email is empty");}
      if(pass.value==""){
        setInputError(pass, "Pssword is empty");
      }if(conpass.value==''){
        setInputError(conpass, "Confirm password is empty");
      }
    
    }
    else if(pass.value!=conpass.value){
      output='Password and Confirmation password are not the same';
      setFormMessage(createAccountForm, "error", output);
    }else{
      //Ajax call
      loadAjax();
    }
});

});

//Checking for Email correct format
function ValidateEmail(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.match(mailformat))
{
return true;
}
else
{
return false;
}
}
//Ajax Call for signup
function loadAjax(){
 
 
 const params=`user=${user.value}&password=${pass.value}&email=${email.value}`;
  //Create new request
  var xhr = new XMLHttpRequest();
 
  //Response
  xhr.onload =function(){
    res=this.responseText;
    console.log(res);
    if(res=='email is already regitered'){
    setFormMessage(createAccountForm, "error",res);}else{
      document.getElementById('cont').classList.add("form--hidden");
      document.getElementById('second').classList.remove("form--hidden");
      res=res.split('+');
  console.log(res[5]);
document.getElementById('h1').textContent+="{"+user.value+"}";
    document.getElementById('ul1').textContent=res[0]+':';
    document.getElementById('ul2').textContent=res[1];
    document.getElementById('ul3').textContent=res[2]+':';
    document.getElementById('ul4').textContent=res[3];
    document.getElementById('ul5').textContent=res[4]+':';
    document.getElementById('ul6').textContent=res[5];
    }
  }
  xhr.open('POST', 'process.php',true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  
  xhr.send(params);
  
}

//Ajax call for login
function loadAjax1(){
  const params=`email=${emailLogin.value}&password=${passLog.value}`;
  var xhr = new XMLHttpRequest();
 
  xhr.onload =function(){
    res=this.responseText;
   
    if(res==0){
setFormMessage(loginForm, "error","Password or email is invalid");
    }else{
      document.getElementById('cont').classList.add("form--hidden");
      document.getElementById('second').classList.remove("form--hidden");
      res=res.split('+');
  console.log(res[6]);
  document.getElementById('h1').textContent+=" "+"{"+res[6]+"}";
    document.getElementById('ul1').textContent=res[0]+':';
    document.getElementById('ul2').textContent=res[1];
    document.getElementById('ul3').textContent=res[2]+':';
    document.getElementById('ul4').textContent=res[3];
    document.getElementById('ul5').textContent=res[4]+':';
    document.getElementById('ul6').textContent=res[5];
  }
}
xhr.open('POST', 'ajax.php',true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  
  xhr.send(params);
}