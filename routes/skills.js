var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.getAllSkills);

router.get('/:id', skillsCtrl.getSkill);

module.exports = router;
