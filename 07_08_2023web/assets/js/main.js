const secondHand = document.querySelector('.second-hand');
const hoursHand = document.querySelector('.hour-hand');
const minutesHand = document.querySelector('.min-hand');
const dataHand = document.querySelector('.data');

function setDate(){
    const now = new Date();

    const second = now.getSeconds();
    const secondDegrees = ((second / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    
    const minute = now.getMinutes();
    const minuteDegrees = ((minute / 60) * 360)+((second/60) * 6) + 90;
    minutesHand.style.transform = `rotate(${minuteDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360)+((minute/60) * 30) + 90;
    hoursHand.style.transform = `rotate(${hourDegrees}deg)`;
    
    const year = now.getFullYear();
    const day = now.getDay();
    const month = now.getMonth();
    
    dataHand.innerHTML = `${day}/${month}/${year}`;
}

setInterval(setDate,1000);

