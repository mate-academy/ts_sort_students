"use strict";
exports.__esModule = true;
exports.sortStudents = exports.calculateAvgGrade = exports.SortType = void 0;
var SortType;
(function (SortType) {
    SortType["Name"] = "name";
    SortType["Surname"] = "surname";
    SortType["Age"] = "age";
    SortType["Married"] = "married";
    SortType["AverageGrade"] = "averageGrade"; // required an initializer by lint
})(SortType = exports.SortType || (exports.SortType = {}));
function calculateAvgGrade(student) {
    var sum = student.grades.reduce(function (prevGrade, nextGrade) { return prevGrade + nextGrade; }, 0);
    return sum / student.grades.length;
}
exports.calculateAvgGrade = calculateAvgGrade;
function sortStudents(students, sortBy, order) {
    var sortFunc;
    switch (true) {
        case sortBy === SortType.Name || sortBy === SortType.Surname:
            sortFunc = function (a, b) {
                return a[sortBy].localeCompare(b[sortBy]);
            };
            break;
        case sortBy === SortType.Age || sortBy === SortType.Married:
            sortFunc = function (a, b) {
                return +a[sortBy] - +b[sortBy];
            };
            break;
        case sortBy === SortType.AverageGrade:
            sortFunc = function (a, b) {
                var avgPrev = calculateAvgGrade(a);
                var avgNext = calculateAvgGrade(b);
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
