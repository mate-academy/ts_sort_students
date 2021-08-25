"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.sortStudents = exports.SortType = void 0;
var SortType;
(function (SortType) {
    SortType[SortType["Name"] = 0] = "Name";
    SortType[SortType["Surname"] = 1] = "Surname";
    SortType[SortType["Age"] = 2] = "Age";
    SortType[SortType["Married"] = 3] = "Married";
    SortType[SortType["AverageGrade"] = 4] = "AverageGrade";
})(SortType = exports.SortType || (exports.SortType = {}));
function sortStudents(students, sortBy, order) {
    if (order === void 0) { order = 'asc'; }
    var copy = __spreadArray([], students).map(function (student) { return (__assign({}, student)); });
    var makeSortingCallback = function (type, sortOrder) {
        var isAscendingOrder = (sortOrder) === 'asc';
        switch (type) {
            case SortType.Surname:
                return isAscendingOrder
                    ? function (x, y) { return x.surname.localeCompare(y.surname); }
                    : function (x, y) { return y.surname.localeCompare(x.surname); };
            case SortType.Age:
                return isAscendingOrder
                    ? function (x, y) { return x.age - y.age; }
                    : function (x, y) { return y.age - x.age; };
            case SortType.Married:
                return isAscendingOrder
                    ? function (x, y) { return +x.married - +y.married; }
                    : function (x, y) { return +y.married - +x.married; };
            case SortType.AverageGrade:
                return function (x, y) {
                    var getTotalGrade = function (total, current) {
                        return total + current;
                    };
                    var currentTotal = x.grades.reduce(getTotalGrade, 0);
                    var nextTotal = y.grades.reduce(getTotalGrade, 0);
                    return isAscendingOrder
                        ? currentTotal - nextTotal
                        : nextTotal - currentTotal;
                };
            default:
                return isAscendingOrder
                    ? function (x, y) { return x.name.localeCompare(y.name); }
                    : function (x, y) { return y.name.localeCompare(x.name); };
        }
    };
    return copy.sort(makeSortingCallback(sortBy, order));
}
exports.sortStudents = sortStudents;
