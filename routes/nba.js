
const {
    scheduledGames,
    allLiveGames,
    allFinishedGames
} = require('../controllers/nba');

const express = require('express');
const router = express.Router();

router.get('/live',allLiveGames);
router.get('/finished', allFinishedGames);
router.get('/',scheduledGames);


module.exports = router;