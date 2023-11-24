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
function calcAvgGrade(grades) {
    if (!grades.length) {
        return 0;
    }
    var sum = grades.reduce(function (acc, curr) { return acc + curr; });
    return sum / grades.length;
}
function sortStudents(students, sortBy, order) {
    var compareFunction = function (a, b) {
        var result = 0;
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
                {
                    var avgGradeA = calcAvgGrade(a.grades);
                    var avgGradeB = calcAvgGrade(b.grades);
                    result = avgGradeA - avgGradeB;
                }
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
