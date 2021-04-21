const skills = [
  { id: '0', name: 'HTML', level: 'Intermediate' },
  { id: '1', name: 'CSS', level: 'Intermediate' },
  { id: '2', name: 'Javascript', level: 'Intermediate' },
  { id: '3', name: 'Python', level: 'Novice' },
  { id: '4', name: 'React', level: 'Beginner' },
];

function getAll() {
  return skills;
}

function getOne(id) {
  const idx = skills.findIndex((skill) => skill.id === id);
  return skills[idx];
}

function addSkill(skill) {
  skills.push(skill);
}

function update(skill) {
  const idx = skills.findIndex((s) => s.id === skill.id);
  skills[idx].name = skill.name;
  skills[idx].level = skill.level;
}

function deleteSkill(id) {
  const idx = skills.findIndex((s) => s.id === id);
  skills.splice(idx, 1);
}

module.exports = {
  getAll,
  getOne,
  addSkill,
  update,
  deleteSkill,
};
