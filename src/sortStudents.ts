
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
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

function isMarried(boolean: boolean): number {
  if (boolean) {
    return 1;
  }

  return -1;
}

function average(grades: number[]): number {
  const sum: number = grades.reduce((prev, item) => prev + item);

  return sum / grades.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const sortedStudents: Student[] = [...students];
  let result: Student[] = [];

  if (order === 'asc') {
    switch (sortBy) {
      case SortType.Name:
        result = sortedStudents.sort((a: Student,
          b: Student) => a.name.localeCompare(b.name));
        break;
      case SortType.Surname:
        result = sortedStudents.sort((a: Student,
          b: Student) => a.surname.localeCompare(b.surname));
        break;
      case SortType.Age:
        result = sortedStudents.sort((a: Student,
          b: Student) => a.age - b.age);
        break;
      case SortType.Married:
        result = sortedStudents.sort((a: Student,
          b: Student) => isMarried(a.married) - isMarried(b.married));
        break;
      case SortType.AverageGrade:
        result = sortedStudents.sort((a: Student,
          b: Student) => average(a.grades) - average(b.grades));
        break;
      default:
        result = sortedStudents.sort((a: Student,
          b: Student) => a.name.localeCompare(b.name));
    }
  }

  if (order === 'desc') {
    switch (sortBy) {
      case SortType.Name:
        result = sortedStudents.sort((a: Student,
          b: Student) => b.name.localeCompare(a.name));
        break;
      case SortType.Surname:
        result = sortedStudents.sort((a: Student,
          b: Student) => b.surname.localeCompare(a.surname));
        break;
      case SortType.Age:
        result = sortedStudents.sort((a: Student,
          b: Student) => b.age - a.age);
        break;
      case SortType.Married:
        result = sortedStudents.sort((a: Student,
          b: Student) => isMarried(b.married) - isMarried(a.married));
        break;
      case SortType.AverageGrade:
        result = sortedStudents.sort((a: Student,
          b: Student) => average(b.grades) - average(a.grades));
        break;
      default:
        result = sortedStudents.sort((a: Student,
          b: Student) => a.name.localeCompare(b.name));
    }
  }

  return result;
}
