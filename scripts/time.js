var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes();
var dateTime = date+' '+time;

var dT = (function disTime() {
    const displayTime = document.getElementById('timeDate');
    displayTime.textContent = 'Time & Date: ' + dateTime;
}())