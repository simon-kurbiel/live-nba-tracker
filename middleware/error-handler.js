const {StatusCodes} =require('http-status-codes')
const CustomMessage = require('../errors')
const errorHandler = (err,res,req,next)=>{
    if(e)
    return res.status(400).send('something went wrong.try again later');
}

module.exports = errorHandler;