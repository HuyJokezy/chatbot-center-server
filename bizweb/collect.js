// Get collects
exports.get = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN, parameters, fields) {
	var misc = require('./misc');
    var uri = BIZWEB_PAGE + '/admin/collects.json?' + misc.makeParamFromObject(parameters, fields);
	misc.get(callback, uri, BIZWEB_ACCESS_TOKEN);
};

// Count collects
exports.count = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN, parameters) {
    var misc = require('./misc');  
    var uri = BIZWEB_PAGE + '/admin/collects/count.json?' + misc.makeParamFromObject(parameters);
    misc.get(callback, uri, BIZWEB_ACCESS_TOKEN);
};

// Get 1 collect by ID
exports.getById = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN, id, fields) {
    var misc = require('./misc');
    var uri = BIZWEB_PAGE + '/admin/collects/' + id + '.json?' + misc.makeParamFromFields(fields);
    misc.get(callback, uri, BIZWEB_ACCESS_TOKEN);
};