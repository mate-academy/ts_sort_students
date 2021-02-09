'use strict';
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.sortStudents = exports.SortField = void 0;
var SortField;
(function (SortField) {
    SortField["Name"] = "name";
    SortField["Surname"] = "surname";
    SortField["Age"] = "age";
    SortField["Married"] = "married";
    SortField["AverageGrade"] = "grades";
})(SortField = exports.SortField || (exports.SortField = {}));
function sortStudents(studentsList, sortBy, order) {
    var studentsCopy = __spreadArrays(studentsList);
    var sortOrder = (order === 'asc') ? [1, -1] : [-1, 1];
    if (sortBy === 'name' || sortBy === 'surname') {
        studentsCopy.sort(function (prev, next) { return (prev[sortBy].toLowerCase() > next[sortBy].toLowerCase()) ? sortOrder[0] : sortOrder[1]; });
    }
    if (sortBy === 'age') {
        studentsCopy.sort(function (prev, next) { return (prev.age > next.age) ? sortOrder[0] : sortOrder[1]; });
    }
    if (sortBy === 'married') {
        studentsCopy.sort(function (prev, next) { return (Number(next.married) - Number(prev.married)); });
    }
    if (sortBy === 'grades') {
        studentsCopy.sort(function (prev, next) {
            var prevAverage = prev.grades.reduce(function (sum, x) { return sum + x; }, 0) / prev.grades.length;
            var nextAverage = next.grades.reduce(function (sum, x) { return sum + x; }, 0) / next.grades.length;
            return (prevAverage - nextAverage) * sortOrder[0];
        });
    }
    return studentsCopy;
}
exports.sortStudents = sortStudents;
