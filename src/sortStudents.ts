// import { SrvRecord } from "dns";

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

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(student: Student): number {
  return (student.grades.reduce((acum, item) => acum + item, 0))
  / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const asc = order === 'asc';
  const newArrayStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return newArrayStudents.sort(
        (a: Student, b: Student) => {
          return asc
            ? a[sortBy].localeCompare(b[sortBy])
            : b[sortBy].localeCompare(a[sortBy]);
        },
      );

    case SortType.Age:
    case SortType.Married:
      return newArrayStudents.sort(
        (a: Student, b: Student) => {
          return asc
            ? +a[sortBy] - +b[sortBy]
            : +b[sortBy] - +a[sortBy];
        },
      );

    case SortType.AverageGrade:
      return newArrayStudents.sort(
        (a: Student, b: Student) => {
          return asc
            ? getAverageGrade(a) - getAverageGrade(b)
            : getAverageGrade(b) - getAverageGrade(a);
        },
      );

    default:
      return newArrayStudents;
  }
}
