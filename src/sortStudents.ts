
export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function averageGrade(grades: number[]): number {
  const total = grades.reduce((sum: number, gr: number) => sum + gr);

  return total / grades.length;
}

type SortCallBack = (first: Student, second: Student) => number;

function sortingCallBack(
  sortBy: SortType,
): SortCallBack {
  switch (sortBy) {
    case SortType.Name:
      return (first: Student, second: Student): number => {
        return first.name.localeCompare(second.name);
      };

    case SortType.Surname:
      return (first: Student, second: Student): number => {
        return first.surname.localeCompare(second.surname);
      };

    case SortType.Age:
      return (first: Student, second: Student): number => {
        return first.age - second.age;
      };

    case SortType.Married:
      return (first: Student, second: Student): number => {
        return Number(first.married) - Number(second.married);
      };

    case SortType.AverageGrade:
      return (first: Student, second: Student): number => {
        return averageGrade(first.grades) - averageGrade(second.grades);
      };

    default:
      return (first: Student, second: Student): number => {
        return Number(first.name) - Number(second.name);
      };
  }
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
):Student[] {
  const sortedStudents: Student[] = [...students];

  sortedStudents.sort(sortingCallBack(sortBy));

  if (order === 'desc') {
    sortedStudents.reverse();
  }

  return sortedStudents;
}
