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
    SortType["Name"] = "Name";
    SortType["Surname"] = "Surname";
    SortType["Age"] = "Age";
    SortType["Married"] = "Married";
    SortType["AverageGrade"] = "AverageGrade";
})(SortType || (exports.SortType = SortType = {}));
function sortStudents(students, sortBy, order) {
    var studentsCopy = __spreadArray([], students, true);
    var averageGrade = function (grades) {
        var sum = grades.reduce(function (avg, grade) { return avg + grade; }, 0);
        return sum / grades.length;
    };
    studentsCopy.sort(function (a, b) {
        var count = 0;
        switch (sortBy) {
            case SortType.Name:
                count = a.name.localeCompare(b.name);
                break;
            case SortType.Surname:
                count = a.surname.localeCompare(b.surname);
                break;
            case SortType.Age:
                count = a.age - b.age;
                break;
            case SortType.Married:
                // eslint-disable-next-line no-nested-ternary
                count = (a.married === b.married) ? 0 : (a.married ? 1 : -1);
                break;
            case SortType.AverageGrade:
                count = averageGrade(a.grades) - averageGrade(b.grades);
                break;
            default:
                return 0;
        }
        if (order === 'asc') {
            return count;
        }
        return -count;
    });
    return studentsCopy;
}
exports.sortStudents = sortStudents;
