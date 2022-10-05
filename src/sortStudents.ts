
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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  let sortingCallback: (a: Student, b: Student) => number;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortingCallback = order === 'asc'
        ? (a, b): number => a[sortBy].localeCompare(b[sortBy])
        : (a, b): number => b[sortBy].localeCompare(a[sortBy]);
      break;

    case SortType.Age:
    case SortType.Married:
      sortingCallback = order === 'asc'
        ? (a, b): number => Number(a[sortBy]) - Number(b[sortBy])
        : (a, b): number => Number(b[sortBy]) - Number(a[sortBy]);
      break;

    case SortType.AverageGrade:
      sortingCallback = (a, b): number => {
        const averageGradeA = a[sortBy]
          .reduce((total, current) => total + current) / a[sortBy].length;
        const averageGradeB = b[sortBy]
          .reduce((total, current) => total + current) / b[sortBy].length;

        if (order === 'asc') {
          return averageGradeA - averageGradeB;
        }

        return averageGradeB - averageGradeA;
      };
      break;

    default:
      throw new Error('Wrong type!');
  }

  return studentsCopy.sort(sortingCallback);
}
