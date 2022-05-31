const router = require('express').Router();
const linkController = require('../controllers/linkController');
router.get('/', (req, res) => {
	res.send('Hello api for mongoose!');
});

router.get('/:title', linkController.redirectLink);

module.exports = router;
