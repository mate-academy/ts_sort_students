// import { error } from 'console';

export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
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
  // write your function
  const copiedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
      copiedStudents.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case SortType.Surname:
      copiedStudents.sort((a, b) => a.surname.localeCompare(b.surname));
      break;
    case SortType.Age:
      copiedStudents.sort((a, b) => b.age - a.age);
      break;
    case SortType.Married:
      copiedStudents.sort((a, b) => +b.married - +a.married);
      break;
    case SortType.AverageGrade:
      switch (order) {
        case 'asc': {
          copiedStudents.sort((a, b) => (a.grades
            .reduce((sum, num) => sum + num, 0) / a.grades.length) - (b.grades
            .reduce((sum, num) => sum + num, 0) / b.grades.length));
          break;
        }

        case 'desc': {
          copiedStudents.sort((a, b) => (b.grades
            .reduce((sum, num) => sum + num, 0) / b.grades.length) - (a.grades
            .reduce((sum, num) => sum + num, 0) / a.grades.length));
          break;
        }
        default:
          throw new Error(`Type 'asc' or 'desc' not ${order}`);
      }
      break;
    default:
      throw new Error('Unsupported sort type');
  }

  return copiedStudents;
}
