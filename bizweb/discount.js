// Get discounts
exports.get = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN, parameters) {
	var misc = require('./misc');
    var uri = BIZWEB_PAGE + '/admin/discounts.json?' + misc.makeParamFromObject(parameters);
	misc.get(callback, uri, BIZWEB_ACCESS_TOKEN);
};

// Get 1 discount by ID
exports.getById = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN, id) {
    var misc = require('./misc');
    var uri = BIZWEB_PAGE + '/admin/discounts/' + id + '.json';
    misc.get(callback, uri, BIZWEB_ACCESS_TOKEN);
};