"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
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
function sortStudents(students, sortBy, order) {
    var sortedStudents = __spreadArray([], students);
    function calculateAvarageGrade(numbers) {
        return numbers.reduce(function (sum, grade) { return sum + grade; }, 0) / numbers.length;
    }
    switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
            return sortedStudents.sort(function (a, b) {
                return order === 'asc'
                    ? a[sortBy].localeCompare(b[sortBy])
                    : b[sortBy].localeCompare(a[sortBy]);
            });
        case SortType.Age:
            return sortedStudents.sort(function (a, b) {
                return order === 'asc'
                    ? a[sortBy] - b[sortBy]
                    : b[sortBy] - a[sortBy];
            });
        case SortType.Married:
            return sortedStudents.sort(function (a, b) { return (order === 'asc'
                ? Number(a[sortBy]) - Number(b[sortBy])
                : Number(b[sortBy]) - Number(a[sortBy])); });
        case SortType.AverageGrade:
            return sortedStudents.sort(function (a, b) {
                return order === 'asc'
                    ? calculateAvarageGrade(a[sortBy]) - calculateAvarageGrade(b[sortBy])
                    : calculateAvarageGrade(b[sortBy]) - calculateAvarageGrade(a[sortBy]);
            });
        default:
            return sortedStudents;
    }
}
exports.sortStudents = sortStudents;
