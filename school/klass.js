var student = require("./student.js");
var teacher = require("./teacher.js");

function add (teacherName,students) {
    teacher.add(teacherName);
    student.add(students);
}

exports.add = add;