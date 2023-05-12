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
})(SortType = exports.SortType || (exports.SortType = {}));
function sortStudents(students, sortBy, order) {
    function setOrder() {
        return order === 'asc' ? 1 : -1;
    }
    function compare(x) {
        switch (sortBy) {
            case SortType.Name:
            case SortType.Surname:
                return x[sortBy].toUpperCase();
            case SortType.Age:
            case SortType.Married:
                return x[sortBy];
            case SortType.AverageGrade:
            default:
                return x.grades.reduce(function (a, b) { return a + b; }, 0) / x.grades.length;
        }
    }
    return __spreadArray([], students, true).sort(function (a, b) {
        if (compare(a) > compare(b)) {
            return setOrder();
        }
        if (compare(a) < compare(b)) {
            return -setOrder();
        }
        return 0;
    });
}
exports.sortStudents = sortStudents;
