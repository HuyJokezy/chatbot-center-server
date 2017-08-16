// Get blogs
exports.get = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN, parameters, fields) {
	var misc = require('./misc');
    var uri = BIZWEB_PAGE + '/admin/blogs.json?' + misc.makeParamFromObject(parameters, fields);
	misc.get(callback, uri, BIZWEB_ACCESS_TOKEN);
};

// Count blogs
exports.count = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN, parameters, fields) {
    var misc = require('./misc');  
    var uri = BIZWEB_PAGE + '/admin/blogs/count.json?' + misc.makeParamFromObject(parameters, fields);
    misc.get(callback, uri, BIZWEB_ACCESS_TOKEN);
};

// Get 1 blog by ID
exports.getById = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN, id, fields) {
    var misc = require('./misc');
    var uri = BIZWEB_PAGE + '/admin/blogs/' + id + '.json?' + misc.makeParamFromFields(fields);
    misc.get(callback, uri, BIZWEB_ACCESS_TOKEN);
};