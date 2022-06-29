
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

function getMiddleGrade(grades: number[]): number {
  return grades.reduce((prev, current) => prev + current, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        copyStudents.sort((a: Student, b: Student) => a[sortBy]
          .localeCompare(b[sortBy]));
      } else {
        copyStudents.sort((a: Student, b: Student) => b[sortBy]
          .localeCompare(a[sortBy]));
      }
      break;
    case SortType.Age:
      if (order === 'asc') {
        copyStudents.sort((a, b) => a.age - b.age);
      } else {
        copyStudents.sort((a, b) => b.age - a.age);
      }
      break;
    case SortType.Married:
      if (order === 'asc') {
        copyStudents.sort(
          (a, b) => Number(a.married) - Number(b.married),
        );
      } else {
        copyStudents.sort(
          (a, b) => Number(b.married) - Number(a.married),
        );
      }

      break;

    default:
      if (order === 'asc') {
        copyStudents.sort((a, b) => getMiddleGrade(a.grades)
          - getMiddleGrade(b.grades));
      } else {
        copyStudents.sort((a, b) => getMiddleGrade(b.grades)
        - getMiddleGrade(a.grades));
      }

      break;
  }

  return copyStudents;
}
