let clock=document.querySelector(".digital_clock");
let liveTimer=function(){
   let currentDate=new Date();
let hours = String(currentDate.getHours());
let minutes=String(currentDate.getMinutes());
let seconds=String(currentDate.getSeconds());
hours=hours.padStart(2,"0");
minutes=minutes.padStart(2,"0");
 clock.textContent=`${hours}:${minutes}:${seconds}`};

setInterval(liveTimer,1000)


