
"use strict";
const unirest = require('unirest');
const apikey = "b3b3c59264msh7d3077b8b0eaad3p1e0a5fjsn34eb94f3e738";

/*

*/

async function getidleague(league) {
    try {
        //console.log("Voici la league dans la fonction : "+league);
        let id = "nulll"

        
       var req=unirest.get("https://api-football-v1.p.rapidapi.com/leagues")
            .header("X-RapidAPI-Key", apikey)
            .end(function (result) {
                var good=false;
                for (let i = 1; i < 403; i++) {
                    var regex1=new RegExp(result.body.api.leagues[i].name,'ig');
                    var found=league.match(regex1);


                    if (found!=null) {
                        id = result.body.api.leagues[i].league_id;
                        good=true;
                        //console.log("getid league numéro équipe :" + result.body.api.leagues[i].league_id);

                        break
                    }

                }
                if(good==true)
                {
                    unirest.get("https://api-football-v1.p.rapidapi.com/teams/league/" + id)
                    .header("X-RapidAPI-Key", "b3b3c59264msh7d3077b8b0eaad3p1e0a5fjsn34eb94f3e738")
                    .end(function (result) {


                        const tab = result.body.api.teams;
                        var count = Object.keys(tab).length;
                        //console.log("Taille tab :"+count);
                        for (var id_equipe in tab) {
                            console.log(tab[id_equipe].name);
                        }
                        process.stdout.write("> ");
                        return result;

                    });
                }
                else{
                    console.log("Please ask for an exisiting League.")
                }
                
                //console.log( JSON.stringify(result.body.api.leagues, null, 2));

            });

        return req;
        

    }
    catch (e) {
        console.log("erreur");
    }



}


async function main() {

    var he=gettheleague(4);
    he.end(function (response,error) {
        console.log(JSON.stringify(response.body, null, 2));   
    });
  
}



module.exports=getidleague;
