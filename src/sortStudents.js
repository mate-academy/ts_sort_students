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
function sortStudents(students, sortBy, order) {
    var copyOfStudents = __spreadArray([], students, true);
    switch (sortBy) {
        case 'name':
        case 'surname':
            copyOfStudents.sort(function (a, b) {
                var key1 = a[sortBy].toUpperCase();
                var key2 = b[sortBy].toUpperCase();
                if (key1 < key2) {
                    return -1;
                }
                if (key1 > key2) {
                    return 1;
                }
                return 0;
            });
            break;
        case 'married':
        case 'age':
            copyOfStudents.sort(function (a, b) { return (+a.married - +b.married); });
            break;
        case 'grades':
            copyOfStudents.sort(function (a, b) {
                var avg1 = a.grades.reduce(function (acc, prev) { return acc + prev; })
                    / a.grades.length;
                var avg2 = b.grades.reduce(function (acc, prev) { return acc + prev; })
                    / b.grades.length;
                return avg1 - avg2;
            });
            break;
        default:
            break;
    }
    if (order === 'desc') {
        copyOfStudents.reverse();
    }
    return copyOfStudents;
}
exports.sortStudents = sortStudents;
