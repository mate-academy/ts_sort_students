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
// eslint-disable-next-line max-len
function sortStudents(students, sortBy, order) {
    var correctOrderStuds = __spreadArray([], students, true);
    correctOrderStuds.sort(function (a, b) {
        var difference = 0;
        switch (sortBy) {
            case SortType.Name:
                difference = a.name.localeCompare(b.name);
                break;
            case SortType.Surname:
                difference = a.surname.localeCompare(b.surname);
                break;
            case SortType.Age:
                difference = a.age - b.age;
                break;
            case SortType.Married:
                // if (a.married !== b.married) {
                //   difference = a.name.localeCompare(b.name);
                // }
                difference = Number(a.married) - Number(b.married);
                break;
            case SortType.AverageGrade: {
                // eslint-disable-next-line max-len
                var averageA = a.grades.reduce(function (acc, current) { return acc + current; }, 0) / a.grades.length;
                // eslint-disable-next-line max-len
                var averageb = b.grades.reduce(function (acc, current) { return acc + current; }, 0) / b.grades.length;
                difference = averageA - averageb;
                break;
            }
            default:
                throw new Error('Invalid data');
        }
        if (order === 'desc') {
            difference *= -1;
        }
        if (difference === 0) {
            return students.indexOf(a) - students.indexOf(b);
        }
        return difference;
    });
    return correctOrderStuds;
}
exports.sortStudents = sortStudents;
