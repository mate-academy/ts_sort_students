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
    return students.sort(function (prevStudent, nextStudent) {
        var _a;
        var studentA = prevStudent;
        var studentB = nextStudent;
        if (order === 'desc') {
            _a = [studentB, studentA], studentA = _a[0], studentB = _a[1];
        }
        var avgPrev = calculateAvgGrade(studentA);
        var avgNext = calculateAvgGrade(studentB);
        switch (sortBy) {
            case SortType.Name || SortType.Surname:
                return studentA[sortBy].localeCompare(studentB[sortBy]);
            case SortType.Age || SortType.Married:
                return +studentA[sortBy] - +studentB[sortBy];
            case SortType.AverageGrade:
                return avgPrev - avgNext;
            default: // default case required by linter
                throw new Error('ERROR');
        }
    });
}
exports.sortStudents = sortStudents;
