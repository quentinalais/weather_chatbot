'use strict'
var colors = require('colors');
const unirest = require('unirest');
const apikey = "b3b3c59264msh7d3077b8b0eaad3p1e0a5fjsn34eb94f3e738";

const Readline=require('readline');//
const rl=Readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
})

const matcher=require('./matcher');
const foot=require('./foot/test.js');
const goalsfor=require('./foot/test4.js');
const goalsagainst=require('./foot/test5.js');





rl.setPrompt('>');
rl.prompt();
rl.on('line',reply=>{
	
	matcher(reply,cb=>{
		switch(cb.intent)
		{
			case "Hello":
				console.log(`${cb.entities.greeting} to you too!`.blue);
				 rl.prompt();
                break;

            case "Exit":
            	console.log("Good Bye and see you next time !".green)
            	process.exit(0);
            

            
			case "Team":
				//console.log(`Tu veux les équipes dans :${cb.entities.league} `);

				var league=cb.entities.league ;
				
				//console.log(`Tu veux les équipes dans :${league} `);
				
				foot(league);



				rl.prompt();
				break;
			
			case "Goalfor":
				var team=cb.entities.equipe;
				//console.log("Team :"+team);
				goalsfor(team);
				//rl.prompt();
				break;

			case "Goalagainst":
				var team=cb.entities.equipe;
				goalsagainst(team);
				//rl.prompt();
				break;


				
            	

		}
	});
	
	

});





