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

export type SortCallBack = (a: Student, b: Student) => number;

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  function sortInOrder(num: number): number {
    return order === 'asc' ? num : -num;
  }

  function averageGrade(grades: number[]): number {
    return grades.reduce((acc, curr) => acc + curr, 0) / grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((a, b) => {
        return sortInOrder(a[sortBy].localeCompare(b[sortBy]));
      });
      break;
    case SortType.Age:
    case SortType.Married:
      studentsCopy.sort((a, b) => {
        return sortInOrder(Number(a[sortBy]) - Number(b[sortBy]));
      });
      break;
    case SortType.AverageGrade:
      studentsCopy.sort((a, b) => {
        return sortInOrder(averageGrade(a[sortBy]) - averageGrade(b[sortBy]));
      });
      break;
    default:
      throw new Error('Something wrong, I can feel it');
  }

  return studentsCopy;
}
