const Link = require('../models/Link');

const redirectLink = async (req, res, next) => {
	let title = req.params.title;
	try {
		let doc = await Link.findOne({ title });

		if (doc) {
			res.redirect(doc.url);
		} else {
			next();
		}
	} catch (error) {
		res.send(error);
	}
};

const addLink = async (req, res) => {
	const link = new Link(req.body);

	try {
		let doc = await link.save();
		res.redirect('/');

		alert('Link saved' + doc.title);
	} catch (error) {
		res.render('index', { error, body: req.body });
	}
};
const allLinks = async (req, res) => {
	try {
		let links = await Link.find({});
		res.render('all', { links: links });
	} catch (error) {
		res.send(error);
	}
};

const deleteLink = async (req, res) => {
	let id = req.params.id;

	if (!id) {
		id = req.body.id;
	}

	try {
		await Link.findByIdAndDelete(id);
		// res.send(id);
		res.redirect('/');
	} catch (error) {
		res.status(404).send(error);
	}
};

module.exports = { redirectLink, addLink, allLinks, deleteLink };
