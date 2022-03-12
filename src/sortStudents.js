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
    SortType["Name"] = "name";
    SortType["Surname"] = "surname";
    SortType["Age"] = "age";
    SortType["Married"] = "married";
    SortType["AverageGrade"] = "averageGrade";
})(SortType = exports.SortType || (exports.SortType = {}));
function getAverage(student) {
    return student.grades.reduce(function (prev, current) { return prev + current; }, 0)
        / student.grades.length;
}
function sortStudents(students, sortBy, order) {
    var allStudent = __spreadArray([], students, true);
    if (SortType.Name === sortBy || SortType.Surname === sortBy) {
        allStudent.sort(function (prev, curr) {
            return order === 'asc'
                ? prev[sortBy].localeCompare(curr[sortBy])
                : curr[sortBy].localeCompare(prev[sortBy]);
        });
    }
    if (SortType.Age === sortBy) {
        allStudent.sort(function (prev, curr) {
            return order === 'asc'
                ? prev.age - curr.age
                : curr.age - prev.age;
        });
    }
    if (SortType.Married === sortBy) {
        allStudent.sort(function (prev, curr) {
            return order === 'asc'
                ? +prev.married - +curr.married
                : +curr.married - +prev.married;
        });
    }
    if (SortType.AverageGrade === sortBy) {
        allStudent.sort(function (prev, curr) {
            return order === 'asc'
                ? getAverage(prev) - getAverage(curr)
                : getAverage(curr) - getAverage(prev);
        });
    }
    return allStudent;
}
exports.sortStudents = sortStudents;
