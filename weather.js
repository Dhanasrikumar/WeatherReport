const apiKey="54686778cae7d9201f129c5eb38931e8";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
async function checkWeather(city){
  const response =await fetch(apiUrl + city+`&appid=${apiKey}`);
  
  var data=await response.json();

  console.log(data);
  
  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
  document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
  document.querySelector(".wind").innerHTML=data.wind.speed +"km/hr";
  document.querySelector(".sunrise").innerHTML=data.sys.sunrise;
  document.querySelector(".sunset").innerHTML=data.sys.sunset;
}

searchBtn.addEventListener('click',()=>{
  checkWeather(searchBox.value);
});
searchBox.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    checkWeather(searchBox.value);
  }
});

