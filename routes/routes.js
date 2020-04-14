import express from 'express';
import dataService from './../services/data.service'
const router = express.Router();


// middleware that is specific to this router
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    console.log('Time: ', Date.now());
    next();
});

// define the home page route
router.get('/', function(req, res) {
  res.send('CoolHacker!');
});

router.get('/get-data', dataService.getAllData)
router.get('/request-and-parse', dataService.takeNewData)

module.exports = router;