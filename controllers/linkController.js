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

const addLink = async (req, res) => {
	const link = new Link(req.body);

	try {
		let doc = await link.save();
		res.send(doc);
	} catch (error) {
		res.render('index', { error });
	}
};

module.exports = { redirectLink, addLink };
