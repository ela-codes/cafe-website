export function createElement(element, className) {
    const newElement = document.createElement(`${element}`);
    newElement.classList.add(className);
    return newElement
}

export function appendNew(parent, child) {
    parent.appendChild(child)
}


export function changeActiveBtn(currBtn, newBtn) {
    currBtn.style.borderLeft = '0px';
    newBtn.style.borderLeft = 'var(--sideborder)';
}


export function changePageContent(currContent, newContent) {
    currContent.style.display = 'none';
    newContent.style.display = 'block'; 
}
