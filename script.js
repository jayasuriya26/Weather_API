const apikey = "22637477704308a893c4fda8f925bfc3"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchinput = document.querySelector('.search input')
const searchbtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('#weather-icon')

const icons = ["clouds","clear","drizzle","mist","rain","snow","haze"]

const weatherchange = async (city) => {
    const response = await fetch(apiurl + city + `&appid=${apikey}`)
    const data = await response.json()
    console.log(data)

    if(response.status == 404){
        document.querySelector('.error').style.display = "block"
        document.querySelector('.weather').style.display = "none"

    }else{
        const icon = data.weather[0].main.toLowerCase()

        document.querySelector('#city').innerHTML = data.name;
        document.querySelector('#temp').innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + "kmph";

        if(icons.includes(icon)){
            weatherIcon.src = "images/"+icons[icons.indexOf(icon)]+".png"
    }
    
        document.querySelector('.weather').style.display = "block"
        document.querySelector('.error').style.display = "none"
    }
}

searchbtn.addEventListener('click', () => {
    weatherchange(searchinput.value)
})
