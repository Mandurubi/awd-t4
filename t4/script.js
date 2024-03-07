// Lady

let popup1 = document.getElementById('popup1');
let pinkRosePopup = document.getElementById('pinkRosePopup');
let redRosePopup = document.getElementById('redRosePopup');

function openPopup1() {
  popup1.classList.add("open-popup");
}

function closePopup1() {
  popup1.classList.remove("open-popup");
}

function openPinkRosePopup() {
  pinkRosePopup.classList.add("open-popup");
}

function closePopup2() {
  pinkRosePopup.classList.remove("open-popup");
}

function openRedRosePopup() {
  redRosePopup.classList.add("open-popup");
}

function closePopup3() {
  redRosePopup.classList.remove("open-popup");
}

// pat

document.addEventListener('DOMContentLoaded', function() {
    var scrollTopButton = document.getElementById('scrollToTopButton');

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopButton.style.display = "flex";
        } else {
            scrollTopButton.style.display = "none";
        }
    };

    scrollTopButton.addEventListener('click', function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
});
