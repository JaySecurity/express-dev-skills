var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.getAllSkills);
router.get('/add', skillsCtrl.addSkill);
router.get('/:id', skillsCtrl.getSkill);
router.get('/:id/edit', skillsCtrl.getEditSkill);
router.put('/:id', skillsCtrl.update);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.deleteSkill);

module.exports = router;
