async function fetchWeatherCity(cityName){
	let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2acbac7c6cedabb2fc01a529b86ede80`;
	const response= await fetch(url)
	const data= await response.json();
	console.log(data)
}
//demo()

function fetchCity(){
	let cityName = document.getElementById("city_name");
	if(cityName.value===""){
		alert("Enter a city name");
	}else{
		fetchWeatherCity(cityName.value);
		cityName.value="";
	}
}