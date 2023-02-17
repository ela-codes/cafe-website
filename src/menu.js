import { createElement, appendNew } from './pageTemplate.js'
import mocha from './mocha.jpg';
import coldbrew from './coldbrew.jpg';
import cappuccino from './cappuccino.jpg';

export function menuPageContent() {
    const menuContent = createElement('div', 'menu-content');
    const menuItems = createElement('div', 'menu-items')
    const title = createElement('h2', 'menu-title');
    title.innerHTML = 'Our Menu'

    const coffee1 = createElement('div', 'coffee')
    const mochaImg = createElement('img', 'coffee-img');
    mochaImg.src = mocha; 
    const mochaText = createElement('div', 'mocha-txt');
    mochaText.innerHTML = "For those with a sweet tooth, our mocha is the perfect indulgence. Made with our rich espresso, steamed milk, and velvety chocolate sauce, this drink is a decadent treat. Whether you're in need of a mid-day pick-me-up or a sweet after-dinner treat, our mocha is the perfect choice."

    coffee1.append(mochaImg, mochaText)
    
    const coffee2 = createElement('div', 'coffee')
    const coldBrewImg = createElement('img', 'coffee-img');
    coldBrewImg.src = coldbrew; 
    const coldBrewTxt = createElement('div', 'mocha-txt');
    coldBrewTxt.innerHTML = "Cold Brew: For those who love a refreshing iced coffee, our cold brew is the perfect choice. Made by steeping our premium coffee beans in cold water for 12-24 hours, our cold brew is smooth and bold with a subtle sweetness. It's the perfect pick-me-up on a hot summer day."

    coffee2.append(coldBrewImg, coldBrewTxt)

    const coffee3 = createElement('div', 'coffee')
    const cappuccinoImg = createElement('img', 'coffee-img');
    cappuccinoImg.src = cappuccino; 
    const cappuccinoTxt = createElement('div', 'mocha-txt');
    cappuccinoTxt.innerHTML = "Cappuccino: A classic espresso-based drink that combines rich espresso with steamed milk and frothy milk foam. Our cappuccino is the perfect balance of bold espresso and creamy milk, with just the right amount of foam for a luxurious finish."

    coffee3.append(cappuccinoImg, cappuccinoTxt)

    appendNew(menuItems, title)
    menuItems.append(coffee1, coffee2, coffee3)
    appendNew(menuContent, menuItems)


    return menuContent
}