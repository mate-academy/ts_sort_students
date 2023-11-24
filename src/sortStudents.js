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
function sortStudents(students, sortBy, order) {
    var copiedStudent = __spreadArray([], students, true);
    var callback = function (a, b) {
        var aValue;
        var bValue;
        switch (sortBy) {
            case SortType.Name:
                aValue = a.name.toLowerCase();
                bValue = b.name.toLowerCase();
                break;
            case SortType.Surname:
                aValue = a.surname.toLowerCase();
                bValue = b.surname.toLowerCase();
                break;
            case SortType.Age:
                aValue = a.age;
                bValue = b.age;
                break;
            case SortType.Married:
                aValue = a.married ? 1 : 0;
                bValue = b.married ? 1 : 0;
                break;
            case SortType.AverageGrade:
                aValue = a.grades.reduce(function (acc, curr) { return acc + curr; }) / a.grades.length;
                bValue = b.grades.reduce(function (acc, curr) { return acc + curr; }) / b.grades.length;
                break;
            default:
                throw new Error('Wrong sortBy input');
        }
        if (order === 'asc') {
            return aValue < bValue ? -1 : 1;
        }
        return bValue < aValue ? -1 : 1;
    };
    return copiedStudent.sort(callback);
}
exports.sortStudents = sortStudents;
