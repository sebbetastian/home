const message2 = document.getElementById('message2');
const today = new Date();
const hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'good evening';
} else if (hourNow > 12) {
    greeting = 'good afternoon';
} else if (hourNow > 0) {
    greeting = 'go to bed!';
} else if (hourNow > 4) {
    greeting = 'good morning';
} else {
    greeting = 'welcome.'
}

message2.innerHTML = (greeting);