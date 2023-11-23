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
    SortType[SortType["Name"] = 0] = "Name";
    SortType[SortType["Surname"] = 1] = "Surname";
    SortType[SortType["Age"] = 2] = "Age";
    SortType[SortType["Married"] = 3] = "Married";
    SortType[SortType["AverageGrade"] = 4] = "AverageGrade";
})(SortType || (exports.SortType = SortType = {}));
function sortStudents(students, sortBy, order) {
    var sortedStudents = __spreadArray([], students, true);
    switch (sortBy) {
        case SortType.Name:
            sortedStudents
                .sort(function (a, b) {
                if (order === 'asc') {
                    return a.name.localeCompare(b.name);
                }
                return b.name.localeCompare(a.name);
            });
            break;
        case SortType.Surname:
            sortedStudents
                .sort(function (a, b) {
                if (order === 'asc') {
                    return a.surname.localeCompare(b.surname);
                }
                return b.surname.localeCompare(a.surname);
            });
            break;
        case SortType.Age:
            sortedStudents
                .sort(function (a, b) {
                if (order === 'asc') {
                    return a.age - b.age;
                }
                return b.age - a.age;
            });
            break;
        case SortType.Married:
            sortedStudents
                .sort(function (a, b) {
                if (order === 'asc') {
                    if (a.married < b.married) {
                        return -1;
                    }
                    if (a.married > b.married) {
                        return 1;
                    }
                    return 0;
                }
                if (a.married > b.married) {
                    return -1;
                }
                if (a.married < b.married) {
                    return 1;
                }
                return 0;
            });
            break;
        case SortType.AverageGrade:
            sortedStudents.sort(function (a, b) {
                var avgA = a.grades
                    .reduce(function (sum, grade) { return sum + grade; }, 0) / a.grades.length;
                var avgB = b.grades
                    .reduce(function (sum, grade) { return sum + grade; }, 0) / b.grades.length;
                return order === 'asc' ? avgA - avgB : avgB - avgA;
            });
            break;
        default:
            return sortedStudents;
    }
    return sortedStudents;
}
exports.sortStudents = sortStudents;
