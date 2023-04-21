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
      switch (order) {
        case 'asc':
          copiedStudents.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'desc':
          copiedStudents.sort((a, b) => b.name.localeCompare(a.name));
          break;
        default:
          throw new Error(`Type 'asc' or 'desc' not ${order}`);
      }
      break;
    case SortType.Surname:
      switch (order) {
        case 'asc':
          copiedStudents.sort((a, b) => a.surname.localeCompare(b.surname));
          break;
        case 'desc':
          copiedStudents.sort((a, b) => b.surname.localeCompare(a.surname));
          break;
        default:
          throw new Error(`Type 'asc' or 'desc' not ${order}`);
      }
      break;
    case SortType.Age:
      switch (order) {
        case 'asc':
          copiedStudents.sort((a, b) => a.age - b.age);
          break;
        case 'desc':
          copiedStudents.sort((a, b) => b.age - a.age);
          break;
        default:
          throw new Error(`Type 'asc' or 'desc' not ${order}`);
      }
      break;
    case SortType.Married:
      switch (order) {
        case 'asc':
          copiedStudents.sort((a, b) => +a.married - +b.married);
          break;
        case 'desc':
          copiedStudents.sort((a, b) => +b.married - +a.married);
          break;
        default:
          throw new Error(`Type 'asc' or 'desc' not ${order}`);
      }
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
