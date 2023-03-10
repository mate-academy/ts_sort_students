
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  let resultArray: Student[] = [];

  if (order === 'asc' && sortBy === SortType.Age) {
    resultArray = [...students].sort((a, b) => a.age - b.age);
  } else if (order === 'desc' && sortBy === SortType.Age) {
    resultArray = [...students].sort((a, b) => b.age - a.age);
  }

  if (order === 'asc' && sortBy === SortType.Name) {
    resultArray = [...students].sort((a, b) => a.name.localeCompare(b.name));
  } else if (order === 'desc' && sortBy === SortType.Name) {
    resultArray = [...students].sort((a, b) => b.name.localeCompare(a.name));
  }

  if (order === 'asc' && sortBy === SortType.Surname) {
    resultArray = [...students]
      .sort((a, b) => a.surname.localeCompare(b.surname));
  } else if (order === 'desc' && sortBy === SortType.Surname) {
    resultArray = [...students]
      .sort((a, b) => b.surname.localeCompare(a.surname));
  }

  if (order === 'asc' && sortBy === SortType.AverageGrade) {
    resultArray = [...students]
      .sort((a, b) => a.grades
        .reduce((prev, current) => prev + current) / a.grades.length
        - b.grades
          .reduce((prev, current) => prev + current) / b.grades.length);
  } else if (order === 'desc' && sortBy === SortType.AverageGrade) {
    resultArray = [...students]
      .sort((a, b) => b.grades
        .reduce((prev, current) => prev + current) / b.grades.length
        - a.grades
          .reduce((prev, current) => prev + current) / a.grades.length);
  }

  if (order === 'asc' && sortBy === SortType.Married) {
    resultArray = [...students].sort((a, b) => a.married - b.married);
  } else if (order === 'desc' && sortBy === SortType.Married) {
    resultArray = [...students].sort((a, b) => b.married - a.married);
  }

  return resultArray;
}
