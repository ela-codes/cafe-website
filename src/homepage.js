import { createElement, appendNew } from './pageTemplate.js'

export function homePageContent() {
    const homePage = createElement('div', 'home-content');
    const title = createElement('h2', 'home-title');
    title.innerHTML = 'Welcome'
    
    const aboutMsg = createElement('div', 'about-msg');
    aboutMsg.innerHTML = "At our coffee shop, we're more than just a place to grab a cup of joe. We're a community of coffee lovers, storytellers, and dreamers. So come in, grab a seat, and let's share a story over a perfect cup of coffee. <br> <br> We believe that the perfect cup of coffee isn't just about the beans or the brewing method, but also the experience that surrounds it. That's why we strive to create a warm and inviting atmosphere where everyone feels welcome and at home."


    appendNew(homePage, title);
    appendNew(homePage, aboutMsg);
    
    return homePage
}
