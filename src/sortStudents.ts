// import { type } from "os";

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

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  const copyOfStudents: Student[] = [];

  students.forEach((item) => copyOfStudents.push({ ...item }));

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyOfStudents.sort((a: Student, b: Student): number => {
        if (order === 'asc') {
          return a[sortBy] >= b[sortBy]
            ? 1
            : -1;
        }

        if (order === 'desc') {
          return b[sortBy] >= a[sortBy]
            ? 1
            : -1;
        }

        return 0;
      });
      break;

    case SortType.Married:
    case SortType.Age:
      copyOfStudents.sort((a: Student, b: Student): number => {
        if (order === 'asc') {
          return a[sortBy] >= b[sortBy]
            ? 1
            : -1;
        }

        if (order === 'desc') {
          return b[sortBy] >= a[sortBy]
            ? 1
            : -1;
        }

        return 0;
      });
      break;

    case SortType.AverageGrade:
      copyOfStudents.sort((a: Student, b: Student):number => {
        const avarSumOne = a.grades.reduce((acc, mark) => acc + mark)
      / a.grades.length;
        const avarSumTwo = b.grades.reduce((acc, mark) => acc + mark)
      / b.grades.length;

        if (order === 'asc') {
          return avarSumOne >= avarSumTwo
            ? 1
            : -1;
        }

        if (order === 'desc') {
          return avarSumTwo >= avarSumOne
            ? 1
            : -1;
        }

        return 0;
      });
      break;

    default:
      throw new Error('not correct sort style');
  }

  return copyOfStudents;
}
