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
exports.sortStudents = exports.averageArray = exports.SortType = void 0;
var SortType;
(function (SortType) {
    SortType["Name"] = "name";
    SortType["Surname"] = "surname";
    SortType["Age"] = "age";
    SortType["Married"] = "married";
    SortType["AverageGrade"] = "grades";
})(SortType = exports.SortType || (exports.SortType = {}));
var averageArray = function (arr) {
    return arr.reduce(function (acc, prev) { return acc + prev; })
        / arr.length;
};
exports.averageArray = averageArray;
function sortStudents(students, sortBy, order) {
    var copyOfStudents = __spreadArray([], students, true);
    switch (sortBy) {
        case 'name':
        case 'surname':
            copyOfStudents.sort(function (student1, student2) {
                var key1 = student1[sortBy].toUpperCase();
                var key2 = student2[sortBy].toUpperCase();
                var orderDirection = order === 'asc' ? -1 : 1;
                return key1 <= key2
                    ? orderDirection
                    : (-1) * orderDirection;
            });
            break;
        case 'married':
        case 'age':
            copyOfStudents.sort(function (student1, student2) {
                return order === 'asc'
                    ? +student1[sortBy] - +student2[sortBy]
                    : +student2[sortBy] - +student1[sortBy];
            });
            break;
        case 'grades':
            copyOfStudents.sort(function (student1, student2) {
                var avg1 = (0, exports.averageArray)(student1.grades);
                var avg2 = (0, exports.averageArray)(student2.grades);
                return order === 'asc' ? avg1 - avg2 : avg2 - avg1;
            });
            break;
        default:
            break;
    }
    return copyOfStudents;
}
exports.sortStudents = sortStudents;
