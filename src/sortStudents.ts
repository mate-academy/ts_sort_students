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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  copyStudents.sort((a, b) => {
    if (order === 'asc') {
      switch (sortBy) {
        case SortType.Name:
          return a.name.localeCompare(b.name);
        case SortType.Surname:
          return a.surname.localeCompare(b.surname);
        case SortType.Age:
          return a.age - b.age;
        case SortType.Married:
          return +a.married - +b.married;

        case SortType.AverageGrade: {
          const firstNum = a.grades.reduce((prev, next) => {
            return prev + next;
          }, 0) / a.grades.length;
          const secondNum = b.grades.reduce((prev, next) => {
            return prev + next;
          }, 0) / b.grades.length;

          return firstNum - secondNum;
        }
        default:
          return 0;
      }
    } else {
      switch (sortBy) {
        case SortType.Name:
          return b.name.localeCompare(a.name);
        case SortType.Surname:
          return b.surname.localeCompare(a.surname);
        case SortType.Age:
          return b.age - a.age;
        case SortType.Married:
          return +b.married - +a.married;

        case SortType.AverageGrade: {
          const firstNum = a.grades.reduce((prev, next) => {
            return prev + next;
          }, 0) / a.grades.length;
          const secondNum = b.grades.reduce((prev, next) => {
            return prev + next;
          }, 0) / b.grades.length;

          return secondNum - firstNum;
        }
        default:
          return 0;
      }
    }
  });

  return copyStudents;
}
