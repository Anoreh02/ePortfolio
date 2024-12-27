// Hamburger Menu Functionality
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function closeMenu() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Typewriter Effect
const texts = [
    "GAME DEVELOPER",
    "FULL-STACK DEVELOPER",
    "WEB DESIGNER"
];

let speed = 100;  // typing speed
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;  // Keeps track of which text to display
let charcterIndex = 0;  // Tracks the current character position for typing

function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);  // Type next character after a delay
    } else {
        setTimeout(eraseText, 1000);  // Wait for 1 second before erasing
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);  // Remove one character at a time
        setTimeout(eraseText, 100);  // Erase character with delay
    } else {
        textIndex = (textIndex + 1) % texts.length;  // Switch between "DEVELOPER" and "DESIGNER"
        charcterIndex = 0;  // Reset character index to start typing the new word
        setTimeout(typeWriter, 500);  // Short delay before typing the new word
    }
}
window.onload = typeWriter

// Slide to the About Screen
document.getElementById('about-link').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default link behavior

    const homeScreen = document.getElementById('home-screen');
    const aboutScreen = document.getElementById('about-screen');

    homeScreen.style.transform = 'translateX(-100%)';
    aboutScreen.style.transform = 'translateX(0)';
});

// Slide back to the Home Screen
document.getElementById('back-home').addEventListener('click', function () {
    const homeScreen = document.getElementById('home-screen');
    const aboutScreen = document.getElementById('about-screen');

    homeScreen.style.transform = 'translateX(0)';
    aboutScreen.style.transform = 'translateX(100%)';
});

// Optional: Clicking "Home" from the nav should also take you to the home screen
document.getElementById('home-link').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default link behavior

    const homeScreen = document.getElementById('home-screen');
    const aboutScreen = document.getElementById('about-screen');

    homeScreen.style.transform = 'translateX(0)';
    aboutScreen.style.transform = 'translateX(100%)';
});


