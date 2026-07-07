
let loggedIn = localStorage.getItem("loggedIn");

if (loggedIn !== "true") {

    alert("Please login first.");

    window.location.href = "../login/index.html";

}



let user = JSON.parse(localStorage.getItem("user"));

if (user) {

    document.getElementById("username").innerHTML = user.name;

}



function logout() {

    let answer = confirm("Are you sure you want to logout?");

    if (answer) {

        localStorage.removeItem("loggedIn");

        alert("Logged out successfully.");

        window.location.href = "../login/index.html";

    }

}


let menu = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar");
let main = document.querySelector(".main");

menu.addEventListener("click", function () {

    sidebar.classList.toggle("close");

    main.classList.toggle("expand");

});


const ctx = document.getElementById("salesChart");

new Chart(ctx, {
    type: "line",

    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],

        datasets: [{
            label: "Sales",

            data: [15, 28, 20, 35, 30, 45, 55],

            borderColor: "#0d6efd",
            backgroundColor: "rgba(13,110,253,0.2)",

            fill: true,
            tension: 0.4
        }]
    },

   options: {

    responsive: true,

    maintainAspectRatio: false,

    animation: {

        duration: 1000

    }

}

});


let search = document.querySelector(".search input");

search.addEventListener("keyup", function () {

    console.log("Searching :", search.value);

});

let bell = document.querySelector(".notification");

bell.addEventListener("click", function () {

    alert("No new notifications.");

});


let cards = document.querySelectorAll(".card");

cards.forEach(function(card){

    card.addEventListener("mouseover", function(){

        card.style.transform = "scale(1.04)";

    });

    card.addEventListener("mouseout", function(){

        card.style.transform = "scale(1)";

    });

});