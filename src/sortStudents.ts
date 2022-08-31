/* eslint-disable */

export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

interface StudentCopy extends Student {
  ag: number,
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'ag',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] | StudentCopy[] {
  const studentsCopy: StudentCopy[] = [...students]
    .map((student) => ({...student, ag: student.grades.reduce((prev, cur) => prev + cur) / student.grades.length}));

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsCopy.sort((prev, cur) => order === 'asc'
        ? prev[sortBy].localeCompare(cur[sortBy])
        : cur[sortBy].localeCompare(prev[sortBy]));

    case SortType.Age:
    case SortType.Married:
    case SortType.AverageGrade:
      return studentsCopy.sort((prev, cur) => order === 'asc'
        ? +prev[sortBy] - +cur[sortBy]
        : +cur[sortBy] - +prev[sortBy]);

    default:
      return students;
  }
}
