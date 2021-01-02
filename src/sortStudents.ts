'use strict';
// describe Student type
// create SortField enum and export it
// create SortOrder literal type

type AverageGrades = number;

type Student = {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: AverageGrades[],
}

type SortOrder = 'asc' | 'desc';

export enum SortField {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
};

export function sortStudents(
  students: Array<Student>,
  sortBy: SortField, order: SortOrder
) {
  const studentsArr = [...students];

  const getAverageGrade = (grades: number[]) => {
    return grades.reduce((prev, next) => prev + next, 0) / grades.length;
  };

  if (sortBy === SortField.AverageGrade) {
    if (order === 'asc') {
      return studentsArr.sort((prev, next) =>
        getAverageGrade(prev.grades)
        - getAverageGrade(next.grades));
    } else {
      return studentsArr.sort((prev, next) =>
        getAverageGrade(next.grades)
        - getAverageGrade(prev.grades));
    }
  }

  studentsArr.sort((prev, next) => {
    switch (sortBy) {
      case SortField.Name:
      case SortField.Surname:
        return order === 'asc'
          ? prev[sortBy].localeCompare(next[sortBy])
          : next[sortBy].localeCompare(prev[sortBy]);
      case SortField.Age:
        return order === 'asc'
          ? prev[sortBy] - next[sortBy]
          : next[sortBy] - prev[sortBy];
      case SortField.Married:
        return order === 'asc'
          ? Number(prev[sortBy]) - Number(next[sortBy])
          : Number(next[sortBy]) - Number(prev[sortBy]);
    }
  });

  return studentsArr;
}
