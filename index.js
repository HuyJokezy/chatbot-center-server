'use strict';

// Variable for testing
const PAGE_ACCESS_TOKEN = 'EAAB3JUNaWzgBAJirLACJvpCwrGBgtQbLyKjfHxbRGGYeut2eG09N6OpOrYRjnyEyZB8j1qx0KUX6rkghZAZBvWKky6yV1wVzzV8tqpNwW5yyNZAt7OlSVtZCXtU6OnL5qZA6xBCmOrZAPxU6qlLRINhn8DWZB4OEZCxQgf4RGFxaKihZB01unAqbbZB';
let persistentMenu = {
  products: {
    title: 'Xem sản phẩm'
  },
  website: {
    title: 'Trang web',
    url: 'https://www.google.com.vn'
  },
  custom: {
    title: 'Tìm hiểu thêm',
    text: 'Cảm ơn bạn đã quan tâm'
  }
};
exports.persistentMenu;
exports.PAGE_ACCESS_TOKEN;

// Modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require("path");
const fbmsgConfigure = require('fbmsg/configure');
const fbmsgHandler = require('fbmsg/handler');

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
  document.getElementById(showProductButtonTitle).value = persistentMenu.products.title;
  document.getElementById(websiteButtonTitle).value = persistentMenu.website.title;
  document.getElementById(websiteButtonUrl).value = persistentMenu.website.url;
  document.getElementById(customButtonTitle).value = persistentMenu.custom.title;
  document.getElementById(customButtonText).value = persistentMenu.custom.text;
  //__dirname : It will resolve to your project folder.
});
  
// Facebook Messenger Receiver
app.post('/fbmsg', function (req, res) {
  for (let i = 0; i < entry.length; i++) {
    for (let j = 0; j < entry[i].messaging.length; j++) {
      fbmsgHandler.processInputMessage(entry[i].messaging[j]);
    }
  }
  res.status(200).json({});
});

function changeConfig () {
  let greeting = ocument.getElementById(greeting).value;
  let showProductButtonTitle = document.getElementById(showProductButtonTitle).value;
  let websiteButtonTitle = document.getElementById(websiteButtonTitle).value;
  let websiteButtonUrl = document.getElementById(websiteButtonUrl).value;
  let customButtonTitle = document.getElementById(customButtonTitle).value;
  let customButtonText = document.getElementById(customButtonText).value;
  persistentMenu.custom.text = customButtonText;
  fbmsgConfigure.greetingText(PAGE_ACCESS_TOKEN, greeting);
  fbmsgConfigure.persistentMenu(PAGE_ACCESS_TOKEN, showProductButtonTitle, websiteButtonTitle, websiteButtonUrl, customButtonTitle);
}
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