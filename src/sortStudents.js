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
    var sortedArr = __spreadArray([], students, true);
    switch (sortBy) {
        case SortType.Name:
            sortedArr.sort(function (prev, next) {
                return (order === 'asc')
                    ? prev.name.localeCompare(next.name)
                    : next.name.localeCompare(prev.name);
            });
            return sortedArr;
        case SortType.Surname:
            sortedArr.sort(function (prev, next) {
                return (order === 'asc')
                    ? prev.surname.localeCompare(next.surname)
                    : next.surname.localeCompare(prev.surname);
            });
            return sortedArr;
        case SortType.Age:
            sortedArr.sort(function (prev, next) {
                return (order === 'asc')
                    ? prev.age - next.age
                    : next.age - prev.age;
            });
            return sortedArr;
        case SortType.Married:
            sortedArr.sort(function (prev, next) {
                return (order === 'asc')
                    ? Number(prev.married) - Number(next.married)
                    : Number(next.married) - Number(prev.married);
            });
            return sortedArr;
        case SortType.AverageGrade:
            sortedArr.sort(function (prev, next) {
                var sumPrev = prev.grades.reduce(function (a, b) { return a + b; });
                var sumNext = next.grades.reduce(function (a, b) { return a + b; });
                var averagePrev = sumPrev / prev.grades.length;
                var averageNext = sumNext / next.grades.length;
                return (order === 'asc')
                    ? averagePrev - averageNext
                    : averageNext - averagePrev;
            });
            return sortedArr;
        default:
            return sortedArr;
    }
}
exports.sortStudents = sortStudents;


