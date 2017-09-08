'use strict';

// Variable for testing
const PAGE_ACCESS_TOKEN = 'EAAB3JUNaWzgBAJirLACJvpCwrGBgtQbLyKjfHxbRGGYeut2eG09N6OpOrYRjnyEyZB8j1qx0KUX6rkghZAZBvWKky6yV1wVzzV8tqpNwW5yyNZAt7OlSVtZCXtU6OnL5qZA6xBCmOrZAPxU6qlLRINhn8DWZB4OEZCxQgf4RGFxaKihZB01unAqbbZB';
var getStarted = 'Xin chào quý khách';
let persistentMenu = {
  products: {
    title: 'Xem sản phẩm'
  },
  website: {
    title: 'Trang web',
    url: 'https://chatbot-center-server.herokuapp.com/test'
  },
  custom: {
    title: 'Tìm hiểu thêm',
    text: 'Cảm ơn bạn đã quan tâm'
  }
};

exports.PAGE_ACCESS_TOKEN = PAGE_ACCESS_TOKEN;
exports.getStarted = getStarted;
exports.persistentMenu = persistentMenu;

// Modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require("path");
const fbmsgConfigure = require('./fbmsg/configure');
const fbmsgHandler = require('./fbmsg/handler');
var ejs = require('ejs');
var fs = require('fs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

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
  // next(
    res.render('index', {
      showProductButtonTitle: persistentMenu.products.title,
      websiteButtonTitle: persistentMenu.website.title,
      websiteButtonUrl: persistentMenu.website.url,
      customButtonTitle: persistentMenu.custom.title,
      customButtonText: persistentMenu.custom.text,
      getStarted: getStarted
    });
  // );
});

app.get('/test', function (req, res) {
  res.setHeader('X-Frame-Options', 'ALLOW-FROM https://www.messenger.com/');
  res.render('test', {});
});

// Facebook Messenger Receiver
app.post('/fbmsg', function (req, res) {
  let entry = req.body.entry;
  for (let i = 0; i < entry.length; i++) {
    for (let j = 0; j < entry[i].messaging.length; j++) {
      fbmsgHandler.processInputMessage(entry[i].messaging[j]);
    }
  }
  res.status(200).json({});
});

app.post('/configure', function (req, res) {
  persistentMenu.products.title = req.body.showProductButtonTitle;
  persistentMenu.website.title = req.body.websiteButtonTitle;
  persistentMenu.website.url = req.body.websiteButtonUrl;
  persistentMenu.custom.title = req.body.customButtonTitle;
  persistentMenu.custom.text = req.body.customButtonText;
  getStarted = req.body.getStarted;
  exports.getStarted = getStarted;
  console.log(getStarted);
  // fbmsgConfigure.greetingText(PAGE_ACCESS_TOKEN, greeting);
  fbmsgConfigure.persistentMenu(PAGE_ACCESS_TOKEN, 
                                persistentMenu.products.title, 
                                persistentMenu.website.title, 
                                persistentMenu.website.url, 
                                persistentMenu.custom.title, 
                                persistentMenu.custom.text);
  setTimeout(function () {
    res.redirect('/');
  }, 2000);
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