'use strict';
exports.__esModule = true;
exports.sortStudents = void 0;
function sortStudents(students, sortBy, order) {
    if (students || sortBy || order) {
        var st = students.map(function (student) { return student.name; });
        console.log(st);
    }
}
exports.sortStudents = sortStudents;
