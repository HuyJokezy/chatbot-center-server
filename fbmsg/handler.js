const request = require('request');
const makeMessage = require('./makeMessage');
let persistentMenu = require('../index').persistentMenu;
let PAGE_ACCESS_TOKEN = require('../index').PAGE_ACCESS_TOKEN;
let getStarted = require('../index').getStarted;

exports.processInputMessage = function (messaging) {
	const userId = messaging.sender.id;
	const pageId = messaging.recipient.id;
	const timestamp = messaging.timestamp;
	if (messaging.message) {
		// Message Webhook
		let text, attachments, payload;
		if (messaging.message.text) {
			text = messaging.message.text;
		}
		if (messaging.message.attachments) {
			attachments = messaging.message.attachments;
		}
		if (messaging.message[quick_reply]) {
			payload = messaging.message[quick_reply].payload;
		}
	} else if (messaging.postback) {
		// Postback Webhook
		let payload = messaging.postback.payload
		switch (payload) {
			case 'GET_STARTED_PAYLOAD':
				sendMessage(makeMessage.makeTextMessage(userId, getStarted));
				break;
			case 'CUSTOM_TEXT':
				sendMessage(makeMessage.makeTextMessage(userId, persistentMenu.custom.text));
				break;
			case 'SHOW_PRODUCT':
				sendMessage(makeMessage.makeTextMessage(userId, 'Some Products Here'));
				break;
			default:
		}
	} else if (messaging.referral) {
		// Referral Webhook
		let ref = messaging.referral.ref
	} else if (messaging.optin) {
		// Optin Webhook
		let ref = messaging.optin.ref
	}
}

function sendMessage (message) {
	console.log(message);
	let options = {
		method: 'POST',
		uri: "https://graph.facebook.com/v2.6/me/?access_token=" + PAGE_ACCESS_TOKEN,
		json: true,
		body: message
	};
	request(options, function (error, response, body) {
		if (error) {
			console.log('Error: Cannot send message');
			console.log(error);
		} else {
			console.log('Success: Sent a message');
			console.log(body);
		}
	});
}
