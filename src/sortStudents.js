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
    var compareFunction = function (a, b) {
        var result = 0;
        var avgGradeA = 0;
        var avgGradeB = 0;
        switch (sortBy) {
            case SortType.Name:
                result = a.name.localeCompare(b.name);
                break;
            case SortType.Surname:
                result = a.surname.localeCompare(b.surname);
                break;
            case SortType.Age:
                result = a.age - b.age;
                break;
            case SortType.Married:
                result = +a.married - +b.married;
                break;
            case SortType.AverageGrade:
                avgGradeA = a.grades.reduce(function (acc, curr) {
                    return acc + curr;
                }) / a.grades.length;
                avgGradeB = b.grades.reduce(function (acc, curr) {
                    return acc + curr;
                }) / b.grades.length;
                result = avgGradeA - avgGradeB;
                break;
            default:
                break;
        }
        if (order === 'desc') {
            result *= -1;
        }
        return result === 0 ? students.indexOf(a) - students.indexOf(b) : result;
    };
    return __spreadArray([], students, true).sort(compareFunction);
}
exports.sortStudents = sortStudents;
