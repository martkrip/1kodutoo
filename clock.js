let h, m, s, minuteVal, hourVal, secondVal, dateElement, day, month, year, weekday;
let r, g, b;



h = document.getElementById("hours");
m = document.getElementById("minutes");
s = document.getElementById("seconds");
dateElement = document.getElementById("date");
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let weekNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

function changeColor(){
    r = Math.ceil(Math.random()*255);
    g = Math.ceil(Math.random()*255);
    b = Math.ceil(Math.random()*255);

    document.getElementById("container").style.backgroundColor = "rgb("+ r + "," + g + "," + b + ")"; //rgb(255,255,255)
}

window.addEventListener("keypress", changeColor);
dateElement.addEventListener("click", changeColor);

function updateClock(){
    console.log("jõudsin updateclock funktsiooni");
    let date = new Date();
    hourVal = date.getHours();
    minuteVal = date.getMinutes();
    secondVal = date.getSeconds();
    day = date.getDate();
    weekday = date.getDay();
    month = date.getMonth();
    year = date.getFullYear();

    if(hourVal < 10){
        hourVal = "0" + hourVal;
    }

    if(minuteVal < 10){
        minuteVal = "0" + minuteVal;
    }

    if(secondVal < 10){
        secondVal = "0" + secondVal;
    }

    h.innerHTML = hourVal + ":";
    m.innerHTML = minuteVal + ":";
    s.innerHTML = secondVal;
    dateElement.innerHTML = day + ". " + weekNames[weekday] + ". " + monthNames[month] + " " + year;

}

setInterval(updateClock, 1000)
updateClock();