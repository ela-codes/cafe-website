import { createElement, appendNew } from './pageTemplate.js'


export function hoursPageContent() {
    const hoursPage = createElement('div', 'hours-content');
    const title = createElement('h2', 'hours-title');
    title.innerHTML = 'Hours'
    
    const weekdays = createElement('div', 'days');
    weekdays.innerHTML = 'Monday - Friday'
    const weekdayHours = createElement('div', 'hours');
    weekdayHours.innerHTML = '6:00 - 15:00';

    const weekends = createElement('div', 'days');
    weekends.innerHTML = 'Saturday - Sunday'
    const weekendHours = createElement('div', 'hours');
    weekendHours.innerHTML = '8:00 - 12:00';


    appendNew(hoursPage, title);
    hoursPage.append(weekdays, weekdayHours, weekends, weekendHours)

    return hoursPage
}
