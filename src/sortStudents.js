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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortStudents = exports.SortType = void 0;
var SortType;
(function (SortType) {
    SortType["Name"] = "name";
    SortType["Surname"] = "surname";
    SortType["Age"] = "age";
    SortType["Married"] = "married";
    SortType["AverageGrade"] = "averageGrade";
})(SortType || (exports.SortType = SortType = {}));
function sumAndAverage(grades) {
    var sum = (grades).reduce(function (elem, value) { return elem + value; });
    var average = sum / grades.length;
    return average;
}
function sortStudents(students, sortBy, order) {
    var studentsSorted = [];
    switch (sortBy) {
        case SortType.Name:
            studentsSorted = __spreadArray([], students, true).sort(function (a, b) {
                if (order === 'asc') {
                    return a.name.localeCompare(b.name);
                }
                return b.name.localeCompare(a.name);
            });
            break;
        case SortType.Surname:
            studentsSorted = __spreadArray([], students, true).sort(function (a, b) {
                if (order === 'asc') {
                    return a.surname.localeCompare(b.surname);
                }
                return b.surname.localeCompare(a.surname);
            });
            break;
        case SortType.Married:
            studentsSorted = __spreadArray([], students, true).sort(function (a, b) {
                if (order === 'asc') {
                    return Number(a.married) - Number(b.married);
                }
                return Number(b.married) - Number(a.married);
            });
            break;
        case SortType.Age:
            studentsSorted = __spreadArray([], students, true).sort(function (a, b) {
                if (order === 'asc') {
                    return a.age - b.age;
                }
                return b.age - a.age;
            });
            break;
        case SortType.AverageGrade:
            if (order === 'asc') {
                studentsSorted = __spreadArray([], students, true).sort(function (a, b) {
                    return sumAndAverage(a.grades) - sumAndAverage(b.grades);
                });
            }
            else {
                studentsSorted = __spreadArray([], students, true).sort(function (a, b) {
                    return sumAndAverage(b.grades) - sumAndAverage(a.grades);
                });
            }
            break;
        default:
            break;
    }
    return studentsSorted;
}
exports.sortStudents = sortStudents;
