
"use strict";
const unirest = require('unirest');
const apikey = "b3b3c59264msh7d3077b8b0eaad3p1e0a5fjsn34eb94f3e738";

var equipe = "Marseille";

function preparation(equipe) {
    var tableau = [];

    for (let i = 1; i < 10; i++) {
        unirest.get("https://api-football-v1.p.rapidapi.com/teams/league/" + i)
            .header("X-RapidAPI-Key", "b3b3c59264msh7d3077b8b0eaad3p1e0a5fjsn34eb94f3e738")
            .end(function (result) {
                const tab = result.body.api.teams;
                for (var id_equipe in tab) {
                    var team_name = tab[id_equipe].name;
                    //console.log("team name :"+team_name)
                    var team_id = tab[id_equipe].team_id;
                    var regex1=new RegExp(team_name,"ig");
                    var found=equipe.match(regex1);

                    if (found!=null) {
                        
                        unirest.get("https://api-football-v1.p.rapidapi.com/statistics/"+i+"/"+team_id)
                            .header("X-RapidAPI-Key", "b3b3c59264msh7d3077b8b0eaad3p1e0a5fjsn34eb94f3e738")
                            .end(function (result) {
                                console.log(`Number of goals marked by ${team_name}:`+result.body.api.stats.goals.goalsFor.total);
                                process.stdout.write(">");
                            });
                        break
                    }


                }
                //console.log(JSON.stringify(result.body,null,2));
            });
    }


}

module.exports = preparation;