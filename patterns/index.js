const patternDict =[{
	pattern: '\\b(?<greeting>Hi|Hello|Hey|Bonjour|salut)\\b',
	intent:'Hello'
},
{
	pattern:'\\b(bye|exit|quit)\\b',
	intent: 'Exit'
},
{
    //pattern: "(how|what).is.the.(time|weather).in\\b(?<city>.)",
    pattern: "like\\sin\\s\\b(?<city>.+)",
    intent: "CurrentWeather"

},
{
	pattern:"teams\\sof\\s\\b(?<league>.+)",
	intent: 'Team'
},
{
	pattern:"goals\\sfor\\s\\b(?<equipe>.+)",
	intent: 'Goalfor'
},
{
	pattern:"goals\\sagainst\\s\\b(?<equipe>.+)",
	intent: 'Goalagainst'
}


];


module.exports=patternDict;