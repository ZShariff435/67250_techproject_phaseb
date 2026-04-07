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

