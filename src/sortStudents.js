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
function isValuesEqual(arr, sortType) {
    for (var i = 0; i < arr.length - 1; i += 1) {
        var currenValue = arr[i][sortType];
        var nextValue = arr[i + 1][sortType];
        if (Array.isArray(currenValue) && Array.isArray(nextValue)) {
            currenValue = currenValue.reduce(function (sum, current) {
                return sum + current;
            }, 0);
            nextValue = nextValue.reduce(function (sum, current) {
                return sum + current;
            }, 0);
        }
        if (currenValue !== nextValue) {
            return false;
        }
    }
    return true;
}
function sortStudents(students, sortBy, order) {
    var copyStudets = __spreadArray([], students, true);
    switch (sortBy) {
        case SortType.Age: {
            var isEqual = isValuesEqual(students, sortBy);
            if (isEqual) {
                return copyStudets;
            }
            if (order === 'asc') {
                return copyStudets.sort(function (a, b) {
                    return a[SortType.Age] - b[SortType.Age];
                });
            }
            if (order === 'desc') {
                return copyStudets.sort(function (a, b) {
                    return b[SortType.Age] - a[SortType.Age];
                });
            }
            break;
        }
        case SortType.Married: {
            var isEqual = isValuesEqual(students, sortBy);
            if (isEqual) {
                return copyStudets;
            }
            if (order === 'asc') {
                return copyStudets.sort(function (a, b) {
                    return Number(a[SortType.Married]) - Number(b[SortType.Married]);
                });
            }
            if (order === 'desc') {
                return copyStudets.sort(function (a, b) {
                    return Number(b[SortType.Married]) - Number(a[SortType.Married]);
                });
            }
            break;
        }
        case SortType.AverageGrade: {
            var isEqual = isValuesEqual(students, sortBy);
            if (isEqual) {
                return copyStudets;
            }
            if (order === 'asc') {
                return copyStudets.sort(function (a, b) {
                    var currenValue = a[sortBy].reduce(function (sum, current) {
                        return sum + current;
                    }, 0) / a[sortBy].length;
                    var nextValue = b[sortBy].reduce(function (sum, current) {
                        return sum + current;
                    }, 0) / b[sortBy].length;
                    return currenValue - nextValue;
                });
            }
            if (order === 'desc') {
                return copyStudets.sort(function (a, b) {
                    var currenValue = a[sortBy].reduce(function (sum, current) {
                        return sum + current;
                    }, 0) / a[sortBy].length;
                    var nextValue = b[sortBy].reduce(function (sum, current) {
                        return sum + current;
                    }, 0) / b[sortBy].length;
                    return nextValue - currenValue;
                });
            }
            break;
        }
        default: {
            var isEqual = isValuesEqual(students, sortBy);
            if (isEqual) {
                return copyStudets;
            }
            copyStudets.sort(function (a, b) {
                return a[sortBy].localeCompare(b[sortBy]);
            });
            if (order === 'asc') {
                return copyStudets;
            }
            if (order === 'desc') {
                return copyStudets.reverse();
            }
        }
    }
    return copyStudets;
}
exports.sortStudents = sortStudents;
