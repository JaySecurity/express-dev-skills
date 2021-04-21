const Skill = require('../models/skill');
const { v4: uuidv4 } = require('uuid');

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
    id: uuidv4(),
    name: req.body.name,
    level: req.body.level,
  };
  Skill.addSkill(newSkill);
  res.redirect('/skills');
}

function getEditSkill(req, res) {
  res.render('skills/editSkill', { skill: Skill.getOne(req.params.id) });
}

function update(req, res) {
  const updatedSkill = {
    id: req.params.id,
    name: req.body.name,
    level: req.body.level,
  };
  Skill.update(updatedSkill);
  res.redirect(`/skills/${req.params.id}`);
}

function deleteSkill(req, res) {
  Skill.deleteSkill(req.params.id);
  res.redirect('/skills');
}

module.exports = {
  getAllSkills,
  getSkill,
  addSkill,
  create,
  getEditSkill,
  update,
  deleteSkill,
};
