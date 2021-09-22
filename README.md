
# User authentication webapp

## overview
User Authentication is very important process. In this project complete authentication process is implemented by using HTML,CSS & Javscript.
 
Authentication is the process of verifying the identity of an individual. 
A user can interact with a web application using multiple actions. 
Access to certain actions or pages can be restricted using user levels. 
Authorization is the process of controlling user access via assigned roles & privileges.
In this project Local Storage is used to stoare userdetails and these userdetails are stored in the form of key value pairs.
By using these details we can authenticate user.



## Screenshots

### Signup page
![signup](https://user-images.githubusercontent.com/87167811/134159360-34d18822-b6ff-4587-8a6e-3d68e63eb3e0.png)

if user clicks signup button then userdetails get stoared into local storage

```bash
  function saveuserdetails(){

  var saveEmailId = document.getElementById("saveEmailId").value;
  var savePassword = document.getElementById("savePassword").value;

  localStorage.setItem(saveEmailId,savePassword);
}

```

### Login page
![login](https://user-images.githubusercontent.com/87167811/134159386-3db1d29f-e05d-4b96-8976-d31bb2c75b53.png)

when user click on login button, it compares details on page with details stoared in local storage.
if that both details are matched then it will opens dashboard.

```bash
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

```

### Forgot password page
![forgotpassword](https://user-images.githubusercontent.com/87167811/134159422-7249806d-7a70-4434-a0a0-fcd216221356.png)
if user forgot his password he can change his password by clicking "Forgot password" link.
  After entering new password and conform password it will checks both passwords are same and if true then it will opens signup page.

```bash

  function savechanges(){
  var changeEmailId = document.getElementById("changeEmailId").value;
  var newPassword = document.getElementById("newPassword").value;
  var conformPassword = document.getElementById("conformPassword").value;

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
```

### Dashboard
![dashboard](https://user-images.githubusercontent.com/87167811/134159483-fed2560a-aaa3-4468-98cc-2e24b5711fb1.png)

when you click on logout button it will redirect to signup page.
## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#00cccc](https://via.placeholder.com/10/00cccc?text=+) #00cccc |
| Example Color | ![#cc0066](https://via.placeholder.com/10/cc0066?text=+) #cc0066 |
| Example Color | ![#000000](https://via.placeholder.com/10/000000?text=+) #000000 |
| Example Color | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) #ffffff |


## Page link

this page is hosted in netlify you can go on this link.

```bash
  https://naughty-goldstine-3b375f.netlify.app
```

  
