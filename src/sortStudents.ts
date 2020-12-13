/* eslint-disable max-len */
'use strict';

export {};
// describe Student type
// create SortField enum and export it
// create SortOrder literal type
export enum SortField {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
};
type Num = number;
export type SortOrder = 'asc' | 'desc';
type Grade = number;
type Grades = Grade[];

export type Obj = {
  name:string,
  surname:string,
  age: number,
  married: boolean,
  grades: Grades,
};
export type Students = Obj[];

export const getAverageGrade = (param:Grades):Num => {
  const sum = param.reduce((accumulator:Num, currentValue:Num):Num => accumulator + currentValue);

  return sum / param.length;
};

export const callback = function(sort:SortField, orderoToSort:SortOrder):any {
  switch (sort) {
    case SortField.Name : return (a:Obj, b:Obj) => {
      return (orderoToSort === 'desc') ? b[sort].localeCompare(a[sort])
        : a[sort].localeCompare(b[sort]);
    };

    case SortField.Surname: return (a:Obj, b:Obj) => {
      return (orderoToSort === 'desc') ? b[sort].localeCompare(a[sort])
        : a[sort].localeCompare(b[sort]);
    };

    case SortField.AverageGrade: return (a: Obj, b: Obj) => {
      return (orderoToSort === 'desc') ? (getAverageGrade(b[sort]) - getAverageGrade(a[sort]))
        : getAverageGrade(a[sort]) - getAverageGrade(b[sort]);
    };

    case SortField.Married: return (a:Obj, b:Obj):Num => {
      return (orderoToSort === 'desc') ? (Number(b[sort]) - Number(a[sort]))
        : (Number(a[sort]) - Number(b[sort]));
    };

    case SortField.Age: return (a:Obj, b:Obj):Num => {
      return (orderoToSort === 'desc') ? (Number(b[sort]) - Number(a[sort]))
        : (Number(a[sort]) - Number(b[sort]));
    };
  }
};

// eslint-disable-next-line max-len
export function sortStudents(students: Students, sortBy: SortField, order: SortOrder):Students {
  const student:Students = students.slice();

  student.sort(callback(sortBy, order));

  return student;
}
