'use strict';
export {};
/* eslint-disable */
/* global require, describe, test, expect */

const students = [
  {
    name: 'Diana',
    surname: 'Dorsey',
    age: 24,
    married: false,
    grades: [3, 3, 4, 5, 4, 3, 5, 5],
  },
  {
    name: 'Christina',
    surname: 'Branscome',
    age: 23,
    married: true,
    grades: [4, 4, 4, 5, 5, 5, 5, 5],
  },
  {
    name: 'Willie',
    surname: 'Barrera',
    age: 22,
    married: false,
    grades: [3, 5, 5, 3, 3, 5, 4, 4],
  },
  {
    name: 'Douglas',
    surname: 'Paez',
    age: 23,
    married: true,
    grades: [5, 5, 5, 4, 5, 5, 5, 5],
  },
  {
    name: 'Richard',
    surname: 'Hall',
    age: 23,
    married: false,
    grades: [3, 2, 4, 5, 4, 3, 3, 3],
  },
  {
    name: 'Dale',
    surname: 'Gandy',
    age: 23,
    married: false,
    grades: [5, 3, 3, 3, 3, 5, 4, 3, 4],
  },
  {
    name: 'Lillian',
    surname: 'Quinn',
    age: 23,
    married: false,
    grades: [3, 4, 3, 4, 4, 4, 5, 2, 3],
  },
  {
    name: 'Jessica',
    surname: 'Buxton',
    age: 26,
    married: true,
    grades: [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
  },
  {
    name: 'Jessica',
    surname: 'Buxton',
    age: 26,
    married: true,
    grades: [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
  },
  {
    name: 'Pamela',
    surname: 'Casillas',
    age: 24,
    married: false,
    grades: [4, 5, 4, 5, 5, 4, 3, 2, 3, 3, 3, 2],
  },
  {
    name: 'Glenn',
    surname: 'Thompson',
    age: 22,
    married: false,
    grades: [5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 3, 2],
  }
]

const { sortStudents, SortField } = require('./sortStudents');

describe('', () => {
  test(`Function 'sortStudents' should be declared`, () => {
    expect(sortStudents).toBeInstanceOf(Function);
  });

  test(`Enum 'SortField' should be declared`, () => {
    expect(SortField).toBeInstanceOf(Object);
  });

  test(`Function 'sortStudents' should return an array of students`, () => {
    expect(sortStudents(students, SortField.Name, 'asc'))
      .toBeInstanceOf(Array);
  });

  test(`Function 'sortStudents' should not modify original array`, () => {
    const copy = [...students];
    sortStudents(students, SortField.Name, 'asc')

    expect(students).toEqual(copy);
  });

  test(`Function 'sortStudents' should correctly sort array by 'name' in ascending order`, () => {
    expect(sortStudents(students, SortField.Name, 'asc'))
      .toEqual([{
        name: 'Christina', surname: 'Branscome', age: 23, married: true, grades: [4, 4, 4, 5, 5, 5, 5, 5],
      }, {
        name: 'Dale', surname: 'Gandy', age: 23, married: false, grades: [5, 3, 3, 3, 3, 5, 4, 3, 4],
      }, {
        name: 'Diana', surname: 'Dorsey', age: 24, married: false, grades: [3, 3, 4, 5, 4, 3, 5, 5],
      }, {
        name: 'Douglas', surname: 'Paez', age: 23, married: true, grades: [5, 5, 5, 4, 5, 5, 5, 5],
      }, {
        name: 'Glenn', surname: 'Thompson', age: 22, married: false, grades: [5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 3, 2],
      }, {
        name: 'Jessica', surname: 'Buxton', age: 26, married: true, grades: [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
      }, {
        name: 'Jessica', surname: 'Buxton', age: 26, married: true, grades: [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
      }, {
        name: 'Lillian', surname: 'Quinn', age: 23, married: false, grades: [3, 4, 3, 4, 4, 4, 5, 2, 3],
      }, {
        name: 'Pamela', surname: 'Casillas', age: 24, married: false, grades: [4, 5, 4, 5, 5, 4, 3, 2, 3, 3, 3, 2],
      }, {
        name: 'Richard', surname: 'Hall', age: 23, married: false, grades: [3, 2, 4, 5, 4, 3, 3, 3],
      }, {
        name: 'Willie', surname: 'Barrera', age: 22, married: false, grades: [3, 5, 5, 3, 3, 5, 4, 4],
      }]);
  });

  test(`Function 'sortStudents' should correctly sort array by 'surname' in ascending order`, () => {
    expect(sortStudents(students, SortField.Surname, 'asc'))
      .toEqual([{
        name: 'Willie', surname: 'Barrera', age: 22, married: false, grades: [3, 5, 5, 3, 3, 5, 4, 4],
      }, {
        name: 'Christina', surname: 'Branscome', age: 23, married: true, grades: [4, 4, 4, 5, 5, 5, 5, 5],
      }, {
        name: 'Jessica', surname: 'Buxton', age: 26, married: true, grades: [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
      }, {
        name: 'Jessica', surname: 'Buxton', age: 26, married: true, grades: [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
      }, {
        name: 'Pamela', surname: 'Casillas', age: 24, married: false, grades: [4, 5, 4, 5, 5, 4, 3, 2, 3, 3, 3, 2],
      }, {
        name: 'Diana', surname: 'Dorsey', age: 24, married: false, grades: [3, 3, 4, 5, 4, 3, 5, 5],
      }, {
        name: 'Dale', surname: 'Gandy', age: 23, married: false, grades: [5, 3, 3, 3, 3, 5, 4, 3, 4],
      }, {
        name: 'Richard', surname: 'Hall', age: 23, married: false, grades: [3, 2, 4, 5, 4, 3, 3, 3],
      }, {
        name: 'Douglas', surname: 'Paez', age: 23, married: true, grades: [5, 5, 5, 4, 5, 5, 5, 5],
      }, {
        name: 'Lillian', surname: 'Quinn', age: 23, married: false, grades: [3, 4, 3, 4, 4, 4, 5, 2, 3],
      }, {
        name: 'Glenn', surname: 'Thompson', age: 22, married: false, grades: [5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 3, 2],
      }]);
  });

  test(`Function 'sortStudents' should correctly sort array by 'age' in descending order`, () => {
    expect(sortStudents(students, SortField.Age, 'desc'))
      .toEqual([{
        name: 'Jessica', surname: 'Buxton', age: 26, married: true, grades: [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
      }, {
        name: 'Jessica', surname: 'Buxton', age: 26, married: true, grades: [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
      }, {
        name: 'Diana', surname: 'Dorsey', age: 24, married: false, grades: [3, 3, 4, 5, 4, 3, 5, 5],
      }, {
        name: 'Pamela', surname: 'Casillas', age: 24, married: false, grades: [4, 5, 4, 5, 5, 4, 3, 2, 3, 3, 3, 2],
      }, {
        name: 'Christina', surname: 'Branscome', age: 23, married: true, grades: [4, 4, 4, 5, 5, 5, 5, 5],
      }, {
        name: 'Douglas', surname: 'Paez', age: 23, married: true, grades: [5, 5, 5, 4, 5, 5, 5, 5],
      }, {
        name: 'Richard', surname: 'Hall', age: 23, married: false, grades: [3, 2, 4, 5, 4, 3, 3, 3],
      }, {
        name: 'Dale', surname: 'Gandy', age: 23, married: false, grades: [5, 3, 3, 3, 3, 5, 4, 3, 4],
      }, {
        name: 'Lillian', surname: 'Quinn', age: 23, married: false, grades: [3, 4, 3, 4, 4, 4, 5, 2, 3],
      }, {
        name: 'Willie', surname: 'Barrera', age: 22, married: false, grades: [3, 5, 5, 3, 3, 5, 4, 4],
      }, {
        name: 'Glenn', surname: 'Thompson', age: 22, married: false, grades: [5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 3, 2],
      }]);
  });

  test(`Function 'sortStudents' should correctly sort array by 'married' in descending order`, () => {
    expect(sortStudents(students, SortField.Married, 'desc'))
      .toEqual([{
        name: 'Christina', surname: 'Branscome', age: 23, married: true, grades: [4, 4, 4, 5, 5, 5, 5, 5],
      }, {
        name: 'Douglas', surname: 'Paez', age: 23, married: true, grades: [5, 5, 5, 4, 5, 5, 5, 5],
      }, {
        name: 'Jessica', surname: 'Buxton', age: 26, married: true, grades: [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
      }, {
        name: 'Jessica', surname: 'Buxton', age: 26, married: true, grades: [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
      }, {
        name: 'Diana', surname: 'Dorsey', age: 24, married: false, grades: [3, 3, 4, 5, 4, 3, 5, 5],
      }, {
        name: 'Willie', surname: 'Barrera', age: 22, married: false, grades: [3, 5, 5, 3, 3, 5, 4, 4],
      }, {
        name: 'Richard', surname: 'Hall', age: 23, married: false, grades: [3, 2, 4, 5, 4, 3, 3, 3],
      }, {
        name: 'Dale', surname: 'Gandy', age: 23, married: false, grades: [5, 3, 3, 3, 3, 5, 4, 3, 4],
      }, {
        name: 'Lillian', surname: 'Quinn', age: 23, married: false, grades: [3, 4, 3, 4, 4, 4, 5, 2, 3],
      }, {
        name: 'Pamela', surname: 'Casillas', age: 24, married: false, grades: [4, 5, 4, 5, 5, 4, 3, 2, 3, 3, 3, 2],
      }, {
        name: 'Glenn', surname: 'Thompson', age: 22, married: false, grades: [5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 3, 2],
      }]);
  });

  test(`Function 'sortStudents' should correctly sort array by 'average_grade' in descending order`, () => {
    expect(sortStudents(students, SortField.AverageGrade, 'desc'))
      .toEqual([{
        name: 'Douglas', surname: 'Paez', age: 23, married: true, grades: [5, 5, 5, 4, 5, 5, 5, 5],
      }, {
        name: 'Christina', surname: 'Branscome', age: 23, married: true, grades: [4, 4, 4, 5, 5, 5, 5, 5],
      }, {
        name: 'Jessica', surname: 'Buxton', age: 26, married: true, grades: [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
      }, {
        name: 'Jessica', surname: 'Buxton', age: 26, married: true, grades: [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
      }, {
        name: 'Glenn', surname: 'Thompson', age: 22, married: false, grades: [5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 3, 2],
      }, {
        name: 'Diana', surname: 'Dorsey', age: 24, married: false, grades: [3, 3, 4, 5, 4, 3, 5, 5],
      }, {
        name: 'Willie', surname: 'Barrera', age: 22, married: false, grades: [3, 5, 5, 3, 3, 5, 4, 4],
      }, {
        name: 'Dale', surname: 'Gandy', age: 23, married: false, grades: [5, 3, 3, 3, 3, 5, 4, 3, 4],
      }, {
        name: 'Pamela', surname: 'Casillas', age: 24, married: false, grades: [4, 5, 4, 5, 5, 4, 3, 2, 3, 3, 3, 2],
      }, {
        name: 'Lillian', surname: 'Quinn', age: 23, married: false, grades: [3, 4, 3, 4, 4, 4, 5, 2, 3],
      }, {
        name: 'Richard', surname: 'Hall', age: 23, married: false, grades: [3, 2, 4, 5, 4, 3, 3, 3],
      }]);
  });

  test(`Function 'sortStudents' should correctly sort array by 'average_grade' in ascending order`, () => {
    expect(sortStudents(students, SortField.AverageGrade, 'asc'))
      .toEqual([{
        name: 'Richard', surname: 'Hall', age: 23, married: false, grades: [3, 2, 4, 5, 4, 3, 3, 3],
      }, {
        name: 'Lillian', surname: 'Quinn', age: 23, married: false, grades: [3, 4, 3, 4, 4, 4, 5, 2, 3],
      }, {
        name: 'Pamela', surname: 'Casillas', age: 24, married: false, grades: [4, 5, 4, 5, 5, 4, 3, 2, 3, 3, 3, 2],
      }, {
        name: 'Dale', surname: 'Gandy', age: 23, married: false, grades: [5, 3, 3, 3, 3, 5, 4, 3, 4],
      }, {
        name: 'Diana', surname: 'Dorsey', age: 24, married: false, grades: [3, 3, 4, 5, 4, 3, 5, 5],
      }, {
        name: 'Willie', surname: 'Barrera', age: 22, married: false, grades: [3, 5, 5, 3, 3, 5, 4, 4],
      }, {
        name: 'Jessica', surname: 'Buxton', age: 26, married: true, grades: [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
      }, {
        name: 'Jessica', surname: 'Buxton', age: 26, married: true, grades: [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
      }, {
        name: 'Glenn', surname: 'Thompson', age: 22, married: false, grades: [5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 3, 2],
      }, {
        name: 'Christina', surname: 'Branscome', age: 23, married: true, grades: [4, 4, 4, 5, 5, 5, 5, 5],
      }, {
        name: 'Douglas', surname: 'Paez', age: 23, married: true, grades: [5, 5, 5, 4, 5, 5, 5, 5],
      }]);
  });
});
