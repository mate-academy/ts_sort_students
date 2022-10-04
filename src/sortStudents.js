"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.sortStudents = exports.SortType = void 0;
var SortType;
(function (SortType) {
    SortType["Name"] = "name";
    SortType["Surname"] = "surname";
    SortType["Age"] = "age";
    SortType["Married"] = "married";
    SortType["AverageGrade"] = "grades";
})(SortType = exports.SortType || (exports.SortType = {}));
function getAverageGrades(grades) {
    return grades.reduce(function (acc, prev) { return acc + prev; }) / grades.length;
}
function sortStudents(students, sortBy, order) {
    var sortedStudents = __spreadArray([], students, true);
    switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
            return sortedStudents.sort(function (firstStud, secondStud) {
                if (order === 'asc') {
                    return firstStud[sortBy].localeCompare(secondStud[sortBy]);
                }
                return secondStud[sortBy].localeCompare(firstStud[sortBy]);
            });
        case SortType.Age:
        case SortType.Married:
            return sortedStudents.sort(function (firstStud, secondStud) {
                if (order === 'asc') {
                    return Number(firstStud[sortBy]) - Number(secondStud[sortBy]);
                }
                return Number(secondStud[sortBy]) - Number(firstStud[sortBy]);
            });
        case SortType.AverageGrade:
            return sortedStudents.sort(function (firstStud, secondStud) {
                var firstStudGrades = getAverageGrades(firstStud[sortBy]);
                var secondStudGrades = getAverageGrades(secondStud[sortBy]);
                if (order === 'asc') {
                    return firstStudGrades - secondStudGrades;
                }
                return secondStudGrades - firstStudGrades;
            });
        default:
            return sortedStudents;
    }
}
exports.sortStudents = sortStudents;
