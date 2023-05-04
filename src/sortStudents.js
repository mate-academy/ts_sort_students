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
    SortType["AverageGrade"] = "avarageGrade";
})(SortType = exports.SortType || (exports.SortType = {}));
var avarageGrade = function (grades) {
    return grades.reduce(function (x, y) { return x + y; }) / grades.length || 1;
};
function sortStudents(students, sortBy, order) {
    var studentCopy = __spreadArray([], students, true);
    switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
            return order === 'desc'
                ? studentCopy.sort(function (a, b) { return b[sortBy].localeCompare(a[sortBy]); })
                : studentCopy.sort(function (a, b) { return a[sortBy].localeCompare(b[sortBy]); });
        case SortType.Married:
        case SortType.Age:
            return order === 'desc'
                ? studentCopy.sort(function (a, b) { return Number(b[sortBy]) - Number(a[sortBy]); })
                : studentCopy.sort(function (a, b) { return Number(a[sortBy]) - Number(b[sortBy]); });
        default:
            break;
    }
    if (SortType.AverageGrade && order === 'desc') {
        studentCopy.sort(function (a, b) { return avarageGrade(b.grades) - avarageGrade(a.grades); });
    }
    else if (SortType.AverageGrade) {
        studentCopy.sort(function (a, b) { return avarageGrade(a.grades) - avarageGrade(b.grades); });
    }
    return studentCopy;
}
exports.sortStudents = sortStudents;
