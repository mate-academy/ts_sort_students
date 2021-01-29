'use strict';
// describe Student type
// create SortField enum and export it
// create SortOrder literal type
type Student = {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

type SortOrderType = 'asc' | 'desc';

export enum SortField {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

type SortCallback = (student1: Student, student2: Student) => number;

export function sortStudents(
  students: Student[],
  sortBy: string,
  order: SortOrderType
): Student[] {
  const result = [...students];

  if (order === 'asc') {
    result.sort(getCallbackAsc(sortBy));
  } else {
    result.sort(getCallbackDesc(sortBy));
  }

  return result;
}

const getCallbackAsc = (sortBy: string): SortCallback => {
  switch (sortBy) {
    case SortField.Name:
    case SortField.Surname:
      return (a, b) => a[sortBy].localeCompare(b[sortBy]);

    case SortField.Age:
      return (a, b) => a[sortBy] - b[sortBy];

    case SortField.Married:
      return (a, b) => Number(a[sortBy]) - Number(b[sortBy]);

    case SortField.AverageGrade:
      return (a, b) => {
        return getAverageGrades(a[sortBy]) - getAverageGrades(b[sortBy]);
      };
    default:
      return (a, b) => (
        JSON.stringify(a).localeCompare(JSON.stringify(b))
      );
  }
};

const getCallbackDesc = (sortBy: string): SortCallback => {
  switch (sortBy) {
    case SortField.Name:
    case SortField.Surname:
      return (a, b) => b[sortBy].localeCompare(a[sortBy]);

    case SortField.Age:
      return (a, b) => b[sortBy] - a[sortBy];

    case SortField.Married:
      return (a, b) => Number(b[sortBy]) - Number(a[sortBy]);

    case SortField.AverageGrade:
      return (a, b) => {
        return getAverageGrades(b[sortBy]) - getAverageGrades(a[sortBy]);
      };
    default:
      return (a, b) => (
        JSON.stringify(b).localeCompare(JSON.stringify(a))
      );
  }
};

const getAverageGrades = (grades: number[]): number => {
  const total = grades.reduce((prev, grade) => prev + grade, 0);

  if (grades.length) {
    return total / grades.length;
  }

  return 0;
};
