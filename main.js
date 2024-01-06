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


// Firebase setup

const firebaseConfig = {

    apiKey: "AIzaSyDag8R73-OuvBCY1rAS3EmFiYqk2UAoB3w",
  
    authDomain: "personalsite-63e10.firebaseapp.com",
  
    databaseURL: "https://personalsite-63e10-default-rtdb.firebaseio.com",
  
    projectId: "personalsite-63e10",
  
    storageBucket: "personalsite-63e10.appspot.com",
  
    messagingSenderId: "945056723012",
  
    appId: "1:945056723012:web:7fb32ba85eef760cdbcc11",
  
    measurementId: "G-HZ54CTHW7B"
  
  };
  
  // Initialize firebase
  firebase.initializeApp(firebaseConfig);

  // Reference collection (Database creation)
  var messagesRef = firebase.database().ref('ContactDataBase');

  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitFormFunction);

  //Function
  function submitFormFunction(e){
    e.preventDefault();
 

  //get values
  var nameValue = getInputVal('nameId');
  var emailValue = getInputVal('emailId');
  var messageValue = getInputVal('messageId');

  //save message
  saveMessage(nameValue, emailValue, messageValue);

  // Clear form data after submission
  document.getElementById('contactForm').reset();

  //   alert("Form is submitted!");

  setTimeout(() => {
    nameValue.value = '',
    emailValue.value = '',
    messageValue.value = ''
  }, 2000);
  
  success.style.display = 'block';

}

  // Function to get get form values
    function getInputVal(id){
    return document.getElementById(id).value;
  }

  // Save message to firebase
function saveMessage(nameValue, emailValue, messageValue){
    var newMessageRef = messagesRef.push();
    
    newMessageRef.set({
      name: nameValue,
      email:emailValue,
      message:messageValue
    });
  }
  


// // Alert 
// const alrt = document.querySelector('.alrt');

// alrt.addEventListener('click', function(){
//     alert(`Database connectivity is In-progress!`);
// });
