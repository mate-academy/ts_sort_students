
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const copiedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        copiedStudents.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        copiedStudents.sort((a, b) => b.name.localeCompare(a.name));
      }
      break;
    case SortType.Surname:
      if (order === 'asc') {
        copiedStudents.sort((a, b) => a.surname.localeCompare(b.surname));
      } else {
        copiedStudents.sort((a, b) => b.surname.localeCompare(a.surname));
      }
      break;
    case SortType.Age:
      if (order === 'asc') {
        copiedStudents.sort((a, b) => a.age - b.age);
      } else {
        copiedStudents.sort((a, b) => b.age - a.age);
      }
      break;
    case SortType.Married:
      if (order === 'asc') {
        copiedStudents.sort((a, b) => +a.married - +b.married);
      } else {
        copiedStudents.sort((a, b) => +b.married - +a.married);
      }
      break;
    case SortType.AverageGrade:
      if (order === 'asc') {
        copiedStudents.sort((a, b) => a.grades.reduce((sum, v) => sum + v)
        / a.grades.length
        - b.grades.reduce((sum, v) => sum + v)
        / b.grades.length);
      } else {
        copiedStudents.sort((a, b) => b.grades.reduce((sum, v) => sum + v)
        / b.grades.length
        - a.grades.reduce((sum, v) => sum + v)
        / a.grades.length);
      }
      break;
    default:
      break;
  }

  return copiedStudents;
}
