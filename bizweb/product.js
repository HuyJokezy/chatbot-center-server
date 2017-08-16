// Get products
exports.get = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN, parameters, fields) {
	var misc = require('./misc');
    var uri = BIZWEB_PAGE + '/admin/products.json?' + misc.makeParamFromObject(parameters, fields);
	misc.get(callback, uri, BIZWEB_ACCESS_TOKEN);
};

// Count products
exports.count = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN, parameters) {
    var misc = require('./misc');  
    var uri = BIZWEB_PAGE + '/admin/products/count.json?' + misc.makeParamFromObject(parameters);
    misc.get(callback, uri, BIZWEB_ACCESS_TOKEN);
};

// Get 1 product by ID
exports.getById = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN, id, fields) {
    var misc = require('./misc');
    var uri = BIZWEB_PAGE + '/admin/products/' + id + '.json?' + misc.makeParamFromFields(fields);
    misc.get(callback, uri, BIZWEB_ACCESS_TOKEN);
};

// Get images of 1 product
// exports.getImageBy