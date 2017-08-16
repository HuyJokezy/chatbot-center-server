// Make a GET request 
exports.get = function (callback, uri, BIZWEB_ACCESS_TOKEN) {
	var request = require('request');
    var options = {
        uri: uri,
        method: 'GET',
        headers: {
            'X-Bizweb-Access-Token': BIZWEB_ACCESS_TOKEN
        },
        json: true
    };
 	request(options, function (error, response, body) {
        callback(body);
    });
}

// Make a POST request
exports.post = function (callback, uri, obj, BIZWEB_ACCESS_TOKEN) {
	var request = require('request');
    var options = {
        uri: uri,
        method: 'POST',
        body: obj,
        headers: {
            'X-Bizweb-Access-Token': BIZWEB_ACCESS_TOKEN
        },
        json: true
    };
    request(options, function (error, response, body) {
        callback(body);
    });
}

// Make a PUT request
exports.put = function (callback, uri, obj, BIZWEB_ACCESS_TOKEN) {
  var request = require('request');
  var options = {
      uri: uri,
      method: 'PUT',
      body: obj,
      headers: {
        'X-Bizweb-Access-Token': BIZWEB_ACCESS_TOKEN
      },
      json: true
    };
  request(options, function (error, response, body) {
    callback(body);
  });
}

// Make a DELETE request
exports.delete = function (callback, uri, BIZWEB_ACCESS_TOKEN) {
    var request = require('request');
    var options = {
        uri: uri,
        method: 'DELETE',
        headers: {
            'X-Bizweb-Access-Token': BIZWEB_ACCESS_TOKEN
        },
        json: true
    };
    request(options, function (error, response, body) {
        callback(body);
    });
}

// Turn parameters object and fields array into query
exports.makeParamFromObject = function (parameters, fields) {
    var param = 'fields=';
    var querystring = require('querystring');
    if (fields) {
        for (let i = 0; i < fields.length; i++) {
            if (i > 0) {
                param += ',';
            }
            param += fields[i];
        }
        param += '&' + querystring.stringify(parameters);
    } else {
        param = querystring.stringify(parameters);
    }
    return param;
}

// Turn fields array into query
exports.makeParamFromFields = function (fields) {
    var param = 'fields=';
    if (fields) {
        for (let i = 0; i < fields.length; i++) {
            if (i > 0) {
                param += ',';
            }
            param += fields[i];
        }
    }
    return param;
}