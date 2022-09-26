"use strict";
exports.__esModule = true;
exports.sortStudents = exports.nameSurnameAge = exports.SortType = void 0;
var SortType;
(function (SortType) {
    SortType[SortType["Name"] = 0] = "Name";
    SortType[SortType["Surname"] = 1] = "Surname";
    SortType[SortType["Age"] = 2] = "Age";
    SortType[SortType["Married"] = 3] = "Married";
    SortType[SortType["AverageGrade"] = 4] = "AverageGrade";
})(SortType = exports.SortType || (exports.SortType = {}));
function nameSurnameAge(obj) {
    var res = [];
    for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
        var std = obj_1[_i];
        var person = "".concat(std.name, " ").concat(std.surname, " ").concat(std.age);
        res.push(person);
    }
    return res;
}
exports.nameSurnameAge = nameSurnameAge;
function sortStudents(std, srtBy, ordr) {
    var res = [];
    if (srtBy == SortType.Name && ordr == 'asc') {
        std.sort(function (a, b) { return (a.name > b.name) ? 1 : -1; });
        res = nameSurnameAge(std);
    }
    else if (srtBy == SortType.Name && ordr == 'desc') {
        std.sort(function (a, b) { return (a.name < b.name) ? 1 : -1; });
        res = nameSurnameAge(std);
    }
    else { }
    if (srtBy == SortType.Surname && ordr == 'asc') {
        std.sort(function (a, b) { return (a.surname > b.surname) ? 1 : -1; });
        res = nameSurnameAge(std);
    }
    else if (srtBy == SortType.Surname && ordr == 'desc') {
        std.sort(function (a, b) { return (a.surname < b.surname) ? 1 : -1; });
        res = nameSurnameAge(std);
    }
    else { }
    if (srtBy == SortType.Age && ordr == 'asc') {
        std.sort(function (a, b) { return (a.age > b.age) ? 1 : -1; });
        res = nameSurnameAge(std);
    }
    else if (srtBy == SortType.Age && ordr == 'desc') {
        std.sort(function (a, b) { return (a.age < b.age) ? 1 : -1; });
        res = nameSurnameAge(std);
    }
    else { }
    if (srtBy == SortType.Married && ordr == 'asc') {
        std.sort(function (a, b) { return Number(a.married) - Number(b.married); });
        res = nameSurnameAge(std);
    }
    else if (srtBy == SortType.Married && ordr == 'desc') {
        std.sort(function (a, b) { return Number(b.married) - Number(a.married); });
        res = nameSurnameAge(std);
    }
    else { }
    console.log(res);
    return res;
}
exports.sortStudents = sortStudents;
