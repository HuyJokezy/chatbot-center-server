
exports.makeTextMessage = function (userId, text) {
	return {
		"recipient": {
			"id": userId
		},
		"message": {
			"text": text
		}
	};
}

exports.makeAudioAttachment = function (userId, url) {
	return {
		"recipient": {
			"id": userId
		},
		"message": {
			"attachment": {
				"type": "audio",
				"payload": {
					"url": url
				}
			}
		}
	}
}

exports.makeFileAttachment = function (userId, url) {
	return {
		"recipient": {
			"id": userId
		},
		"message": {
			"attachment": {
				"type": "file",
				"payload": {
					"url": url
				}
			}
		}
	}
}

exports.makeImageAttachment = function (userId, url) {
	return {
		"recipient": {
			"id": userId
		},
		"message": {
			"attachment": {
				"type": "image",
				"payload": {
					"url": url
				}
			}
		}
	}
}

exports.makeVideoAttachment = function (userId, url) {
	return {
		"recipient": {
			"id": userId
		},
		"message": {
			"attachment": {
				"type": "video",
				"payload": {
					"url": url
				}
			}
		}
	}
}

exports.makeQuickReplies = function (userId, options, quickReplies) {
	if (options.text) {
		return {
			recipient
		}
	}
	if (options.attachment) {

	}
}