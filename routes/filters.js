const express = require('express');
const router = express.Router();
const axios = require('axios');
const { statuses, procTypes, regions } = require('../data/filters-list')

router.get('/buyers', async (req, res) => {
  const text = req.query.text;
  try {
    const response = await axios.post(`https://prozorro.gov.ua/api/search/organizations?type=buyer&value=${text}`);
    const data = response.data;
    res.json(data.data);
  } catch (error) {
    console.error('Error while making the request:', error);
    res.status(500).json({ error: 'An error occurred while fetching data from the external API' });
  }
});


router.get('/participants', async (req, res) => {
  const text = req.query.text;
  try {
    const response = await axios.post(`https://prozorro.gov.ua/api/search/organizations?type=tenderer&value=${text}`);
    const data = response.data;
    res.json(data.data);
  } catch (error) {
    console.error('Error while making the request:', error);
    res.status(500).json({ error: 'An error occurred while fetching data from the external API' });
  }
});


router.get('/participants', async (req, res) => {
  const text = req.query.text;
  try {
    const response = await axios.post(`https://prozorro.gov.ua/api/search/organizations?type=tenderer&value=${text}`);
    const data = response.data;
    res.json(data.data);
  } catch (error) {
    console.error('Error while making the request:', error);
    res.status(500).json({ error: 'An error occurred while fetching data from the external API' });
  }
});


router.get('/statuses', async (req, res) => {
  res.json(statuses)
});

router.get('/proctypes', async (req, res) => {
  res.json(procTypes)
});

router.get('/regions', async (req, res) => {
  res.json(regions)
});

module.exports = router;