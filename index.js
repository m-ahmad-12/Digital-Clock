let clock=document.querySelector(".digital_clock");
let currentDate=new Date();
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());
clock.textContent=`${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;


