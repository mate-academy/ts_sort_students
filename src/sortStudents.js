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
exports.SortType = void 0;
exports.sortStudents = sortStudents;
var SortType;
(function (SortType) {
    SortType["Name"] = "Name";
    SortType["Surname"] = "Surname";
    SortType["Age"] = "Age";
    SortType["Married"] = "Married";
    SortType["AverageGrade"] = "AverageGrade";
})(SortType || (exports.SortType = SortType = {}));
function sortStudents(students, sortBy, order) {
    function calculateAverageGrade(grades) {
        var sumOfGrades = grades.reduce(function (acc, grade) {
            return acc + grade;
        }, 0);
        return sumOfGrades / grades.length;
    }
    var sortedStudents = __spreadArray([], students, true);
    sortedStudents.sort(function (a, b) {
        var comparison = 0;
        switch (sortBy) {
            case SortType.Name:
                comparison = a.name.localeCompare(b.name);
                break;
            case SortType.Surname:
                comparison = a.surname.localeCompare(b.surname);
                break;
            case SortType.Age:
                comparison = a.age - b.age;
                break;
            case SortType.Married:
                comparison = Number(a.married) - Number(b.married);
                break;
            case SortType.AverageGrade:
                comparison = calculateAverageGrade(a.grades) - calculateAverageGrade(b.grades);
                break;
            default:
                comparison = 0;
        }
        return comparison;
    });
    return sortedStudents;
}
