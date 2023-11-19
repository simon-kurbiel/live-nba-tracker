// const url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard'

// const getData = async(url)=>await fetch(url).then(data=>data.json()).then((value)=>{
//     console.log(value.events[0].competitions[0].competitors);
// })
// getData(url)

const express = require('express');
const app = express();


//router
const nbaRouter = require('./routes/nba');

//middlewares;
const errorHandlerMiddleware = require('./middleware/error-handler');
const notFoundMiddleware = require('./middleware/not-founds');


//use
app.use('/api/v1/nba',nbaRouter)
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
//port numbet
const port = process.env.port || 5000

const start = async()=>{
    try {
        app.listen(port,(req,res)=>{
            console.log(`listening on port ${port}`)
        })
        
    } catch (error) {
        console.log(error);
        
    }
}

start()

