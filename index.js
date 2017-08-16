'use strict';

// Variable for testing
const PAGE_ACCESS_TOKEN = 'EAAB3JUNaWzgBAJirLACJvpCwrGBgtQbLyKjfHxbRGGYeut2eG09N6OpOrYRjnyEyZB8j1qx0KUX6rkghZAZBvWKky6yV1wVzzV8tqpNwW5yyNZAt7OlSVtZCXtU6OnL5qZA6xBCmOrZAPxU6qlLRINhn8DWZB4OEZCxQgf4RGFxaKihZB01unAqbbZB';
var persistentMenu = {
  products: {

  },
  homepage: {

  },
  cart: {

  }
};

// Modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const constant = require('/lib/constant');
const fbmsg = require('fbmsg');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Facebook Messenger Webhook Setup
app.get('/fbmsg', function (req, res) {
  if (req.query["hub.verify_token"] === 'very_secured_verify_token') {
    res.send(req.query["hub.challenge"]);
  } else {
    res.send("Invalid verify_token");
  }
});

// Admin Page
app.get('/', function (req,res) {
  res.sendFile(path.join(__dirname + '/index.html'));
  //__dirname : It will resolve to your project folder.
});
  
// Facebook Messenger Receiver
app.post('/fbmsg', function (req, res) {
  for (let i = 0; i < entry.length; i++) {
    for (let j = 0; j < entry[i].messaging.length; j++) {
      fbmsg.handler.processInputMessage(entry[i].messaging[j]);
    }
  }
  res.status(200).json({});
});



// restService.post('/bizweb/orders/fulfilled', function (req, res) {
//     var request = require('request');
//     var constant = require('./lib/constant');
//     request(
//         {
//             uri: 'https://graph.facebook.com/v2.6/me/messages?access_token=' + constant.getPAGE_ACCESS_TOKEN(1789356631078933),
//             method: 'POST',
//             body: {
//                 "recipient": {
//                     "id": req.body.shipping_address.address2
//                 },
//                 "message": {
//                     "text": "Hóa đơn ID " + req.body.id + " đã được giao\n Cảm ơn quý khách đã mua hàng"
//                 }
//             },
//             json: true
//         }, 
//         function (error, response, body) {
//             res.json({});
//         }
//     );
// });
    
app.listen((process.env.PORT || 8000), function () {
    console.log("Server up and listening");
});