

//Now we need to determine the constant of one of the id functions. Because no html function can be used directly in JavaScript.
var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
var minimumtemp = document.querySelector('#minimumtemperature')
var maximumtemp = document.querySelector('#maximumtemperature')
var airpressure = document.querySelector('#airpressure')
var humidity = document.querySelector('#humidity')
var winddirec = document.querySelector('#winddirection')
var cloudcovercond = document.querySelector('#cloudcovercondition')

apik = "3045dd712ffe6e702e3245525ac7fa38"

//kelvin to celcious. 1 Kelvin is equal to -272.15 Celsius.

function convertion(val){
return (val - 273).toFixed(2)
}
//Now I have to collect all the information with the help of fetch method

btn.addEventListener('click', function(){

//This is the api link from where all the information will be collected

  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
  .then(res => res.json())

   //.then(data => console.log(data))

  .then(data => {

//Now I have collected the necessary information with the API link. Now I will collect that information and store it in different constants.

      var nameval = data['name']
      var descrip = data['weather']['0']['description']
      var tempature = data['main']['temp']
      var wndspd = data['wind']['speed']
      var mintem = data['main']['temp_min']
      var maxtem = data['main']['temp_max']
      var airpresre = data['main']['pressure']
      var hum = data['main']['humidity']
      var wnddrctn = data['wind']['deg']
      var cldcvr = data['clouds']['all']

//Now with the help of innerHTML I will make arrangements to display all the information in the webpage.
      city.innerHTML=`Aktuelle Wetterlage in <span>${nameval}<span>`
      temp.innerHTML = `Temperature: <span>${ convertion(tempature)} &#8451;</span>`
      description.innerHTML = `Sky Conditions: <span>  ${descrip}<span>`    
      minimumtemp.innerHTML = `Geringste Temperatur: <span>${ convertion (mintem)} &#8451;<span>`
      maximumtemp.innerHTML = `Höchste Temperatur: <span>${ convertion (maxtem)} &#8451;<span>`
      airpressure.innerHTML = `Luftdruk: <span>${airpresre} hPa<span>`
      humidity.innerHTML = `Feuchtigkeit: <span>${hum} %<span>`
      wind.innerHTML = `Windgeschwindigkeit: <span>${wndspd} m/s<span>`
      winddirec.innerHTML = `Windrichtung: <span>${wnddrctn} &#176;<span>`
      cloudcovercond.innerHTML = `cloud cover: <span>${cldcvr} %<span>`
    
  })

//Now the condition must be added that what if you do not input anything in the input box.
  .catch(err => alert('You entered Wrong city name'))
})
//If you click on the submit button without inputting anything in the input box or typing the wrong city name then the above text can be called.
