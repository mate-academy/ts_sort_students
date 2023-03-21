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
function getAverageGrade(grades) {
    var value = grades.reduce(function (sum, current) {
        return sum + current;
    }, 0) / grades.length;
    return value;
}
function sortStudents(students, sortBy, order) {
    var copyStudets = __spreadArray([], students, true);
    switch (sortBy) {
        case SortType.Age: {
            return copyStudets.sort(function (a, b) { return ({
                asc: a[SortType.Age] - b[SortType.Age],
                desc: b[SortType.Age] - a[SortType.Age],
            })[order]; });
        }
        case SortType.Married: {
            return copyStudets.sort(function (a, b) { return ({
                asc: Number(a[SortType.Married]) - Number(b[SortType.Married]),
                desc: Number(b[SortType.Married]) - Number(a[SortType.Married]),
            })[order]; });
        }
        case SortType.AverageGrade: {
            return copyStudets.sort(function (a, b) {
                var currenValue = getAverageGrade(a[sortBy]);
                var nextValue = getAverageGrade(b[sortBy]);
                return {
                    asc: currenValue - nextValue,
                    desc: nextValue - currenValue,
                }[order];
            });
        }
        default: {
            copyStudets.sort(function (a, b) { return ({
                asc: a[sortBy].localeCompare(b[sortBy]),
                desc: b[sortBy].localeCompare(a[sortBy]),
            })[order]; });
        }
    }
    return copyStudets;
}
exports.sortStudents = sortStudents;
