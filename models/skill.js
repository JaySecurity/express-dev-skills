const skills = [
  {id: 0, name: "HTML", level: "Intermediate"},
  {id: 1, name: "CSS", level: "Intermediate"},
  {id: 2, name: "Javascript", level: "Intermediate"},
  {id: 3, name: "Python", level: "Novice"},
  {id: 4, name: "React", level: "Beginner"},

]

function getAll(){
  return skills
}

function getOne(id){
  return skills[id]
}

module.exports = {
  getAll,
  getOne,
}