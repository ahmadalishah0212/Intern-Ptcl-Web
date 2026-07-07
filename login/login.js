
let eye = document.getElementById("eye");
let password = document.getElementById("password");

eye.addEventListener("click", function(){

    if(password.type=="password"){

        password.type="text";
        eye.className="fa-solid fa-eye-slash";

    }

    else{

        password.type="password";
        eye.className="fa-solid fa-eye";

    }

});




let form=document.getElementById("loginForm");

let success=false;

form.addEventListener("submit",function(e){

    e.preventDefault();

    let email=document.getElementById("email").value.trim();

    let pass=password.value;

    let user=JSON.parse(localStorage.getItem("user"));



    if(user==null){

        showPopup(

            false,

            "No Account",

            "Please register first."

        );

        return;

    }



    if(email==user.email && pass==user.password){

        localStorage.setItem("loggedIn","true");

        success=true;

        showPopup(

            true,

            "Login Successful",

            "Welcome "+user.name+"!"

        );

    }

    else{

        success=false;

        showPopup(

            false,

            "Login Failed",

            "Incorrect Email or Password."

        );

    }

});




function showPopup(isSuccess,title,message){

    let popup=document.getElementById("popup");

    let icon=document.getElementById("popupIcon");

    let popupTitle=document.getElementById("popupTitle");

    let popupMessage=document.getElementById("popupMessage");



    popup.style.display="flex";

    popupTitle.innerHTML=title;

    popupMessage.innerHTML=message;



    if(isSuccess){

        icon.className="fa-solid fa-circle-check success";

    }

    else{

        icon.className="fa-solid fa-circle-xmark error";

    }

}



function closePopup(){

        document.getElementById("popup").style.display="none";

    if(success){

        window.location.href="../Dashboard/dashboard.html";

    }

}




function goRegister(){

       window.location.href="../Register/register.html";

}