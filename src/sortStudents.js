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
function sortStudents(students, sortBy, order) {
    var sortedStudents = __spreadArray([], students, true);
    function calculateAverage(numbers) {
        return numbers.reduce(function (acc, curr) { return acc + curr; }, 0) / numbers.length;
    }
    switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
            return sortedStudents.sort(function (a, b) {
                return order === 'desc'
                    ? b[sortBy].localeCompare(a[sortBy])
                    : a[sortBy].localeCompare(b[sortBy]);
            });
        case SortType.Age:
            return sortedStudents.sort(function (a, b) {
                return order === 'asc'
                    ? a[sortBy] - b[sortBy]
                    : b[sortBy] - a[sortBy];
            });
        case SortType.AverageGrade:
            return sortedStudents.sort(function (a, b) {
                return order === 'asc'
                    ? calculateAverage(a[sortBy]) - calculateAverage(b[sortBy])
                    : calculateAverage(b[sortBy]) - calculateAverage(a[sortBy]);
            });
        case SortType.Married: {
            var married = sortedStudents.filter(function (student) { return student[sortBy]; });
            var unmarried = sortedStudents.filter(function (student) { return !student[sortBy]; });
            return order === 'asc' ? unmarried.concat(married)
                : married.concat(unmarried);
        }
        default:
            return sortedStudents;
    }
}
exports.sortStudents = sortStudents;
