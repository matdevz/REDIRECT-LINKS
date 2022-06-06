const express = require('express');
const router = express.Router();
const linkController = require('../controllers/linkController');
const methodOverride = require('method-override');

router.use(methodOverride('_method'));

router.get('/', linkController.allLinks);

router.get('/:title', linkController.redirectLink);

router.get('/add', (req, res) => {
	res.render('index', { error: false, body: {} });
});

router.post(
	'/',
	express.urlencoded({ extended: true }),
	linkController.addLink
);

router.delete(
	'/',
	express.urlencoded({ extended: true }),
	linkController.deleteLink
);

router.delete('/:id', linkController.deleteLink);

module.exports = router;
