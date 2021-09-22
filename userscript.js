let btnLogin = document.getElementById("login");
let btnSignUp = document.getElementById("signup");

let signIn = document.querySelector(".signin");
let signUp = document.querySelector(".signup");

btnLogin.onclick = function(){
    signIn.classList.add("active");
    signUp.classList.add("inActive");
} 

btnSignUp.onclick  = function(){

    signIn.classList.remove("active");
    signUp.classList.remove("inActive");
} 

function saveuserdetails(){

  var saveEmailId = document.getElementById("saveEmailId").value;
  var savePassword = document.getElementById("savePassword").value;

  localStorage.setItem(saveEmailId,savePassword);
}

/* function ValidateEmail(username,password) 
{

if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password))
{
    passwordArray.push(password);
}
else
  {
    alert("You have entered an invalid password!");
    //return (false);
  }
  
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username))
  {
    //return (true);
    usernameArray.push(username);
    //alert("regular expression");
  }
  else
  {
    alert("You have entered an invalid email address!");
    //return (false);
  }
    
}
 */


function autherization(){

    var username = document.getElementById("mailId").value; 
    var password = document.getElementById("password").value;
   

    for(let i=0; i<localStorage.length; i++)
    {
      if(username == localStorage.key(i) && password == localStorage.getItem(localStorage.key(i)))
      {
        
        window.location = "dashboard.html";
        //document.write("welcome"+" "+username);
        document.getElementById("mailId1").innerHTML = username;
        break;
      }
      else{
        alert("Email or password is wrong");
      }
    }
    
}

function savechanges(){
  var changeEmailId = document.getElementById("changeEmailId").value;
  var newPassword = document.getElementById("newPassword").value;
  var conformPassword = document.getElementById("conformPassword").value;
/* 
  if(newPassword==conformPassword)
  {
    localStorage.setItem(changeEmailId)
  }
  else
  {
    alert("password not matching")
  }
 */

  for(let i=0; i<localStorage.length; i++)
  {
    if(changeEmailId==localStorage.key(i))
    {
      if(newPassword==conformPassword)
      { 
        localStorage.removeItem(changeEmailId);
        localStorage.setItem(changeEmailId,conformPassword);
        alert("password changed successfully");
        window.location = "index.html";
      }
      else
      {
        alert("password not matching")
      }
    }
  }

  

}