'use strict';
// describe Student type
// create SortField enum and export it
// create SortOrder literal type
export type StudentType = {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
};

export enum SortField {
  Name = 'name',
  Surname = 'surname',
  Age= 'age',
  Married = 'married',
  AverageGrade = 'average',
};

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: StudentType,
  sortBy: SortField,
  order: SortOrder) : StudentType[] {
  const clone = [...students];

  clone.sort((first, second) => {
    switch (sortBy) {
      case SortField.Name:
      case SortField.Surname:
        return order === 'asc'
          ? first[sortBy].localeCompare(second[sortBy])
          : second[sortBy].localeCompare(first[sortBy]);

      case SortField.Age:
      case SortField.Married:
        return order === 'asc'
          ? first[sortBy] - second[sortBy]
          : second[sortBy] - first[sortBy];

      case SortField.AverageGrade:
        const firstGrades
          = first.grades.reduce((all, grade) => all + grade, 0);
        const secondGrades
          = second.grades.reduce((all, grade) => all + grade, 0);

        return order === 'asc'
          ? firstGrades / first.grades.length
            - secondGrades / second.grades.length
          : secondGrades / second.grades.length
            - firstGrades / first.grades.length;

      default:
        break;
    }
  });

  return clone;
}
