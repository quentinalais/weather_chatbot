
'use strict';
const axios = require("axios");
const apikey = '827c2fe476704a54b79180025191002';

const getWeather = (location, nbDays) => {
	return new Promise(async (resolve, reject) => {
		try {
			const weatehrConditions = await axios.get(
			"http://api.apixu.com/v1/forecast.json",
			{
				params: {
					key: apikey,
					q: location,
					days: nbDays
				}
            });
            
            console.log("PUTE:"+JSON.stringify(weatehrConditions,null,2))
			resolve(weatehrConditions)
			
		}
		catch(error){
			reject(error);
		}
	});
}


(async () => {
    var weath = await getWeather("Paris", 3);
    if(weath != 'Error'){
        console.log(" Here's the current condition in " + "Paris" + " : " );
           }
    
    else{console.log(' Error 404 : City Not Found.');}
})();
