<<<<<<< HEAD
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

=======
'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const restService = express();
const constant = require('./lib/constant');

const MongoClient = require('mongodb').MongoClient;
const MongoUri = 'mongodb://chatbot:chatbot123@ds157282.mlab.com:57282/heroku_7n6vvwlq';

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

// Facebook Messenger Webhook Setup
restService.get('/fbmsg', function (req, res) {
    if (req.query["hub.verify_token"] === 'iambobbeepboop') {
        res.send(req.query["hub.challenge"]);
    } else {
        res.send("Error");
    }
});

// Facebook Messenger Receiver
restService.post('/fbmsg', function (req, res) {
    var senderId = req.body.entry[0].messaging[0].sender.id;
    var pageId = req.body.entry[0].id;
    var query = {id: pageId};
    // MongoClient.connect(MongoUri, function (err, db) {
    //     var collection = db.collection("fbpage");
        

    // });
    var collection = MongoClient.connect(MongoUri).collection("fbpage");
    console.log(collection);
    res.json({});
    // Only auto reply when USING_BOT is true
    if (USING_BOT === false) {
        if (req.body.entry[0].messaging[0].message.is_echo !== undefined) {
            if (req.bodyreq.body.entry[0].messaging[0].message.text === 'CALL_BOT') {
                USING_BOT = true;
            }
        }
        res.json({});
    } else {
        console.log(req.body.entry[0].messaging);
        var async = require('async');
        var request = require('request');
        if (req.body.entry[0].messaging[0].postback !== undefined){
            console.log('hello');
            // switch (req.body.entry[0].messaging[0].postback.payload) {
            // case 'GET_STARTED_PAYLOAD':
            // }
        } else if (req.body.entry[0].messaging[0].message.quick_reply !== undefined) {
            if (req.body.entry[0].messaging[0].message.quick_reply.payload === 'CALL_CUSTOMER_SERVICE') {
                USING_BOT = false;
                request({
                    uri: 'https://graph.facebook.com/v2.6/me/messages?access_token=' + constant.getPAGE_ACCESS_TOKEN(req.body.entry[0].id),
                    method: 'POST',
                    body: {
                        "recipient": {
                            "id": req.body.entry[0].messaging[0].sender.id
                        },
                        "message": {
                            "text": "Chúng tôi sẽ chuyển bạn đến nhân viên trợ giúp",
                        }
                    },
                    json: true
                }, function (error, response, body) {
                        res.json({});
                });
            }
        } else {
            request({
                uri: "https://api.api.ai/v1/query?v=20150910",
                method: "POST",
                headers: {
                    "Authorization": "Bearer 2b40192ac2b84bc195cd1d0051895322",
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: {
                    "query": req.body.entry[0].messaging[0].message.text,
                    "sessionId": "123456789",
                    "lang": "en"
                },
                json: true   
            }, function (error, response, body) {
                request({
                    uri: "https://graph.facebook.com/v2.6/me/messages?access_token="
                });
            });
        }
    } 
});
restService.post('/bizweb/orders/fulfilled', function (req, res) {
    var request = require('request');
    var constant = require('./lib/constant');
    request(
        {
            uri: 'https://graph.facebook.com/v2.6/me/messages?access_token=' + constant.getPAGE_ACCESS_TOKEN(1789356631078933),
            method: 'POST',
            body: {
                "recipient": {
                    "id": req.body.shipping_address.address2
                },
                "message": {
                    "text": "Hóa đơn ID " + req.body.id + " đã được giao\n Cảm ơn quý khách đã mua hàng"
                }
            },
            json: true
        }, 
        function (error, response, body) {
            res.json({});
        }
    );
});
restService.post('/apiai', function (req, res) {
    var retObj = {
        speech: 'Error',
        displayText: 'Error',
        source: 'chatbot-center'
    };
    var api = require('./lib/api');
    var constant = require('./lib/constant');
    switch (req.body.result.action) {
    case 'get_phone':
        api.getPhone(function (body) {
            retObj.speech = "Số điện thoại: " + body.store.phone;
            retObj.displayText = "Số điện thoại: " + body.store.phone;
            res.json(retObj);
        }, constant.BIZWEB_PAGE, constant.BIZWEB_ACCESS_TOKEN);
        break;
    case 'get_email':
        api.getEmail(function (body) {
            retObj.speech = "Email: " + body.store.email;
            retObj.displayText = "Email: " + body.store.email;
            res.json(retObj);
        }, constant.BIZWEB_PAGE, constant.BIZWEB_ACCESS_TOKEN);
        break;
    case 'get_address':
        api.getAddress(function (body) {
            retObj.speech = "Địa chỉ: " + body.store.address + ', ' + body.store.province + ', ' + body.store.country; 
            retObj.displayText = "Địa chỉ: " + body.store.address + ', ' + body.store.province + ', ' + body.store.country;
            res.json(retObj);
        }, constant.BIZWEB_PAGE, constant.BIZWEB_ACCESS_TOKEN);
        break;
    case 'greet':
        api.getFbUser(function (body) {
            res.json({
            data: {
                'facebook': [
                {
                    'text': 'Xin chào ' + body.first_name + ' ' + body.last_name + '.\nBạn cần trợ giúp gì?',
                    'quick_replies': [
                    {
                        'content_type': 'text',
                        'title': 'Thông tin chung',
                        'payload': 'Thông tin chung'
                    },
                    {
                        'content_type': 'text',
                        'title': 'Tìm kiếm sản phẩm',
                        'payload': 'Tìm kiếm sản phẩm'
                    },
                    {
                        'content_type': 'text',
                        'title': 'Đặt hàng',
                        'payload': 'Đặt hàng'
                    },
                    {
                        'content_type': 'text',
                        'title': 'Kiểm tra đơn hàng',
                        'payload': 'Kiểm tra đơn hàng'
                    },
                    {
                        'content_type': 'text',
                        'title': 'Gặp nhân viên',
                        'payload': 'CALL_CUSTOMER_SERVICE'
                    }
                    ]
                }
                ]
            },
            source: 'chatbot-center'});
        }, req.body.originalRequest.data.sender.id, constant.getPAGE_ACCESS_TOKEN(1789356631078933));
        break; 
    case 'get_product_list':
        api.getProductList(function (body) {
            var cards = [];
            var j = [];
            for (let i = 0; i < 5; i++) {
                var x = 0;
                var num = 0;
                while (x === 0) {
                    num = Math.floor((Math.random() * (body.products.length - 1)));
                    x = 1;
                    for (let k = 0; k <= i; k++) {
                        if (num === j[k]) x = 0;
                    }
                }
                j.push(num);
                cards.push({
                    "title":body.products[num].name,
                    "image_url":body.products[num].image.src,
                    "subtitle":body.products[num].variants[0].price,
                    "default_action": {
                        "type": "web_url",
                        "url": "https://google.com"
                    },
                    "buttons":[
                    {
                        "type":"web_url",
                        "url":"https://google.com",
                        "title":"Buy now"
                    },
                    {
                        "type":"postback",
                        "title": "Order",
                        "payload": "Order Id " + body.products[num].variants[0].id + " Image " + body.products[num].image.src
                    }
                    ]      
                });
            }

            var fbMsg = {
                "attachment": {
                    "type":"template",
                    "payload": {
                        "template_type":"generic",
                        "elements": cards
                    }
                }
            };
            res.json({
                data: {
                    'facebook': [
                    {
                        'text': 'Chúng tôi có một số sản phẩm như sau'
                    },
                        fbMsg
                    ]
                },
                contextOut: [
                {
                    "name":"order_button_available",
                    "lifespan":4,
                    "parameters": {}
                }
                ],
                source: 'chatbot-center'
            });
        }, constant.BIZWEB_PAGE, constant.BIZWEB_ACCESS_TOKEN);
        break;
    case 'make_order':
        api.makeOrder(function (body) {
            var d = new Date();
            var async = require('async');
            var receipt = {
                "attachment": {
                    "type":"template",
                    "payload": {
                        "is_reusable": true,
                        "template_type":"receipt",
                        "recipient_name":body.order.shipping_address.first_name,
                        "order_number":body.order.id.toString(),
                        "currency":"VND",
                        "payment_method":req.body.result.parameters.pay_method,        
                        "timestamp":(d.getTime()/1000 - d.getTime()/1000%1).toString(), 
                        "elements": [
                        {
                            "title":body.order.line_items[0].title,
                            "subtitle":'ID: ' + body.order.line_items[0].variant_id,
                            "quantity":body.order.line_items[0].quantity,
                            "price":body.order.line_items[0].price,
                            "currency":"VND",
                            "image_url":req.body.result.parameters.url
                        }
                        ],
                        "address":{
                            "street_1":body.order.shipping_address.address1,
                            "street_2":body.order.email,
                            "city":"Cảm ơn",
                            "postal_code":"sẽ liên lạc lại sau",
                            "state":"chúng tôi",
                            "country":"VN"
                        },
                        "summary": {
                            "subtotal":body.order.subtotal_price,
                            "shipping_cost":0,
                            "total_tax":body.order.total_tax,
                            "total_cost":body.order.total_price
                        }
                    }
                }
            };
            async.series([
                function () {
                    var request = require('request');
                    var constant = require('./lib/constant');
                    request(
                        {
                            uri: 'https://graph.facebook.com/v2.6/me/messages?access_token=EAAMUNMGqcvMBABOYn7YaC3P0VgLAWfPqDKpPm1yshMLEd7Ku3U7nZB9AzmJNUAEFZBMUAiZBqc4RMF7ULrRFYCURX7d1LbYfXCZCxwUhaNbZA82b6xnOH10o1KyDcT5ZBkfI3pbyHI4SoQw91WZA8BAkIjHd9M11K1YHvi3WmjcTBvl3apK3kCn',
                            method: 'POST',
                            body: {
                                "recipient": {
                                    "id": req.body.originalRequest.data.sender.id
                                },
                                "message": receipt
            
                            },
                            json: true
                        }, 
                        function (error, response, body) {
                            console.log(body);
                        }
                    );
                },
                function () {
                    res.json({
                        data: {
                            'facebook': [
                            {
                                'text':'Đơn hàng tạm thời đã được ghi nhận',
                                'quick_replies': [
                                {
                                    'content_type': 'text',
                                    'title': 'Tiếp tục mua sắm',
                                    'payload': 'Tiếp tục mua sắm ' + body.order.id
                                },
                                {
                                    'content_type': 'text',
                                    'title': 'Gửi đơn hàng',
                                    'payload': 'Gửi đơn hàng ' + body.order.id
                                },
                                {
                                    'content_type': 'text',
                                    'title': 'Sửa đơn hàng',
                                    'payload': 'Sửa đơn hàng ' + body.order.id
                                },
                                {
                                    'content_type': 'text',
                                    'title': 'Hủy đơn hàng',
                                    'payload': 'Hủy đơn hàng ' + body.order.id
                                }
                                ]
                            }
                            ]
                        },
                        contextOut: [
                        {
                            'name':'order_on_hold',
                            'lifespan':50
                        }
                        ],
                        source: 'chatbot-center'
                    });
                }
            ]);
        }, req.body.result.parameters.id, req.body.result.parameters.quantity, req.body.result.parameters.email, req.body.result.parameters.phone,
        req.body.result.parameters.name, req.body.result.parameters.address, req.body.result.parameters.pay_method, 
        req.body.originalRequest.data.sender.id, constant.BIZWEB_PAGE, constant.BIZWEB_ACCESS_TOKEN); 
        break;
    case 'check_order':
        api.checkOrder(function (body) {
            if (body.error === "Not Found") {
                res.json({
                    speech: 'Order Number hoặc Email không hợp lệ',
                    displayText: 'Order Number hoặc Email không hợp lệ',
                    source: 'chatbot-center'
                });
                
            } else {
                if (req.body.result.parameters.email !== body.order.email) {
                    res.json({
                        speech: 'Order Number hoặc Email không hợp lệ',
                        displayText: 'Order Number hoặc Email không hợp lệ',
                        source: 'chatbot-center'
                    });
                } else {
                    var shipping_status = (body.order.fulfillment_status === null) ? 'Đang giao hàng' : 'Đã giao hàng';
                    res.json({
                        speech: 'ID: ' + req.body.result.parameters.id + '\nTình trang đơn hàng: ' + shipping_status,
                        displayText: 'ID: ' + req.body.result.parameters.id + '\nTình trang đơn hàng: ' + shipping_status,
                        source: 'chatbot-center'
                    });
                }
            }
        }, req.body.result.parameters.id, req.body.result.parameters.email, constant.BIZWEB_PAGE, constant.BIZWEB_ACCESS_TOKEN);
        break;
    case 'delete_order':
        var order = require('./bizwebAPI/order');
        order.delete(function (body) {
            res.json({
                data: {
                    'facebook': [
                    {
                        'text': 'Đơn hàng ' + req.body.result.parameters.id + ' đã hủy thành công'
                    }
                    ]
                },
                source: 'chatbot-center'
            });
        }, constant.BIZWEB_PAGE, constant.BIZWEB_ACCESS_TOKEN, req.body.result.parameters.id);
        break;
    // case 'get_promotion_product':

    }
});
    
restService.listen((process.env.PORT || 8000), function () {
    console.log("Server up and listening");
});

>>>>>>> 34e2da7c6e4056002df2a17a927a3107b5fc71d0
// Function