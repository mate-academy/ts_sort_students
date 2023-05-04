"use strict";
/* eslint-disable max-len */
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
var sortStudents_1 = require("./sortStudents");
var students = [
    {
        name: 'Diana',
        surname: 'Dorsey',
        age: 24,
        married: false,
        grades: [3, 3, 4, 5, 4, 3, 5, 5]
    },
    {
        name: 'Christina',
        surname: 'Branscome',
        age: 23,
        married: true,
        grades: [4, 4, 4, 5, 5, 5, 5, 5]
    },
    {
        name: 'Willie',
        surname: 'Barrera',
        age: 22,
        married: false,
        grades: [3, 5, 5, 3, 3, 5, 4, 4]
    },
    {
        name: 'Douglas',
        surname: 'Paez',
        age: 23,
        married: true,
        grades: [5, 5, 5, 4, 5, 5, 5, 5]
    },
    {
        name: 'Richard',
        surname: 'Hall',
        age: 23,
        married: false,
        grades: [3, 2, 4, 5, 4, 3, 3, 3]
    },
    {
        name: 'Dale',
        surname: 'Gandy',
        age: 23,
        married: false,
        grades: [5, 3, 3, 3, 3, 5, 4, 3, 4]
    },
    {
        name: 'Lillian',
        surname: 'Quinn',
        age: 23,
        married: false,
        grades: [3, 4, 3, 4, 4, 4, 5, 2, 3]
    },
    {
        name: 'Jessica',
        surname: 'Buxton',
        age: 26,
        married: true,
        grades: [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4]
    },
    {
        name: 'Pamela',
        surname: 'Casillas',
        age: 24,
        married: false,
        grades: [4, 5, 4, 5, 5, 4, 3, 2, 3, 3, 3, 2]
    },
    {
        name: 'Glenn',
        surname: 'Thompson',
        age: 22,
        married: false,
        grades: [5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 3, 2]
    },
];
describe('Enum \'SortField\' ', function () {
    test('should be declared', function () {
        expect(sortStudents_1.SortType).toBeInstanceOf(Object);
    });
});
describe('Function \'sortStudents\'', function () {
    test('should be declared', function () {
        expect(sortStudents_1.sortStudents)
            .toBeInstanceOf(Function);
    });
    test('should return an array of students', function () {
        expect((0, sortStudents_1.sortStudents)(students, sortStudents_1.SortType.Name, 'asc'))
            .toBeInstanceOf(Array);
    });
    test('should not modify the original array', function () {
        var copy = __spreadArray([], students, true);
        (0, sortStudents_1.sortStudents)(students, sortStudents_1.SortType.Name, 'asc');
        expect(students)
            .toEqual(copy);
    });
    test('should correctly sort array by Name in ascending order', function () {
        var sortedData = (0, sortStudents_1.sortStudents)(students, sortStudents_1.SortType.Name, 'asc')
            .map(function (user) { return "".concat(user.name, " ").concat(user.surname, " ").concat(user.age); });
        expect(sortedData)
            .toEqual([
            'Christina Branscome 23',
            'Dale Gandy 23',
            'Diana Dorsey 24',
            'Douglas Paez 23',
            'Glenn Thompson 22',
            'Jessica Buxton 26',
            'Lillian Quinn 23',
            'Pamela Casillas 24',
            'Richard Hall 23',
            'Willie Barrera 22',
        ]);
    });
    test('should correctly sort students by Surname in ascending order', function () {
        var sortedData = (0, sortStudents_1.sortStudents)(students, sortStudents_1.SortType.Surname, 'asc')
            .map(function (user) { return "".concat(user.name, " ").concat(user.surname, " ").concat(user.age); });
        expect(sortedData)
            .toEqual([
            'Willie Barrera 22',
            'Christina Branscome 23',
            'Jessica Buxton 26',
            'Pamela Casillas 24',
            'Diana Dorsey 24',
            'Dale Gandy 23',
            'Richard Hall 23',
            'Douglas Paez 23',
            'Lillian Quinn 23',
            'Glenn Thompson 22',
        ]);
    });
    test('should correctly sort students by Age in descending order', function () {
        var sortedData = (0, sortStudents_1.sortStudents)(students, sortStudents_1.SortType.Age, 'desc')
            .map(function (user) { return "".concat(user.name, " ").concat(user.surname, " ").concat(user.age); });
        expect(sortedData)
            .toEqual([
            'Jessica Buxton 26',
            'Diana Dorsey 24',
            'Pamela Casillas 24',
            'Christina Branscome 23',
            'Douglas Paez 23',
            'Richard Hall 23',
            'Dale Gandy 23',
            'Lillian Quinn 23',
            'Willie Barrera 22',
            'Glenn Thompson 22',
        ]);
    });
    test('should correctly sort students by Married in descending order', function () {
        var sortedData = (0, sortStudents_1.sortStudents)(students, sortStudents_1.SortType.Married, 'desc')
            .map(function (user) { return "".concat(user.name, " ").concat(user.surname, " ").concat(user.age).concat(user.married ? ' married' : ''); });
        expect(sortedData)
            .toEqual([
            'Christina Branscome 23 married',
            'Douglas Paez 23 married',
            'Jessica Buxton 26 married',
            'Diana Dorsey 24',
            'Willie Barrera 22',
            'Richard Hall 23',
            'Dale Gandy 23',
            'Lillian Quinn 23',
            'Pamela Casillas 24',
            'Glenn Thompson 22',
        ]);
    });
    test('should correctly sort students by AverageGrade in descending order', function () {
        var sortedData = (0, sortStudents_1.sortStudents)(students, sortStudents_1.SortType.AverageGrade, 'desc')
            .map(function (user) { return "".concat(user.name, " ").concat(user.surname, " [").concat(user.grades, "]"); });
        expect(sortedData)
            .toEqual([
            'Douglas Paez [5,5,5,4,5,5,5,5]',
            'Christina Branscome [4,4,4,5,5,5,5,5]',
            'Jessica Buxton [5,5,4,5,4,4,4,4,5,4,5,4]',
            'Glenn Thompson [5,5,5,5,5,5,5,5,4,4,3,2]',
            'Diana Dorsey [3,3,4,5,4,3,5,5]',
            'Willie Barrera [3,5,5,3,3,5,4,4]',
            'Dale Gandy [5,3,3,3,3,5,4,3,4]',
            'Pamela Casillas [4,5,4,5,5,4,3,2,3,3,3,2]',
            'Lillian Quinn [3,4,3,4,4,4,5,2,3]',
            'Richard Hall [3,2,4,5,4,3,3,3]',
        ]);
    });
    test('should correctly sort students by AverageGrade in ascending order', function () {
        var sortedData = (0, sortStudents_1.sortStudents)(students, sortStudents_1.SortType.AverageGrade, 'asc')
            .map(function (user) { return "".concat(user.name, " ").concat(user.surname, " [").concat(user.grades, "]"); });
        expect(sortedData)
            .toEqual([
            'Richard Hall [3,2,4,5,4,3,3,3]',
            'Lillian Quinn [3,4,3,4,4,4,5,2,3]',
            'Pamela Casillas [4,5,4,5,5,4,3,2,3,3,3,2]',
            'Dale Gandy [5,3,3,3,3,5,4,3,4]',
            'Diana Dorsey [3,3,4,5,4,3,5,5]',
            'Willie Barrera [3,5,5,3,3,5,4,4]',
            'Jessica Buxton [5,5,4,5,4,4,4,4,5,4,5,4]',
            'Glenn Thompson [5,5,5,5,5,5,5,5,4,4,3,2]',
            'Christina Branscome [4,4,4,5,5,5,5,5]',
            'Douglas Paez [5,5,5,4,5,5,5,5]',
        ]);
    });
});
