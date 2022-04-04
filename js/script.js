setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

const hourDigital = document.querySelector('[data-hour-digital]');
const minuteDigital = document.querySelector('[data-minute-digital]');
const secondDigital = document.querySelector('[data-second-digital]');
const ampmDigital = document.querySelector('[data-am-pm]');

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    let ampm = currentDate.getHours() >= 12 ? 'PM' : 'AM';
    let hours = currentDate.getHours() % 12
    hours = hours ? hours : 12;

    setDigital(hourDigital, hours);
    setDigital(minuteDigital, currentDate.getMinutes());
    setDigital(secondDigital, currentDate.getSeconds());
    setDigital(ampmDigital, ampm);

    setRotation(hourHand, hoursRatio);
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

function setDigital(element, value) {
    value = ('0' + value).slice(-2);
    element.textContent = value;
}