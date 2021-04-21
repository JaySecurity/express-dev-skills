const Skill = require('../models/skill');

function getAllSkills(req, res) {
  res.render('skills/index', { skills: Skill.getAll() });
}

function getSkill(req, res) {
  res.render('skills/skill', { skill: Skill.getOne(req.params.id) });
}

function addSkill(req, res) {
  res.render('skills/addSkill');
}

function create(req, res) {
  const newSkill = {
    id: Skill.getAll().length,
    name: req.body.name,
    level: req.body.level,
  };
  Skill.addSkill(newSkill);
  res.redirect('/skills');
}

module.exports = { getAllSkills, getSkill, addSkill, create };
