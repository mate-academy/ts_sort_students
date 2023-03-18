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
    SortType["AverageGrade"] = "grades";
})(SortType = exports.SortType || (exports.SortType = {}));
function average(item) {
    return item.reduce(function (a, b) { return a + b; }, 0) / item.length;
}
function sortStudents(students, sortBy, order) {
    var direction = (order === 'asc') ? 1 : -1;
    return __spreadArray([], students, true).sort(function (a, b) {
        switch (sortBy) {
            case SortType.Name:
            case SortType.Surname:
                return (a[sortBy].localeCompare(b[sortBy]) * direction);
            case SortType.Age:
            case SortType.Married:
                return ((Number(a[sortBy]) - Number(b[sortBy])) * direction);
            case SortType.AverageGrade:
                return ((average(a.grades) - average(b.grades)) * direction);
            default:
                return 0;
        }
    });
}
exports.sortStudents = sortStudents;
