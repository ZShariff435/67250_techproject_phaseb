
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

if(window.location.href.includes("index.html")) {
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

}

//When Buy Now button is clicked
if(window.location.href.includes("tickets.html")) {
$(".buyNow").click(function(){
    $("#purchase_form").show();  //shows purchase form
  });
}


//Mobile Only Navigation
function toggleNav() {
  const nav = document.querySelector(".nav_bar");
  nav.classList.toggle("responsive");
}

//Map
if(window.location.href.includes("index.html")) {
    var map = L.map('map').setView([40.4432, -79.9428], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    L.marker([40.4432, -79.9428]).addTo(map);
}

//Buy Ticket button
if(window.location.href.includes("tickets.html")) {
    document.getElementById("purchase_form").addEventListener("submit", function(e) {
        e.preventDefault();

        const numTickets = document.getElementById("quantity").value;

        window.location.href = `./confirmation.html?tickets=${numTickets}`;
    });
}

//Confirmation Page
if(window.location.href.includes("confirmation.html")) {
    const params = new URLSearchParams(window.location.search);
    const numTickets = params.get("tickets");
    const total = 18 * numTickets;

    document.getElementById("total_cost").innerHTML = `
    <h3>Total Cost: $${total}</h3>
    `;

    console.log("This is running");
    console.log(total);
}

// Slideshow
if (window.location.href.includes("explore.html")) {
    const slides = [
        "../static/img1.png.jpg",
        "../static/img2.png",
        "../static/img3.png"
    ];

    const alt = [
        "A modern white museum building labeled “MONOMUSE,” featuring a large central dome, symmetrical design, and warmly lit display windows showcasing artwork, set against a clear blue sky.",
        "A wide-angle view of a busy museum great hall with vaulted stone ceilings, classical columns, and visitors walking through the space",
        "A large prehistoric elephant skeleton on display in a museum gallery with wooden display cases lining the walls"
    ]

    let currentSlide = 0;

    setInterval(function() {
        currentSlide = (currentSlide + 1) % slides.length;
        const slideEl = document.getElementById("slide");
        slideEl.src = slides[currentSlide];
        slideEl.alt = alt[currentSlide];
    }, 3000);
}
