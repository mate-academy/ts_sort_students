
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  return grades.reduce((prev, current) => prev + current, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
) : Student[] {
  const copyStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        copyStudents.sort((a: Student, b: Student) => (a.name)
          .localeCompare(b.name));
      } else {
        copyStudents.sort((a: Student, b: Student) => (b.name)
          .localeCompare(a.name));
      }
      break;

    case SortType.Surname:
      if (order === 'asc') {
        copyStudents.sort((a: Student, b: Student) => (a.surname)
          .localeCompare(b.surname));
      } else {
        copyStudents.sort((a: Student, b: Student) => (b.surname)
          .localeCompare(a.surname));
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
        copyStudents.sort((a, b) => getAverageGrade(a.grades)
          - getAverageGrade(b.grades));
      } else {
        copyStudents.sort((a, b) => getAverageGrade(b.grades)
        - getAverageGrade(a.grades));
      }
      break;
  }

  return copyStudents;
}
