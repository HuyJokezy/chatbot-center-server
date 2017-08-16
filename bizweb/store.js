// Get store info
exports.get = function (callback, BIZWEB_PAGE, BIZWEB_ACCESS_TOKEN, fields) {
	var misc = require('./misc');
    var uri = BIZWEB_PAGE + '/admin/store.json?' + misc.makeParamFromFields(fields);
    misc.get(callback, uri, BIZWEB_ACCESS_TOKEN);
};