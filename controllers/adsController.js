const jwt = require('jsonwebtoken');
const { 
    getAdService,
    updateAdService,
    createAdService
    } = require('../services/adService.js');

const createAd = async (req, res) => {
    const token = req.headers.token;
    const body = req.body;
    const userDetails = jwt.verify(token,'secret123@');
    const { userId } = userDetails;
    body["userId"] = userId;
    const ad = await createAdService(body);
    res.status(201)
       .json(ad);
}

const updateAd = async (req, res) => {
    const id = req.params.id;
    if(!id) {
        throw Error("id is required")
    }
    const body = req.body;
    await updateAdService(id,body)
    res.status(200)
       .json({
           success: true,
           message: "successfully updated"
       });
}

const getAds = async (req,res)=>{
    const ads = await getAdService()
    res.status(200)
       .json(ads)
}

module.exports= { createAd, updateAd ,getAds }