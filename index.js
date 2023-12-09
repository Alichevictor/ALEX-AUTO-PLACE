
const imageUrls = [
    'images/auto21.png.jpg',
    'images/auto12.png.jpg',
    'images/auto13.png.jpg',
    'images/aa1.png.jpg',
    'images/aa2.png.jpg',
    'image/auto1.png.jpg',
    'images/auto2.png.jpg',
    'images/auto3.png.jpg',
    'images/auto4.png.jpg',
    'images/auto5.png.jpg',
    'images/auto6.png.jpg',
];

let currentIndex = 0;

function updateImage() {
    const rotatingImage = document.getElementById('rotating-image');
    rotatingImage.src = imageUrls[currentIndex];
}

function goToPrevious() {
    currentIndex = currentIndex === 0 ? imageUrls.length - 1 : currentIndex - 1;
    updateImage();
}

function goToNext() {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    updateImage();
}

// Automatically rotate images every 5 seconds
setInterval(goToNext, 5000);

// Initial image update
updateImage();





const toggleMenu = () => {
    const menu = document.getElementById("ul");
    menu.style.height = menu.style.height === "0px" ? "auto" : "0px";
};

const closeMenu = () => {
    const menu = document.getElementById("ul");
    menu.style.height = "0px";
};




