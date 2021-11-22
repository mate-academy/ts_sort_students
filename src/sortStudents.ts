
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

  switch (sortBy) {
    case SortType.Name:
      result = sortedStudents.sort((a: Student,
        b: Student) => (order === 'asc') ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name));
      break;
    case SortType.Surname:
      result = sortedStudents.sort((a: Student,
        b: Student) => (order === 'asc') ? a.surname.localeCompare(b.surname)
        : b.surname.localeCompare(a.surname));
      break;
    case SortType.Age:
      result = sortedStudents.sort((a: Student,
        b: Student) => (order === 'asc') ? a.age - b.age
        : b.age - a.age);
      break;
    case SortType.Married:
      result = sortedStudents.sort((a: Student,
        b: Student) => (order === 'asc')
        ? isMarried(a.married) - isMarried(b.married)
        : isMarried(b.married) - isMarried(a.married));
      break;
    case SortType.AverageGrade:
      result = sortedStudents.sort((a: Student,
        b: Student) => (order === 'asc') ? average(a.grades) - average(b.grades)
        : average(b.grades) - average(a.grades));
      break;
    default:
      result = sortedStudents.sort((a: Student,
        b: Student) => (order === 'asc') ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name));
  }

  return result;
}
