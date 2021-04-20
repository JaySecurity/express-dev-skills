const Skill = require('../models/skill');

function getAllSkills(req, res) {
  res.render('skills/index', { skills: Skill.getAll() });
}

function getSkill(req, res) {
  res.render('skills/skill', { skill: Skill.getOne(req.params.id) });
}

module.exports = { getAllSkills, getSkill };
