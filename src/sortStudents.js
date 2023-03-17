"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortStudents = exports.SortType = void 0;
var SortType;
(function (SortType) {
    SortType["Name"] = "name";
    SortType["Surname"] = "surname";
    SortType["Age"] = "age";
    SortType["Married"] = "married";
    SortType["AverageGrade"] = "grade";
})(SortType = exports.SortType || (exports.SortType = {}));
function average(item) {
    return item.reduce(function (a, b) { return a + b; }) / item.length;
}
function sortStudents(students, sortBy, order) {
    var direction = order === 'asc' ? 1 : -1;
    return students.sort(function (a, b) {
        switch (sortBy) {
            case 'name':
            case 'surname':
                return a[sortBy].localeCompare(b[sortBy]) * direction;
            case 'age':
            case 'married':
                return (+b.age - +a.age) * direction;
            case 'grade':
                return (average(a.grades) - average(b.grades));
            default:
                return 0;
        }
    });
}
exports.sortStudents = sortStudents;
