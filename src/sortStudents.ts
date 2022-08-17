
export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[]
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  let flag: number = 1;

  if (order === 'desc') {
    flag = -1;
  }

  let callback: (a: Student, b: Student) => number;

  switch (sortBy) {
    case SortType.Age:
      callback = (a, b): number => a.age - b.age;
      break;

    case SortType.Married:
      callback = (a, b): number => +a.married - +b.married;
      break;

    case SortType.AverageGrade:
      callback = (a, b): number => {
        const reduceCallback
          = (sum: number, grade: number): number => sum + grade;

        return a.grades.reduce(reduceCallback) / a.grades.length
          - b.grades.reduce(reduceCallback) / b.grades.length;
      };
      break;

    case SortType.Name:
      callback = (a, b): number => a.name.localeCompare(b.name);
      break;

    default:
      callback = (a, b): number => a.surname.localeCompare(b.surname);
  }

  return [...students].sort((a, b) => callback(a, b) * flag);
}
