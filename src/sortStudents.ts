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
type SortOrder = 'asc' | 'desc';
export type Student = {
  name:string,
  surname:string,
  age: number,
  married: boolean,
  grades: number[],
}

export const getAverageGrade = (param:number[]): number => {
  const sum = param.reduce((accumulator:number, currentValue:number): number => accumulator + currentValue);

  return sum / param.length;
};

export const callback = function(sort: SortField, orderoToSort: SortOrder):any {
  switch (sort) {
    case SortField.Name : return (a:Student, b:Student) => {
      return (orderoToSort === 'desc') ? b[sort].localeCompare(a[sort])
        : a[sort].localeCompare(b[sort]);
    };

    case SortField.Surname: return (a:Student, b:Student) => {
      return (orderoToSort === 'desc') ? b[sort].localeCompare(a[sort])
        : a[sort].localeCompare(b[sort]);
    };

    case SortField.AverageGrade: return (a: Student, b: Student) => {
      return (orderoToSort === 'desc') ? (getAverageGrade(b[sort]) - getAverageGrade(a[sort]))
        : getAverageGrade(a[sort]) - getAverageGrade(b[sort]);
    };

    case SortField.Married: return (a:Student, b:Student): number => {
      return (orderoToSort === 'desc') ? (Number(b[sort]) - Number(a[sort]))
        : (Number(a[sort]) - Number(b[sort]));
    };

    case SortField.Age: return (a:Student, b:Student):number => {
      return (orderoToSort === 'desc') ? (Number(b[sort]) - Number(a[sort]))
        : (Number(a[sort]) - Number(b[sort]));
    };
  }
};

// eslint-disable-next-line max-len
export function sortStudents(students: Student[], sortBy: SortField, order: SortOrder): Student[] {
  const student:Student[] = students.slice();

  student.sort(callback(sortBy, order));

  return student;
}
