let clock=document.querySelector(".digital_clock");
let liveTimer=function(){
   let currentDate=new Date();
   clock.textContent=`${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`};

setInterval(liveTimer,1000)


