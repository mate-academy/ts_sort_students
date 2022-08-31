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

const calcAver = (grades: number[]): number => grades
  .reduce((prev, sum) => prev + sum) / grades.length;

export function sortStudents(
  students: Student[],
  sortBy : SortType,
  order: SortOrder,
): Student[] {
  const copyArr = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copyArr.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : copyArr.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? copyArr.sort((a, b) => +a[sortBy] - +b[sortBy])
        : copyArr.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? copyArr.sort((a, b) => calcAver(a[sortBy]) - calcAver(b[sortBy]))
        : copyArr.sort((a, b) => calcAver(b[sortBy]) - calcAver(a[sortBy]));

    default:
      throw new Error('Oops! Something went wrong');
  }
}
