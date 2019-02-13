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
}];


module.exports=patternDict;