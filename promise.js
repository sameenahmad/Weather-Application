var tempValue=document.getElementById('tempValue');
var minTemp=document.querySelector('.minTemp');
var maxTemp=document.querySelector('.maxTemp');
 function updateTemp()
 { fetch('http://api.openweathermap.org/data/2.5/weather?id=1261481&units=metric&APPID=1b9eec515d18cf2e35e977219ce02cc4')
.then((res)=>res.json())
 .then((data)=>{
  tempValue.innerHTML= data.main.temp;
  minTemp.innerHTML=data.main.temp_min;
  maxTemp.innerHTML=data.main.temp_max;
})
}
updateTemp();






//api.openweathermap.org/data/2.5/weather?id=1261481&APPID=1b9eec515d18cf2e35e977219ce02cc4'