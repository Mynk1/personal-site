'use strict';

//Portfolio Section - Modal

const portfolioModals = document.querySelectorAll('.portfolio-model');
const imgCards = document.querySelectorAll('.img-card');
const portfolioCloseBtn = document.querySelectorAll('.portfolio-close-btn');

let portfolioModal = function (modalClick){
    portfolioModals[modalClick].classList.add('active');
}

imgCards.forEach((imgCards, i) => {
    imgCards.addEventListener('click', () => {
        portfolioModal(i);
    });
});

portfolioCloseBtn.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener('click',() => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove('active');
        });
    });
});




// Responsive navigation menu toggle

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", function(){
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", function(){
    navigation.classList.remove("active");
});

navItems.forEach((navItem) =>  {
    navItem.addEventListener("click", function(){
        navigation.classList.remove("active");
    });
});