const express = require('express');
const router = express.Router();
const axios = require('axios');
const puppeteer = require('puppeteer');

router.get('/tenders', async (req, res) => {
  const queries = req.query;
  const entries = Object.entries(queries);
  let path = 'https://prozorro.gov.ua/api/search/tenders?filterType=tenders'
  let tempArr = []
  
  for (const [key, value] of entries) {
    switch (key) {
      case 'page':
        path += `&page=${value}`
        break;

      case 'text':
        path += `&text=${value}`
        break;

      case 'buyers':
        tempArr = JSON.parse(value)
        tempArr.forEach((arrValue, index) => {
          path += `&buyer[${index}]=${arrValue}`
        })
        break;

      case 'participants':
        tempArr = JSON.parse(value)
        tempArr.forEach((arrValue, index) => {
          path += `&tenderer[${index}]=${arrValue}`
        })
        break;

      case 'statuses':
        tempArr = JSON.parse(value)
        tempArr.forEach((arrValue, index) => {
          path += `&status[${index}]=${arrValue}`
        })
        break;

      case 'procTypes':
        tempArr = JSON.parse(value)
        tempArr.forEach((arrValue, index) => {
          path += `&proc_type[${index}]=${arrValue}`
        })
        break;

      case 'dkCodes':
        tempArr = JSON.parse(value)
        tempArr.forEach((arrValue, index) => {
          path += `&cpv[${index}]=${arrValue}`
        })
        break;

      case 'region':
        path += `&region=${value}`
        break;

      case 'price':
        tempArr = JSON.parse(value)
        path += `&value[currency]=${tempArr[0]}&value[amount][start]=${tempArr[1]}&value[amount][end]=${tempArr[2]}`
        break;

      case 'dateTender':
        tempArr = JSON.parse(value)
        path += `&date[tender][start]=${tempArr[0]}&date[tender][end]=${tempArr[1]}`
        break;

      case 'dateEnquiry':
        tempArr = JSON.parse(value)
        path += `&date[enquiry][start]=${tempArr[0]}&date[enquiry][end]=${tempArr[1]}`
        break;

      case 'dateAward':
        tempArr = JSON.parse(value)
        path += `&date[award][enquiry]=${tempArr[0]}&date[award][end]=${tempArr[1]}`
        break;
    
      default:
        break;
    }
  }

  
  try {
    const response = await axios.post(path);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error('Error while making the request:', error);
    res.status(500).json({ error: 'An error occurred while fetching data from the external API' });
  }
});

router.get('/tender', async (req, res) => {
  const queries = req.query;
  const tenderId = queries.id

  try {
    (async () => {
      // Launch the browser
      const browser = await puppeteer.launch();
    
      // Create a page
      const page = await browser.newPage();
    
      // Go to your site
      await page.goto(`https://prozorro.gov.ua/tender/${tenderId}`);
    
      // Query for an element handle.
      const element = await page.waitForSelector('.tender--head--inf');
      let value = await page.evaluate(el => el.textContent, element);
      const temp = value.split(' ')
      let findedIndex = 0;
      temp.forEach((el, index) => {
        if (el == tenderId) {
          findedIndex = index 
        }
      })

      let id2 = temp[findedIndex + 2]
      id2.replace('\\n', '')   

      await element.dispose();
      await browser.close();

      const response = await axios.get(`https://public.api.openprocurement.org/api/2.5/tenders/${id2}`);
      const data = response.data;
      res.json(data);
    })()
  } catch (error) {
    console.error('Error while making the request:', error);
    res.status(500).json({ error: 'An error occurred while fetching data from the external API' });
  }
})

module.exports = router;