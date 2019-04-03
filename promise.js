var tempValue=document.getElementById('tempValue');
var minTemp=document.querySelector('.minTemp');
var maxTemp=document.querySelector('.maxTemp');
var weatherDescription=document.getElementById('weatherDescription')
var weatherIcon=document.getElementById('weatherIcon')

function getTemp()
{
 var searchValue=document.getElementById('searchValue').value;
  console.log(searchValue);
  updateTemp(searchValue);
}

 function updateTemp(location)
 { fetch('https://api.openweathermap.org/data/2.5/weather?q='+ location + ',ind&units=metric&appid=1b9eec515d18cf2e35e977219ce02cc4')
.then((res)=>res.json())
 .then((data)=>{
  tempValue.innerHTML= data.main.temp;
  minTemp.innerHTML=data.main.temp_min;
  maxTemp.innerHTML=data.main.temp_max;
  weatherDescription.innerHTML=data.weather[0].description;
  var icon=data.weather[0].description;
  console.log(icon);
  switch(icon)
  { case 'haze':{
    weatherIcon.src='haze.png'}
    break;
    case 'clear sky':
    {
      weatherIcon.src='clearsky.png'
    }
    break;
    case 'overcast clouds':
    {
      weatherIcon.src='overcastclouds.png'
    }
    break;
    case 'broken clouds':
    {
      weatherIcon.src='brokenclouds.png'
    }
    break;
    default:
    {
      weatherIcon.src='default.gif'
    }
  }


  
})
.catch(()=>console.log("OOOPS!!LOCATION NOT FOUND"))
}





//https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid
//api.openweathermap.org/data/2.5/weather?id=1261481&APPID=1b9eec515d18cf2e35e977219ce02cc4'