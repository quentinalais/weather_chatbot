'use strict'
var colors = require('colors');
const weather = require("./weather");

const Readline=require('readline');//
const rl=Readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
})

const matcher=require('./matcher');

rl.setPrompt('>');
rl.prompt();
rl.on('line',reply=>{
	
	matcher(reply,cb=>{
		switch(cb.intent)
		{
			case "Hello":
				console.log(`${cb.entities.greeting} to you too!`.green);
				 rl.prompt();
                break;

            case "Exit":
            	console.log("Aurevoir et merci bien.".green)
            	process.exit(0);
            case "CurrentWeather":
            	console.log(`you want the current weather for ${cb.entities.city} what a nice place !`.green);

            case "CurrentWeather":
            	let w=weather(cb.entities.city);
            
            	

		}
	});
	
	

});





