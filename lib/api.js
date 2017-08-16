<<<<<<< HEAD
exports.getPhone = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN) {
	var store = require('../bizwebAPI/store');
	store.get(callback, BIZWEB_PAGE,BIZWEB_ACCESS_TOKEN, ['phone']);
}

exports.getEmail = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN) {
	var store = require('../bizwebAPI/store');
	store.get(callback, BIZWEB_PAGE,BIZWEB_ACCESS_TOKEN, ['email']);
}

exports.getAddress = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN) {
	var store = require('../bizwebAPI/store');
	store.get(callback, BIZWEB_PAGE,BIZWEB_ACCESS_TOKEN, ['address', 'province', 'country']);
}

exports.test = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN) {
	var product = require('../bizwebAPI/product');
	product.get(callback, BIZWEB_PAGE,BIZWEB_ACCESS_TOKEN, {}, ['name']);
}

exports.getFbUser = function (callback, id, PAGE_ACCESS_TOKEN){
	var request = require('request');
    var options = {
        uri: 'https://graph.facebook.com/v2.6/' + id + '?fields=first_name,last_name,profile_pic,locale,timezone,gender&access_token=' + PAGE_ACCESS_TOKEN,
        method: 'GET',
        json: true
    };
    request(options, function (error, response, body) {
        callback(body);
    });
}

exports.getProductList = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN) {
	var product = require('../bizwebAPI/product');
	product.get(callback, BIZWEB_PAGE,BIZWEB_ACCESS_TOKEN, {}, ['name', 'variants', 'image', 'id']);
}

exports.makeOrder = function (callback, id, quantity, email, phone, name, address, pay_method, psid, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN) {
    var financial_status = (pay_method === 'COD') ? 'pending' : 'paid';
    var order = require('../bizwebAPI/order');
    var obj = {
        'order': {
            'email':email,
            'line_items': [
            {
                'variant_id':id,
                'quantity':quantity
            }
            ],
            'financial_status':financial_status,
            'billing_address': {
                'first_name':name,
                'address1':address,
                'address2':psid,
                'phone':phone
            },
            'shipping_address': {
                'first_name':name,
                'address1':address,
                'address2':psid,
                'phone':phone
            },
            'currency':'VND',
            'source':'chatbot'
        }
    };
    order.create(callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN, obj);
};

exports.removeAccent = function (input) {
    var result = input;
    for (let i = 0; i < result.length; i++) {
        switch (result[i]) {
        case 'á':case 'à':case 'ả':case 'ã':case 'ạ':case 'Á':case 'À':case 'Ả':case 'Ã':case 'Ạ':
        case 'ă':case 'Ă':
        case 'ắ':case 'ằ':case 'ẳ':case 'ẵ':case 'ặ':case 'Ắ':case 'Ằ':case 'Ẳ':case 'Ẵ':case 'Ặ':
        case 'â':case 'Â':
        case 'ấ':case 'ầ':case 'ẩ':case 'ẫ':case 'ậ':case 'Ấ':case 'Ầ':case 'Ẩ':case 'Ẫ':case 'Ậ':
            result[i] = 'a';
            break;
        case 'é':case 'è':case 'ẻ':case 'ẽ':case 'ẹ':case 'É':case 'È':case 'Ẻ':case 'Ẽ':case 'Ẹ':
        case 'ê':case 'Ê':
        case 'ế':case 'ề':case 'ể':case 'ễ':case 'ệ':case 'Ế':case 'Ề':case 'Ể':case 'Ễ':case 'Ệ':
            result[i] = 'e';
            break;
        case 'í':case 'ì':case 'ỉ':case 'ĩ':case 'ị':case 'Í':case 'Ì':case 'Ỉ':case 'Ĩ':case 'Ị':
            result[i] = 'i';
            break;
        case 'ó':case 'ò':case 'ỏ':case 'õ':case 'ọ':case 'Ó':case 'Ò':case 'Ỏ':case 'Õ':case 'Ọ':
        case 'ô':case 'Ô':
        case 'ố':case 'ồ':case 'ổ':case 'ỗ':case 'ộ':case 'Ố':case 'Ồ':case 'Ổ':case 'Ỗ':case 'Ộ':
        case 'ơ':case 'Ơ':
        case 'ớ':case 'ờ':case 'ở':case 'ỡ':case 'ợ':case 'Ớ':case 'Ờ':case 'Ở':case 'Ỡ':case 'Ợ':
            result[i] = 'o';
            break;
        case 'ú':case 'ù':case 'ủ':case 'ũ':case 'ụ':case 'Ú':case 'Ù':case 'Ủ':case 'Ũ':case 'Ụ':
        case 'ư':case 'Ư':
        case 'ứ':case 'ừ':case 'ử':case 'ữ':case 'ự':case 'Ứ':case 'Ừ':case 'Ử':case 'Ữ':case 'Ự':
            result[i] = 'u';
            break;
        case 'ý':case 'ỳ':case 'ỷ':case 'ỹ':case 'ỵ':case 'Ý':case 'Ỳ':case 'Ỷ':case 'Ỹ':case 'Ỵ':
            result[i] = 'y';
            break;
        }
    }
    return result;
};

exports.checkOrder = function (callback, id, email, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN) {
    var order = require('../bizwebAPI/order');
    order.getById(callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN, id, ['email', 'fulfillment_status']);
};

=======
exports.getPhone = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN) {
	var store = require('../bizwebAPI/store');
	store.get(callback, BIZWEB_PAGE,BIZWEB_ACCESS_TOKEN, ['phone']);
}

exports.getEmail = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN) {
	var store = require('../bizwebAPI/store');
	store.get(callback, BIZWEB_PAGE,BIZWEB_ACCESS_TOKEN, ['email']);
}

exports.getAddress = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN) {
	var store = require('../bizwebAPI/store');
	store.get(callback, BIZWEB_PAGE,BIZWEB_ACCESS_TOKEN, ['address', 'province', 'country']);
}

exports.test = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN) {
	var product = require('../bizwebAPI/product');
	product.get(callback, BIZWEB_PAGE,BIZWEB_ACCESS_TOKEN, {}, ['name']);
}

exports.getFbUser = function (callback, id, PAGE_ACCESS_TOKEN){
	var request = require('request');
    var options = {
        uri: 'https://graph.facebook.com/v2.6/' + id + '?fields=first_name,last_name,profile_pic,locale,timezone,gender&access_token=' + PAGE_ACCESS_TOKEN,
        method: 'GET',
        json: true
    };
    request(options, function (error, response, body) {
        callback(body);
    });
}

exports.getProductList = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN) {
	var product = require('../bizwebAPI/product');
	product.get(callback, BIZWEB_PAGE,BIZWEB_ACCESS_TOKEN, {}, ['name', 'variants', 'image', 'id']);
}

exports.makeOrder = function (callback, id, quantity, email, phone, name, address, pay_method, psid, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN) {
    var financial_status = (pay_method === 'COD') ? 'pending' : 'paid';
    var order = require('../bizwebAPI/order');
    var obj = {
        'order': {
            'email':email,
            'line_items': [
            {
                'variant_id':id,
                'quantity':quantity
            }
            ],
            'financial_status':financial_status,
            'billing_address': {
                'first_name':name,
                'address1':address,
                'address2':psid,
                'phone':phone
            },
            'shipping_address': {
                'first_name':name,
                'address1':address,
                'address2':psid,
                'phone':phone
            },
            'currency':'VND',
            'source':'chatbot'
        }
    };
    order.create(callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN, obj);
};

exports.removeAccent = function (input) {
    var result = input;
    for (let i = 0; i < result.length; i++) {
        switch (result[i]) {
        case 'á':case 'à':case 'ả':case 'ã':case 'ạ':case 'Á':case 'À':case 'Ả':case 'Ã':case 'Ạ':
        case 'ă':case 'Ă':
        case 'ắ':case 'ằ':case 'ẳ':case 'ẵ':case 'ặ':case 'Ắ':case 'Ằ':case 'Ẳ':case 'Ẵ':case 'Ặ':
        case 'â':case 'Â':
        case 'ấ':case 'ầ':case 'ẩ':case 'ẫ':case 'ậ':case 'Ấ':case 'Ầ':case 'Ẩ':case 'Ẫ':case 'Ậ':
            result[i] = 'a';
            break;
        case 'é':case 'è':case 'ẻ':case 'ẽ':case 'ẹ':case 'É':case 'È':case 'Ẻ':case 'Ẽ':case 'Ẹ':
        case 'ê':case 'Ê':
        case 'ế':case 'ề':case 'ể':case 'ễ':case 'ệ':case 'Ế':case 'Ề':case 'Ể':case 'Ễ':case 'Ệ':
            result[i] = 'e';
            break;
        case 'í':case 'ì':case 'ỉ':case 'ĩ':case 'ị':case 'Í':case 'Ì':case 'Ỉ':case 'Ĩ':case 'Ị':
            result[i] = 'i';
            break;
        case 'ó':case 'ò':case 'ỏ':case 'õ':case 'ọ':case 'Ó':case 'Ò':case 'Ỏ':case 'Õ':case 'Ọ':
        case 'ô':case 'Ô':
        case 'ố':case 'ồ':case 'ổ':case 'ỗ':case 'ộ':case 'Ố':case 'Ồ':case 'Ổ':case 'Ỗ':case 'Ộ':
        case 'ơ':case 'Ơ':
        case 'ớ':case 'ờ':case 'ở':case 'ỡ':case 'ợ':case 'Ớ':case 'Ờ':case 'Ở':case 'Ỡ':case 'Ợ':
            result[i] = 'o';
            break;
        case 'ú':case 'ù':case 'ủ':case 'ũ':case 'ụ':case 'Ú':case 'Ù':case 'Ủ':case 'Ũ':case 'Ụ':
        case 'ư':case 'Ư':
        case 'ứ':case 'ừ':case 'ử':case 'ữ':case 'ự':case 'Ứ':case 'Ừ':case 'Ử':case 'Ữ':case 'Ự':
            result[i] = 'u';
            break;
        case 'ý':case 'ỳ':case 'ỷ':case 'ỹ':case 'ỵ':case 'Ý':case 'Ỳ':case 'Ỷ':case 'Ỹ':case 'Ỵ':
            result[i] = 'y';
            break;
        }
    }
    return result;
};

exports.checkOrder = function (callback, id, email, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN) {
    var order = require('../bizwebAPI/order');
    order.getById(callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN, id, ['email', 'fulfillment_status']);
};

>>>>>>> 34e2da7c6e4056002df2a17a927a3107b5fc71d0
