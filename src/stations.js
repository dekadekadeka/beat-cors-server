const express = require('express');
const request = require('request');
const serverless = require('serverless-http');
require('dotenv').config();

const app = express();

const router = express.Router();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

router.get('/', (req, res) => {
  request(
    { url: `http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=${process.env.MARTA_API}`},
    (err, response, body) => {
      if (err || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: 'Sorry but there has been an error!' });
      }

      res.json(JSON.parse(body));
    }
  )
});

app.use('/.netlify/functions/stations', router)

module.exports.handler = serverless(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
