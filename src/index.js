import './style.css';
import { createElement, appendNew, changePageContent, changeActiveBtn } from './pageTemplate.js'
import { homePageContent } from './homepage.js';
import { menuPageContent } from './menu.js';
import { hoursPageContent } from './hours.js';
import Banner from './coffee_banner.jpg'

const container = createElement('div', 'container');
const homepage = createElement('div', 'homepage');
const mainHeader = createElement('header', 'main-header');
const mainContent = createElement('div', 'main-content');
const homeBtn = createElement('button', 'home');
const menuBtn = createElement('button', 'menu');
const hoursBtn = createElement('button', 'hours');
const homeContent = homePageContent()
const menuContent = menuPageContent()
const hoursContent = hoursPageContent()
let currPage;
let currBtn;


function createSubHeader() {
    const headerTitle = createElement('h1','header-title');
    headerTitle.innerHTML = 'cafe ela';

    const subHeader = createElement('div', 'sub-header');
    
    const coffeeBanner = createElement('img', 'banner');
    coffeeBanner.src = Banner;

    appendNew(subHeader, headerTitle);
    appendNew(subHeader, coffeeBanner);

    return subHeader
}

function createSidebar() {
    const sidebar = createElement('div', 'sidebar');
    homeBtn.innerText = 'Home'
    menuBtn.innerText = 'Menu'
    hoursBtn.innerText = 'Hours'

    sidebar.append(homeBtn, menuBtn, hoursBtn)

    return sidebar
}

function createFooter() {
    const footer = createElement('footer', 'main-footer');
    const github = createElement('a', 'github')
    github.href = 'https://github.com/ateodocio'
    github.innerHTML = 'Created by ateodocio.'

    const unsplash = createElement('a','unsplash')
    unsplash.href = 'https://unsplash.com/photos/hwYwbz7TAhU'
    unsplash.innerHTML = 'Photo by rawkkim.'

    footer.append(github, unsplash);
    return footer
}

// BUILD THE PAGE
(function buildPage() {
    container.append(homepage, mainHeader, mainContent, createFooter())

    document.body.appendChild(container);
    appendNew(mainHeader, createSubHeader());

    mainContent.append(createSidebar(),homeContent,menuContent,hoursContent)

    // when page loads, homepage is shown 
    homeContent.style.display = 'block';
    currPage = homeContent;
    currBtn = homeBtn;
    
})();


// EVENT LISTENERS

menuBtn.onclick = function(){
    changePageContent(currPage, menuContent);
    changeActiveBtn(currBtn, menuBtn);
    currPage = menuContent;
    currBtn = menuBtn;
    
}

homeBtn.onclick = function() {
    changePageContent(currPage, homeContent);
    changeActiveBtn(currBtn, homeBtn);
    currPage = homeContent;
    currBtn = homeBtn;
}

hoursBtn.onclick = function() {
    changePageContent(currPage, hoursContent);
    changeActiveBtn(currBtn, hoursBtn);
    currPage = hoursContent;
    currBtn = hoursBtn;
}

