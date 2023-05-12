"use strict";
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
            case 'name':
            case 'surname':
                return x[sortBy].toUpperCase();
            case 'age':
            case 'married':
                return x[sortBy];
            case 'averageGrade':
                return x.grades.reduce(function (a, b) { return a + b; }, 0) / x.grades.length;
        }
    }
    return students.slice().sort(function (a, b) {
        switch (true) {
            case (compare(a) > compare(b)):
                return setOrder();
            case (compare(a) < compare(b)):
                return -setOrder();
            default:
                return 0;
        }
    });
}
exports.sortStudents = sortStudents;
