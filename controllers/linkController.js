const Link = require('../models/Link');

const redirectLink = async (req, res) => {
	try {
		let title = req.params.title;
		let doc = await Link.findOne({ title });
		res.redirect(doc.url);
	} catch (error) {
		res.send(error);
	}
};

module.exports = { redirectLink };
