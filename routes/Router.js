const express = require('express');
const router = express.Router();
const linkController = require('../controllers/linkController');

router.get('/', (req, res) => {
	res.render('index', { error: false });
});
router.get('/:title', linkController.redirectLink);

router.post(
	'/',
	express.urlencoded({ extended: true }),
	linkController.addLink
);

module.exports = router;
