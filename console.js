const apikey="f64265b8eb222902cf60f929be741071";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");

async function checkweather(){
    const response =await fetch(apiurl + `&q=${searchbox.value}` + `&appid=${apikey}`);

    if (response.status==404){
        document.querySelector(".error").style.display="block";
    }

    var data=await response.json();
    console.log(data)
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp+ "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"Km/h";
    if (data.weather[0].main== "Clouds"){
        weathericon.src="clouds.png"
    }
    else if(data.weather[0].main== "Clear"){
        weathericon.src="clear.png"
    }
    else if(data.weather[0].main== "Drizzle"){
        weathericon.src="drizzle.png"
    }
    else if(data.weather[0].main== "Rain"){
        weathericon.src="rain.png"
    }
    else if(data.weather[0].main== "Humid"){
        weathericon.src="humidity.png"
    }
    else if(data.weather[0].main== "Snow"){
        weathericon.src="snow.png"
    }
    else if(data.weather[0].main== "Mist"){
        weathericon.src="mist.png"
    }
    else if(data.weather[0].main== "Wind"){
        weathericon.src="wind.png"
    }
    document.querySelector(".weather").style.display ="block";
    document.querySelector(".error").style.display="none";
}
searchbtn.addEventListener("click",()=>{
    checkweather();
})
