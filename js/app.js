/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

const firstSection = document.querySelector('#section1');
const secondSection = document.querySelector('#section2');
const thirdSection = document.querySelector('#section3');
const sections = document.querySelectorAll('section');
const nav = document.querySelector('#navbar__list');



function makeNav () {   
    console.log(nav);
    for(let section of sections) {  
        const anchoring = document.createElement('a');
        anchoring.textContent = section.dataset.nav;
        anchoring.setAttribute('href','#');
        const newElement = document.createElement('li');
        newElement.appendChild(anchoring);  
        nav.appendChild(newElement);
    }
}

makeNav();


    nav.addEventListener ('click', function(event){
    console.log('hello')  
    })





 








/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

   

   




// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


