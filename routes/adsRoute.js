const express = require('express');
const {
    createAd,
    updateAd,
    getAds
} = require('../controllers/adsController.js')

const router = express.Router();

router.post('/createAd',createAd)
router.put('/updateAd/:id',updateAd)
router.get('/ads',getAds)

module.exports =router