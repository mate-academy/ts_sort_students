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
exports.__esModule = true;
exports.sortStudents = exports.SortType = void 0;
var SortType;
(function (SortType) {
    SortType["Name"] = "name";
    SortType["Surname"] = "surname";
    SortType["Age"] = "age";
    SortType["Married"] = "married";
    SortType["AverageGrade"] = "grades";
})(SortType = exports.SortType || (exports.SortType = {}));
function sortStudents(students, sortBy, order) {
    var people = __spreadArray([], students, true);
    people.sort(function (personA, personB) {
        var personAAverage;
        var personBAverage;
        switch (sortBy) {
            case SortType.Name:
            case SortType.Surname:
                return order === 'desc'
                    ? personB[sortBy].localeCompare(personA[sortBy])
                    : personA[sortBy].localeCompare(personB[sortBy]);
            case SortType.Age:
            case SortType.Married:
                return order === 'desc'
                    ? +personB[sortBy] - +personA[sortBy]
                    : +personA[sortBy] - +personB[sortBy];
            case SortType.AverageGrade:
                personAAverage = personA[sortBy]
                    .reduce(function (prev, item) { return (prev + item); }, 0) / personA[sortBy].length;
                personBAverage = personB[sortBy]
                    .reduce(function (prev, item) { return (prev + item); }, 0) / personB[sortBy].length;
                return order === 'desc'
                    ? personBAverage - personAAverage
                    : personAAverage - personBAverage;
            default:
                return 0;
        }
    });
    return people;
}
exports.sortStudents = sortStudents;
