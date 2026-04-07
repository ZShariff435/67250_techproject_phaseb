var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

function SumnPrint(x1, x2) {
    console.log(x1 + x2);
}

SumnPrint(x, y);
SumnPrint(A, B);

if (C.length > z) {
    console.log(C);
    
} else {
    if (C.length < z) {
        console.log(z)
    } else {
        console.log("good job!");
    }
}
/*
L1 = ["Watermelon", "Pineaipple", "Pear", "Banana"];
L2 = ["Apple", "Banana", "Kiwi", "Orange"]

function findTheBanana(L) {
    L.forEach(x => {if(x === "Banana") alert()})
}

findTheBanana(L1);
findTheBanana(L2);
*/



function greeting() {
    var now = new Date();
    var x = now.getHours();
    var text;
    if(x < 5 || x >= 20) {
        text = "Good Night";
    }
    else if(x < 12) {
        text = "Good Morning";
    } else if(x < 18) {
        text = "Good Afternoon";
    } else {
        text = "Good Evening"
    }
    if(document.getElementById("greeting") != null) {
        document.getElementById("greeting").innerHTML = text + ", Welcome to MonoMuse";
    }
}

greeting();

function addYear() {
    if(document.getElementById("copyYear") != null) {
        document.getElementById("copyYear").innerHTML = (new Date()).getFullYear();
    } 
}

/* Sets the 'active' class on the navigation link that matches the current page URL.*/

function ActiveNav() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Iterate over each link
    navLinks.forEach(link => {
    // Check if the link's href matches the current window location
        if (window.location.href === link.href) {
            // Add the 'active' class to highlight the current page
            link.classList.add("active");
        }
    });
}

// Execute the function to set the active navigation link on page load
ActiveNav();

 // When the "Read Less" button is clicked
 $("#read_less").click(function(){ 
    $("#long_para").hide(); // Hide the long introduction text
    $("#read_less").hide();  // Hide the "Read Less" button itself
    $("#short_para").show(); //Show the short introduction text
    $("#read_more").show();  // Show the "Read More" button  

  });
  
// When the "Read More" button is clicked
  $("#read_more").click(function(){
    $("#long_para").show();  // Show the long introduction text
    $("#read_less").show();   // Show the "Read Less" button
    $("#short_para").hide(); //Hide the short introduction text
    $("#read_more").hide();   // Hide the "Read More" button  
  });

//When Buy Now button is clicked

$(".buyNow").click(function(){
    $("#purchase_form").show();  //shows purchase form
  });


function toggleNav() {
  const nav = document.querySelector(".nav_bar");
  nav.classList.toggle("responsive");
}

if(window.location.href.includes("index.html")) {
    var map = L.map('map').setView([40.4432, -79.9428], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    L.marker([40.4432, -79.9428]).addTo(map);
}

if(window.location.href.includes("tickets.html")) {
    document.getElementById("purchase_form").addEventListener("submit", function(e) {
        e.preventDefault();

        const numTickets = document.getElementById("quantity").value;

        window.location.href = `./confirmation.html?tickets=${numTickets}`;
    });
}

if(window.location.href.includes("confirmation.html")) {
    function getCost() {
    const params = new URLSearchParams(window.location.search);
    const numTickets = params.get("tickets");
    const total = 18 * numTickets;

    document.getElementById("total_cost").innerHTML = `
    <h3>Total Cost: $${total}</h3>
    `;
    }
}
