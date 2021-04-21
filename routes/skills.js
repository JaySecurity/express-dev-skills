var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.getAllSkills);
router.get('/add', skillsCtrl.addSkill);
router.get('/:id', skillsCtrl.getSkill);
router.post('/', skillsCtrl.create);

module.exports = router;
