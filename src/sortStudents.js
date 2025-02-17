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
    // describe SortType enum
    SortType["Name"] = "Name";
    SortType["Surname"] = "Surname";
    SortType["Age"] = "Age";
    SortType["Married"] = "Married";
    SortType["AverageGrade"] = "AverageGrade";
})(SortType || (exports.SortType = SortType = {}));
function sortStudents(students, sortBy, order) {
    // write your function
    var sortArrayOfStudents = __spreadArray([], students, true);
    if (sortBy === SortType.Name || sortBy === SortType.Surname) {
        if (order === 'asc') {
            sortArrayOfStudents.sort(function (a, b) { return a.name.localeCompare(b.name)
                || a.surname.localeCompare(b.surname); });
        }
        else {
            sortArrayOfStudents.sort(function (a, b) { return b.name.localeCompare(a.name)
                || b.surname.localeCompare(a.surname); });
        }
    }
    if (sortBy === SortType.Surname) {
        if (order === 'asc') {
            sortArrayOfStudents.sort(function (a, b) { return a.surname.localeCompare(b.surname); });
        }
        else {
            sortArrayOfStudents.sort(function (a, b) { return b.surname.localeCompare(a.surname); });
        }
    }
    if (sortBy === SortType.Age) {
        if (order === 'asc') {
            sortArrayOfStudents.sort(function (a, b) { return a.age - b.age; });
        }
        else {
            sortArrayOfStudents.sort(function (a, b) { return b.age - a.age; });
        }
    }
    if (sortBy === SortType.Married) {
        sortArrayOfStudents.sort(function (a, b) {
            if (a.married === b.married) {
                return 0;
            }
            if (order === 'asc') {
                return a.married ? 1 : -1;
            }
            return a.married ? -1 : 1;
        });
    }
    function gradesSort(gradesArray) {
        var averageGrade = (gradesArray.reduce(function (sum, n) { return sum + n; }, 0)) / gradesArray.length;
        return averageGrade;
    }
    if (sortBy === SortType.AverageGrade) {
        if (order === 'asc') {
            sortArrayOfStudents.sort(function (a, b) { return gradesSort(a.grades) - gradesSort(b.grades); });
        }
        else {
            sortArrayOfStudents.sort(function (a, b) { return gradesSort(b.grades) - gradesSort(a.grades); });
        }
    }
    return sortArrayOfStudents;
}
