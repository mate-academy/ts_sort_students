"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortStudents = exports.SortType = void 0;
var SortType;
(function (SortType) {
    SortType["Name"] = "name";
    SortType["Surname"] = "surname";
    SortType["Age"] = "age";
    SortType["Married"] = "married";
    SortType["AverageGrade"] = "grade";
})(SortType = exports.SortType || (exports.SortType = {}));
function sortStudents(students, sortBy, order) {
    var direction = order === 'asc' ? 1 : -1;
    if (sortBy === 'name' || sortBy === 'surname') {
        return students.sort(function (a, b) {
            var aString = a[sortBy].toLowerCase();
            var bString = b[sortBy].toLowerCase();
            if (aString > bString) {
                return 1 * direction;
            }
            if (aString < bString) {
                return -1 * direction;
            }
            return 0;
        });
    }
    if (sortBy === 'age') {
        return students.sort(function (a, b) { return (a.age - b.age) * direction; });
    }
    if (sortBy === 'married') {
        return students.sort(function (a, b) {
            if (b.married) {
                return -1 * direction;
            }
            if (a.married) {
                return 1 * direction;
            }
            return 0;
        });
    }
    function average(item) {
        return item.reduce(function (a, b) { return a + b; }) / item.length;
    }
    if (sortBy === 'grade') {
        return students.sort(function (a, b) { return (average(a.grades) - average(b.grades)) * direction; });
    }
    return students;
}
exports.sortStudents = sortStudents;
