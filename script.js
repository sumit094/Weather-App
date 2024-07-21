const container =document.querySelector('.container');
const search =document.querySelector('.search-box button');
const  weatherBox=document.querySelector('.weather-box');
const weatherDetails =document.querySelector('.weather-details');

search.addEventListener('click', ()=> { 

  const APIKey='985ce1745da7807ce4ca7b95c45648f3';
  const city =document.querySelector('.search-box input').value;

  if (city =='')
    return;

  const weather=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`).then(response => response.json()).then(json => {
    console.log(json)
    const image =document.querySelector('.weather-box img');
    const temperature =document.querySelector('.weather-box .temperature');
    const description =document.querySelector('.weather-box .description');
    const humidity =document.querySelector('.weather-box .humidity span');
    const wind =document.querySelector('.weather-box .wind span');

    switch (json.weather[0].main) {
      case 'Clear':
        image.src='images/clear.png';
        break;

      case 'Rain':
        image.src='images/rain.png';
        break;
      
      case 'Snow':
        image.src='images/snow.png';
        break;
      case 'Clouds':
        image.src='images/cloud.png';
        break;

      case 'Mist':
        image.src='images/mist.png';
        break;
      case 'Haze':
        image.src='images/mist.png';
        break;

      default:
        image.src='images/cloud.png';
    }
    
    temperature.innerHTML =`${parseInt(json.main.temp)}<span>°C</span>`;
    description.innerHTML=`${json.weather[0].description}`;
    humidity.innerHTML =`${json.main.humidity}%`;
    wind.innerHTML=`${parseInt(json.wind.speed)}Km/h`;

  });
});