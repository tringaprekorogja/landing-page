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


const navMenu = document.querySelector('.navbar__menu');
const nav = document.querySelector('#navbar__list');


function makeNav() {
    console.log(nav);
    const sections = document.querySelectorAll('section');
    for (let section of sections) {
        const anchoring = document.createElement('a');
        anchoring.textContent = section.dataset.nav;
        anchoring.setAttribute('href', '#' + section.id);
        anchoring.setAttribute('id', 'anchor__' + section.id)
        anchoring.classList.add('menu__link');
        const sectionClass = section.setAttribute('class', 'its__' + anchoring.id);
        const newElement = document.createElement('li');
        const listIds = newElement.setAttribute('id', 'nav__item__' + section.id);
        newElement.appendChild(anchoring);
        nav.appendChild(newElement);
        navMenu.appendChild(nav);




    }
}



function addActiveClass() {
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', function (event) {
        for (let section of sections) {
            const bounding = section.getBoundingClientRect();

            if (
                bounding.top >= 0 &&
                bounding.left >= 0 &&
                bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            ) {

                if (section.classList.contains('your-active-class') === false) {
                    section.classList.add('your-active-class');
                    const navItem = document.querySelector('#nav__item__' + section.id);
                    navItem.classList.add('menu-item-active');
                }
            } else {

                if (section.classList.contains('your-active-class') === true) {
                    section.classList.remove('your-active-class');
                    const navItem = document.querySelector('#nav__item__' + section.id);
                    navItem.classList.remove('menu-item-active');


                }

            }


        }

    })
}


function scrollinTo() {
    const links = document.querySelectorAll('a');
    for (let anchoring of links) {
        anchoring.addEventListener('click', function (event) {
            event.preventDefault();
            const sectionItem = document.querySelector('.its__' + anchoring.id);
            sectionItem.scrollIntoView(false);
        })

    }
}



function createAdditionalSections() {
    const docFrag = document.createDocumentFragment();
    const main = document.querySelector('main');
    for (let i = 4; i < 9; i++) {
        const newSection = document.createElement('section');
        const newDiv = document.createElement('div');
        newSection.appendChild(newDiv);
        newDiv.setAttribute('class', 'landing__container');
        newHeader = document.createElement('h2');
        newDiv.appendChild(newHeader);
        newHeader.textContent = 'Section ' + i;
        newParagraph1 = document.createElement('p');
        newParagraph2 = document.createElement('p');
        newParagraph1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod';
        newParagraph2.textContent = 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.';
        newDiv.appendChild(newParagraph1);
        newDiv.appendChild(newParagraph2);
        newSection.setAttribute('id', 'section' + i);
        newSection.setAttribute('data-nav', 'Section ' + i);
        docFrag.appendChild(newSection);
        console.log(newSection)
    }

    main.appendChild(docFrag);

}

function main() {
    createAdditionalSections();
    makeNav();
    addActiveClass();
    scrollinTo();
}

main();

















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


