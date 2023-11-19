const notFound = (req,res) =>{
    return res.status(404).send({success:false,msg:'route does not exist'})
}
module.exports = notFound