"use strict";
exports.__esModule = true;
exports.sortStudents = exports.SortType = void 0;
var SortType;
(function (SortType) {
    SortType["Name"] = "name";
    SortType["Surname"] = "surname";
    SortType["Age"] = "age";
    SortType["Married"] = "married";
    SortType["AverageGrade"] = ""; // required an initializer by lint
})(SortType = exports.SortType || (exports.SortType = {}));
function sortStudents(students, sortBy, order) {
    var sortFunc;
    switch (true) {
        case sortBy === SortType.Name || sortBy === SortType.Surname:
            sortFunc = function (a, b) {
                return a[sortBy].localeCompare(b[sortBy]);
            };
            break;
        case sortBy === SortType.Age:
            sortFunc = function (a, b) {
                return a[sortBy] - b[sortBy];
            };
            break;
        case sortBy === SortType.Married:
            sortFunc = function (a, b) {
                var res = -1;
                if (a[sortBy] === b[sortBy]) {
                    res = 0;
                }
                else if (a[sortBy]) {
                    res = 1;
                }
                return res;
            };
            break;
        case sortBy === SortType.AverageGrade:
            sortFunc = function (a, b) {
                var sumPrev = a.grades.reduce(function (prevGrade, nextGrade) { return prevGrade + nextGrade; }, 0);
                var avgPrev = (sumPrev / a.grades.length);
                var sumNext = b.grades.reduce(function (prevGrade, nextGrade) { return prevGrade + nextGrade; }, 0);
                var avgNext = (sumNext / b.grades.length);
                return avgPrev - avgNext;
            };
            break;
        default: // default case required by linter
            throw new Error('ERROR');
    }
    return students.sort(function (prevStudent, nextStudent) {
        var _a;
        var studentA = prevStudent;
        var studentB = nextStudent;
        if (order === 'desc') {
            _a = [studentB, studentA], studentA = _a[0], studentB = _a[1];
        }
        return sortFunc(studentA, studentB);
    });
}
exports.sortStudents = sortStudents;
