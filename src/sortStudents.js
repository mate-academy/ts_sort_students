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
    SortType[SortType["Name"] = 0] = "Name";
    SortType[SortType["Surname"] = 1] = "Surname";
    SortType[SortType["Age"] = 2] = "Age";
    SortType[SortType["Married"] = 3] = "Married";
    SortType[SortType["AverageGrade"] = 4] = "AverageGrade";
})(SortType = exports.SortType || (exports.SortType = {}));
function calculateAverageGrade(grades) {
    if (grades.length === 0) {
        return 0;
    }
    var sum = grades
        .reduce(function (acc, grade) { return acc + grade; }, 0);
    return sum / grades.length;
}
function sortStudents(students, sortBy, order) {
    return __spreadArray([], students, true).sort(function (student1, student2) {
        var result = 0;
        switch (sortBy) {
            case SortType.Name:
                result = student1.name.localeCompare(student2.name);
                break;
            case SortType.Surname:
                result = student1.surname.localeCompare(student2.surname);
                break;
            case SortType.Age:
                result = student1.age - student2.age;
                break;
            case SortType.Married:
                if (student1.married === student2.married) {
                    result = 0;
                }
                if (student1.married) {
                    result = 1;
                }
                if (student2.married) {
                    result = -1;
                }
                break;
            case SortType.AverageGrade:
                result = calculateAverageGrade(student1.grades)
                    - calculateAverageGrade(student2.grades);
                break;
            default:
                throw new Error('Cannot sort that data type');
        }
        if (order === 'desc') {
            result *= -1;
        }
        return result;
    });
}
exports.sortStudents = sortStudents;
