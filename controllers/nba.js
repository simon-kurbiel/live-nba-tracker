
const {StatusCodes} = require('http-status-codes');
const url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard'
const CustomMessage = require('../errors')

const getData = async(url,type="scheduled")=>await fetch(url).then(data=>data.json()).then((value)=>{
    //get scheduled games
    
    if(type == "scheduled"){
        console.log("Getting the schedule games")
        return value.events.filter((team)=>team.status.type.name == "STATUS_SCHEDULED");
    }
    
    //get completed games
    else if(type == "completed"){
        console.log("getting the completed games")
        return value.events.filter((team)=>team.status.type.completed == true)
    }
    //get live games
    console.log("getting live games")
    return value.events.filter((team)=>team.status.type.completed === false && team.status.type.name !== "STATUS_SCHEDULED");
    
})

const scheduledGames = async(req,res)=>{
     value = await getData(url,type="scheduled");
    // const day = value.day.date;
     if(value.length === 0)
        return res.status(StatusCodes.OK).json({success:true, msg:"No Scheduled Games", data:[]})
    const options = { timeZone: "America/New_York" };
    const mapEvents = value.map((event)=>{

        return {
            name:event.name,
            date: (new Date(event.date)).toLocaleString("en-US", options),
            type:event.season.slug,
            stadium: event.competitions[0].venue.fullName,
            teams : event.competitions[0].competitors.map((element)=>{
                return {
                    team : element.team.displayName,
                    homeAway : element.homeAway,

                }
            }),       



        }
    })
    return res.status(StatusCodes.OK).json({success:true,msg:"GAMES",data : mapEvents})

}

const allLiveGames = async (req,res)=>{
    value = await getData(url,type="live");
    console.log(value);
    // const day = value.day.date;
    if(value.length === 0)
        return res.status(StatusCodes.OK).json({success:true, msg:"No Live Games", data:[]})
    const options = { timeZone: "America/New_York" };
    const mapEvents = value.map((event)=>{
        return {
            name:event.name,
            date: (new Date(event.date)).toLocaleString("en-US", options),
            type:event.season.slug,
            stadium: event.competitions[0].venue.fullName,
            teams : event.competitions[0].competitors.map((element)=>{
                return {
                    team : element.team.displayName,
                    homeAway : element.homeAway,
                    score : element.score,

                }
            }),
            status: {
                period : event.status.period,
                timeLeft : event.status.displayClock,

            },
            

           



        }
    })
    return res.status(StatusCodes.OK).json({success:true,msg:"GAMES",data : mapEvents})
}
const allFinishedGames = async(req,res)=>{
    value = await getData(url,type="completed");
    // const day = value.day.date;
     if(value.length === 0)
        return res.status(StatusCodes.OK).json({success:true, msg:"No Finished Games", data:[]})
      const options = { timeZone: "America/New_York" };
    const mapEvents = value.map((event)=>{
        return {
            name:event.name,
            date: (new Date(event.date)).toLocaleString("en-US", options),
            type:event.season.slug,
            stadium: event.competitions[0].venue.fullName,
            teams : event.competitions[0].competitors.map((element)=>{
                return {
                    team : element.team.displayName,
                    homeAway : element.homeAway,
                    score : element.score,

                }
            }),
            period : event.status.period,

           



        }
    })
    return res.status(StatusCodes.OK).json({success:true,msg:"GAMES",data : mapEvents})
}


module.exports = {
    scheduledGames,
    allLiveGames,
    allFinishedGames
}