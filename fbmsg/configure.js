// Modules
const request = require('request');

/** 
 * Set up Facebook Get Started Button
 * @param {string} PAGE_ACCESS_TOKEN 
 *  - Page Access Token corresponding to a Facebook Page
 * @param {string} payload 
 *  - Payload to send in Postback Webhook
 */
exports.getStartedButton = function	(PAGE_ACCESS_TOKEN, payload) {
	let options = {
		method: 'POST',
		uri: "https://graph.facebook.com/v2.6/me/messenger_profile?access_token=" + PAGE_ACCESS_TOKEN,
		json: true,
		body: {
			"get_started": {
				"payload": payload
			}
		}
	};
	request(options, function (error, response, body) {
		if (error) {
			console.log('Error: Cannot set Get Started button');
			console.log(error);
		} else {
			console.log('Success: Set Get Started button');
		}
	});
}

/**
 * Set up Greeting Text (Auto replied text when Get Started button is triggered)
 * @param {string} PAGE_ACCESS_TOKEN 
 *   - Page Access Token corresponding to a Facebook Page
 * @param {Object[]} greeting 
 *  - Greeting object
 * @param {string} [greeting[].locale=default] 
 *  - Locale code as in https://developers.facebook.com/docs/messenger-platform/messenger-profile/supported-locales
 * @param {string} greeting[].text 
 *  - Text to send to user
 */
exports.greetingText = function (PAGE_ACCESS_TOKEN, greeting) {
	for (let i = 0; i < greeting.length; i++) {
		if (!greeting[i].locale) {
			greeting[i].locale = 'default';
		}
	}
	let options = {
		method: 'POST',
		uri: "https://graph.facebook.com/v2.6/me/messenger_profile?access_token=" + PAGE_ACCESS_TOKEN,
		json: true,
		body: {
			"greeting": greeting
		}
	};
	request(options, function (error, response, body) {
		if (error) {
			console.log('Error: Cannot set Greeting Text');
			console.log(error);
		} else {
			console.log('Success: Set Greeting Text');
		}
	});
}

/**
 * 
 */
exports.persistentMenu = function (PAGE_ACCESS_TOKEN, showProductButtonTitle, websiteButtonTitle, websiteButtonUrl, customButtonTitle) {
	let options = {
		method: 'POST',
		uri: "https://graph.facebook.com/v2.6/me/messenger_profile?access_token=" + PAGE_ACCESS_TOKEN,
		json: true,
		body: {
			"persistent_menu": [
				{
					"locale": "default",
					"composer_input_disabled": false,
					"call_to_actions": [
						{
							"title": showProductButtonTitle,
							"type": "postback",
							"payload": "SHOW_PRODUCT"
						},
						{
							"title": websiteButtonTitle,
							"type": "web_url",
							"url": websiteButtonUrl
							// "webview_height_ratio": "compact"
						},
						{
							"title": customButtonTitle,
							"type": "postback",
							"payload": "CUSTOM_TEXT"
						}
					]
				}
			]
		}
	};
	request(options, function (error, response, body) {
		if (error) {
			console.log('Error: Cannot set Persistent Menu');
			console.log(error);
		} else {
			console.log('Success: Set Persistent Menu');
		}
	});
}

/**
 * White list domain for Checkbox Plugin and Messenger Extensions
 * @param {string} PAGE_ACCESS_TOKEN 
 *   - Page Access Token corresponding to a Facebook Page
 * @param {string[]} whitelisted_domains
 *  - Domain must be https
 */
exports.domainWhitelisting = function (PAGE_ACCESS_TOKEN, whitelisted_domains) {
	let options = {
		method: 'POST',
		uri: "https://graph.facebook.com/v2.6/me/messenger_profile?access_token=" + PAGE_ACCESS_TOKEN,
		json: true,
		body: {
			"whitelisted_domains": whitelisted_domains
		}
	};
	request(options, function (error, response, body) {
		if (error) {
			console.log('Error: Cannot set Domain Whitelist');
			console.log(error);
		} else {
			console.log('Success: Set Domain Whitelist');
		}
	});
}

