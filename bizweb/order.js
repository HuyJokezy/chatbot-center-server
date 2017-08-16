// Get orders
exports.get = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN, parameters, fields) {
	var misc = require('./misc');
    var uri = BIZWEB_PAGE + '/admin/orders.json?' + misc.makeParamFromObject(parameters, fields);
	misc.get(callback, uri, BIZWEB_ACCESS_TOKEN);
};

// Count orders
exports.count = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN, parameters) {
    var misc = require('./misc');  
    var uri = BIZWEB_PAGE + '/admin/orders/count.json?' + misc.makeParamFromObject(parameters);
    misc.get(callback, uri, BIZWEB_ACCESS_TOKEN);
};

// Get 1 order by ID
exports.getById = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN, id, fields) {
    var misc = require('./misc');
    var uri = BIZWEB_PAGE + '/admin/orders/' + id + '.json?' + misc.makeParamFromFields(fields);
    misc.get(callback, uri, BIZWEB_ACCESS_TOKEN);
};

// Close 1 order
exports.close = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN, id) {
    var misc = require('./misc');
    var uri = BIZWEB_PAGE + '/admin/orders/' + id + '/close.json';
    misc.post(callback, uri, {}, BIZWEB_ACCESS_TOKEN);
};

// Open 1 order
exports.open = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN, id) {
    var misc = require('./misc');
    var uri = BIZWEB_PAGE + '/admin/orders/' + id + '/open.json';
    misc.post(callback, uri, {}, BIZWEB_ACCESS_TOKEN);
};

// Cancel 1 order
exports.cancel = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN, id, parameters) {
    var misc = require('./misc');
    var uri = BIZWEB_PAGE + '/admin/orders/' + id + '/cancel.json?' + makeParamFromObject(parameters);
    misc.post(callback, uri, {}, BIZWEB_ACCESS_TOKEN);
};

// Create 1 order
exports.create = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN, obj) {
    var misc = require('./misc');
    var uri = BIZWEB_PAGE + '/admin/orders.json';
    misc.post(callback, uri, obj, BIZWEB_ACCESS_TOKEN);
};

// Edit 1 order
exports.edit = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN, id, obj) {
    var misc = require('./misc');
    var uri = BIZWEB_PAGE + '/admin/orders/' + id + '.json';
    misc.put(callback, uri, obj, BIZWEB_ACCESS_TOKEN);
};

// Delete 1 order
exports.delete = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN, id) {
    var misc = require('./misc');
    var uri = BIZWEB_PAGE + '/admin/orders/' + id + '.json';
    misc.delete(callback, uri, BIZWEB_ACCESS_TOKEN);
};