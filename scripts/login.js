var dT = (function disTime() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes();
    var dateTime = date+' '+time;
    
    const displayTime = document.getElementById('timeDate');
    displayTime.textContent = 'Time & Date: ' + dateTime;
}())

const message = document.getElementById('message');
const param = new URLSearchParams(window.location.search);
const username = param.get('username');
const pw = param.get('password');

if(username.toLowerCase() === 'name' && pw === 'password') {
    message.innerHTML = 'Welcome User!';
}   else if(!username || !pw){
    message.innerHTML = 'who are you?';
}   else {
    message.innerHTML = 'find the password!';
}


