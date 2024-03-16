const express = require('express');
const { handleGenerateNewShortURL,getUrlById,handleGetAnalytics } = require('../controllers/url');

const router = express.Router();

router.post("/",handleGenerateNewShortURL);
router.get('/:shortId',getUrlById);
router.get('/analytics/:shortId',handleGetAnalytics);

module.exports = router;

