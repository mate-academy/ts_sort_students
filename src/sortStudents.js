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
})(SortType || (exports.SortType = SortType = {}));
function sortStudents(students, sortBy, order) {
    var sorted = __spreadArray([], students, true);
    var compare = function (a, b) {
        var aVar;
        var bVar;
        switch (sortBy) {
            case SortType.Name:
                aVar = a.name;
                bVar = b.name;
                break;
            case SortType.Surname:
                aVar = a.surname;
                bVar = b.surname;
                break;
            case SortType.Age:
                aVar = a.age;
                bVar = b.age;
                break;
            case SortType.Married:
                aVar = a.married;
                bVar = b.married;
                break;
            case SortType.AverageGrade:
                aVar = a.grades
                    .reduce(function (acc, grade) { return acc + grade; }, 0) / a.grades.length;
                bVar = b.grades
                    .reduce(function (acc, grade) { return acc + grade; }, 0) / b.grades.length;
                break;
            default: throw new Error('Wrong sort type');
        }
        if (aVar < bVar) {
            return order === 'asc' ? -1 : 1;
        }
        if (aVar > bVar) {
            return order === 'asc' ? 1 : -1;
        }
        return 0;
    };
    return sorted.sort(compare);
}
exports.sortStudents = sortStudents;
