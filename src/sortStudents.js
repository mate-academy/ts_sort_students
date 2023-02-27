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
function avGrade(grades) {
    return grades
        .reduce(function (acc, cur) { return acc + cur; }, 0) / grades.length;
}
function sortStudents(students, sortBy, order) {
    return __spreadArray([], students, true).sort(function (a, b) {
        switch (sortBy) {
            case SortType.Name:
            case SortType.Surname:
                return order === 'asc'
                    ? a[sortBy].localeCompare(b[sortBy])
                    : b[sortBy].localeCompare(a[sortBy]);
            case SortType.Age:
                return order === 'asc'
                    ? a[sortBy] - b[sortBy]
                    : b[sortBy] - a[sortBy];
            case SortType.AverageGrade:
                return order === 'asc'
                    ? avGrade(a[sortBy]) - avGrade(b[sortBy])
                    : avGrade(b[sortBy]) - avGrade(a[sortBy]);
            case SortType.Married:
                return order === 'asc'
                    ? Number(a[sortBy]) - Number(b[sortBy])
                    : Number(b[sortBy]) - Number(a[sortBy]);
            default:
                throw Error('Enter a valid sort value.');
        }
    });
}
exports.sortStudents = sortStudents;
