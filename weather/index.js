"use strict"
const axios=require("axios");
const apikey="cf5d3934b7094475b23225530191002";

const getWeather = location =>
{
	return new Promise(async (resolve,reject)=>
	{
		try
		{
			let url="http://api.apixu.com/v1/current.json?key=cf5d3934b7094475b23225530191002&q="+location;
			//console.log("URL :"+url)
			const weatherConditions=await axios.get(url);
			
			console.log("The weather is ".underline.red+weatherConditions.data.current.condition.text+" and the temperature is ".underline.red+weatherConditions.data.current.temp_c+" °C.".underline.red)
				
		}
		catch(error)
		{
			reject(error);
		}
		
		
	});
}

module.exports=getWeather;

