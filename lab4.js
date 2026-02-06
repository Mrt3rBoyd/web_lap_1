function showAlert(){
    alert ("stop the clock now");
    clearInterval(myInterval);
}

function showTime(){
    const now = new Date();
    const timeString = now.toLocalTimeString();
    document.getElementById("testing").innerHTML = "Current time: ${timeString}";

}
const myInterval = setInterval(showTime, 1000);