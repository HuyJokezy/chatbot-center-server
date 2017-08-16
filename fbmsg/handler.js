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
	} else if (messaging.referral) {
		// Referral Webhook
		let ref = messaging.referral.ref
	} else if (messaging.optin) {
		// Optin Webhook
		let ref = messaging.optin.ref
	}
}

