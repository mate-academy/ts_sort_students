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
    // describe SortType enum
    SortType[SortType["Name"] = 0] = "Name";
    SortType[SortType["Surname"] = 1] = "Surname";
    SortType[SortType["Age"] = 2] = "Age";
    SortType[SortType["Married"] = 3] = "Married";
    SortType[SortType["AverageGrade"] = 4] = "AverageGrade";
})(SortType = exports.SortType || (exports.SortType = {}));
function sortStudents(students, sortBy, order) {
    // write your function
    if (order === 'asc') {
        switch (sortBy) {
            case SortType.Name:
            default:
                return __spreadArray([], students, true).sort(function (a, b) { return a.name.localeCompare(b.name); });
            case SortType.Surname:
                return __spreadArray([], students, true).sort(function (a, b) { return a.surname.localeCompare(b.surname); });
            case SortType.Age:
                return __spreadArray([], students, true).sort(function (a, b) { return a.age - b.age; });
            case SortType.Married:
                return __spreadArray([], students, true).sort(function (a, b) { return +a.married - +b.married; });
            case SortType.AverageGrade:
                return __spreadArray([], students, true).sort(function (a, b) { return (a.grades.reduce(function (x, y) { return x + y; }, 0)
                    / a.grades.length)
                    - (b.grades.reduce(function (m, n) { return m + n; }, 0) / b.grades.length); });
        }
    }
    switch (sortBy) {
        case SortType.Name:
        default:
            return __spreadArray([], students, true).sort(function (a, b) { return b.name.localeCompare(a.name); });
        case SortType.Surname:
            return __spreadArray([], students, true).sort(function (a, b) { return b.surname.localeCompare(a.surname); });
        case SortType.Age:
            return __spreadArray([], students, true).sort(function (a, b) { return b.age - a.age; });
        case SortType.Married:
            return __spreadArray([], students, true).sort(function (a, b) { return +b.married - +a.married; });
        case SortType.AverageGrade:
            return __spreadArray([], students, true).sort(function (a, b) { return (b.grades.reduce(function (x, y) { return x + y; }, 0)
                / b.grades.length)
                - (a.grades.reduce(function (m, n) { return m + n; }, 0) / a.grades.length); });
    }
}
exports.sortStudents = sortStudents;
