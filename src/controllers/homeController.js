const axios = require('axios');

const HomePage = async (req, res)=>{
    try{
        const apiData = await axios.get("https://www.mmobomb.com/api1/games");

        const paginationCount = (apiData.data.length / 15) % 10 == 0 ? apiData.data.length / 15  : apiData.data.length / 15 + 1 ;

        const page = req.query.page === undefined ? 1 : req.query.page;
        
        const limit = 15;
        const startIndex = (page -1) * limit;
        const endIndex = page * limit;

        const data = apiData.data.slice(startIndex, endIndex);


        

        res.render('home', {games: data, count : parseInt(paginationCount), page});
    }catch(error){
        console.log(`HomePage Controller Errors : ${error}`);
    }

    
}

const SearchResultView = async (req, res)=>{
    try{
        const apiData = await axios.get("https://www.mmobomb.com/api1/games?category="+req.body.searchKey);
        res.render('home', {games: apiData.data});

        
    }catch(error){
        res.render('home', {games: undefined});
    }
}


module.exports = {
    HomePage,
    SearchResultView,
}