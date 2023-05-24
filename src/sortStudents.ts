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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  type SortFunctionType = (a: Student, b: Student) => number;

  const localStudents = [...students];

  let sortFunction: SortFunctionType = (a, b) => {
    return a.age - b.age;
  };

  switch (sortBy) {
    default:
    case SortType.Age:
      if (order === 'desc') {
        sortFunction = (a, b): number => {
          return b.age - a.age;
        };
      }
      break;
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        sortFunction = (a, b): number => {
          return a[sortBy].localeCompare(b[sortBy]);
        };
      } else {
        sortFunction = (a, b): number => {
          return b[sortBy].localeCompare(a[sortBy]);
        };
      }
      break;
    case SortType.Married:
      if (order === 'asc') {
        sortFunction = (a, b): number => {
          return +a.married - +b.married;
        };
      } else {
        sortFunction = (a, b): number => {
          return +b.married - +a.married;
        };
      }
      break;
    case SortType.AverageGrade:
      if (order === 'asc') {
        sortFunction = (a, b): number => {
          return (a.grades.reduce((p, c) => p + c, 0) / a.grades.length)
            - (b.grades.reduce((p, c) => p + c, 0) / b.grades.length);
        };
      } else {
        sortFunction = (a, b): number => {
          return (b.grades.reduce((p, c) => p + c, 0) / b.grades.length)
            - (a.grades.reduce((p, c) => p + c, 0) / a.grades.length);
        };
      }
      break;
  }

  return localStudents.sort(sortFunction);
}
