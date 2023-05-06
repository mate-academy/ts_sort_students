/* eslint-disable max-len */

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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents : Student[] = [...students];

  const averageGrade = (grades: number[]): number => {
    return grades.reduce((prev, cur) => prev + cur, 0) / grades.length;
  };

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyStudents.sort((firstStudent: Student, secondStudent: Student) => (
        order === 'asc'
          ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
          : secondStudent[sortBy].localeCompare(firstStudent[sortBy])
      ));
      break;

    case SortType.Age:
    case SortType.Married:
      copyStudents.sort((firstStudent: Student, secondStudent: Student) => (
        order === 'asc'
          ? +firstStudent[sortBy] - +secondStudent[sortBy]
          : +secondStudent[sortBy] - +firstStudent[sortBy]
      ));
      break;

    case SortType.AverageGrade:
      copyStudents.sort((a, b) => (
        order === 'asc'
          ? averageGrade(a.grades) - averageGrade(b.grades)
          : averageGrade(b.grades) - averageGrade(a.grades)
      ));
      break;

    default:
      throw new Error('Error...');
  }

  return copyStudents;
}
