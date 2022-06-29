
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  return grades.reduce((prev, current) => prev + current, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        sortedStudents.sort((a: Student, b: Student) => {
          return a[sortBy].localeCompare(b[sortBy]);
        });
      } else {
        sortedStudents.sort((a: Student, b: Student) => {
          return b[sortBy].localeCompare(a[sortBy]);
        });
      }
      break;

    case SortType.Age:
      if (order === 'asc') {
        sortedStudents.sort((a: Student, b : Student) => {
          return a.age - b.age;
        });
      } else {
        sortedStudents.sort((a: Student, b : Student) => {
          return b.age - a.age;
        });
      }
      break;

    case SortType.Married:
      if (order === 'asc') {
        sortedStudents.sort((a: Student, b: Student) => {
          return +a.married - +b.married;
        });
      } else {
        sortedStudents.sort((a: Student, b: Student) => {
          return +b.married - +a.married;
        });
      }
      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        sortedStudents.sort((a: Student, b: Student) => {
          return getAverageGrade(a.grades) - getAverageGrade(b.grades);
        });
      } else {
        sortedStudents.sort((a: Student, b: Student) => {
          return getAverageGrade(b.grades) - getAverageGrade(a.grades);
        });
      }
      break;

    default:
      break;
  }

  return sortedStudents;
}
