const axios = require('axios');

const GameDetail = async(req, res)=>{
    try{
        const apiData = await axios.get('https://www.mmobomb.com/api1/game?id='+req.params.id);
        res.render('singleGame', {gameDetail: apiData.data});
    }catch(error){
        console.log(`GameDetail Controller Errors : ${error}`);
    }
}


module.exports = {
    GameDetail
}