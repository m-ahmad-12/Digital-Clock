   let clock=document.querySelector(".digital_clock");
   let liveTimer=function(){
      let currentDate=new Date();
   let hours = String(currentDate.getHours());
   let minutes=String(currentDate.getMinutes());
   let seconds=String(currentDate.getSeconds());
   hours=hours.padStart(2,"0");
   minutes=minutes.padStart(2,"0");
   seconds=seconds.padStart(2,"0");
   clock.textContent=`${hours}:${minutes}:${seconds}`};

   setInterval(liveTimer,1000);


   let stopWatch=document.querySelector(".stop_watch");


   let start=document.querySelector(".start");
   let stops=document.querySelector(".stop");
   let reset=document.querySelector(".reset");
   let totalSeconds=0;
   let interval = null
   let totalminutes=0;
   let main=function(){
      totalSeconds+=1;
  let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;
let hours=Math.floor(minutes/ 60);
 hours = String(hours).padStart(2, "0")
minutes = String(minutes).padStart(2, "0")
seconds = String(seconds).padStart(2, "0")
      
   stopWatch.textContent=`${hours}:${minutes}:${seconds}`;
   }
   start.onclick=function(){

   interval=setInterval(main,1000);


   };

stops.onclick=function(){
clearInterval(interval);
}; 
reset.onclick=function(){
clearInterval(interval)
totalSeconds = 0
stopWatch.textContent = "00:00:00"
}  



