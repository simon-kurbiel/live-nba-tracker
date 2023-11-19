const {StatusCodes} = require('http-status-codes')
const CustomApi =require('./custom-error');


class BadRequest extends CustomApi{
    constructor(message){
        super(message);
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}

module.exports = BadRequest;