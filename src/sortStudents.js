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
function calculateAverageGrade(grades) {
    var sum = grades
        .reduce(function (acc, grade) { return acc + grade; }, 0);
    return sum / grades.length;
}
function sortStudents(students, sortBy, order) {
    return __spreadArray([], students, true).sort(function (student1, student2) {
        var result = 0;
        switch (sortBy) {
            case SortType.Name:
            case SortType.Surname:
                result = student1[sortBy].localeCompare(student2[sortBy]);
                break;
            case SortType.Age:
            case SortType.Married:
                result = Number(student1[sortBy]) - Number(student2[sortBy]);
                break;
            case SortType.AverageGrade:
                result = calculateAverageGrade(student1.grades)
                    - calculateAverageGrade(student2.grades);
                break;
            default:
                throw new Error('Cannot sort that data type');
        }
        return order === 'desc'
            ? -result
            : result;
    });
}
exports.sortStudents = sortStudents;
