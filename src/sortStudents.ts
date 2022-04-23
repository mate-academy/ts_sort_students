
export interface Student {
  name: string;
  surname: string;
  age: 26;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function getAvGrade(arr: number[]): number {
  return arr.reduce((sum, curr) => sum + curr, 0) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyArr: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return (order === 'asc')
        ? copyArr.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : copyArr.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return (order === 'asc')
        ? copyArr.sort((a, b) => +(a[sortBy]) - +(b[sortBy]))
        : copyArr.sort((a, b) => +(b[sortBy]) - +(a[sortBy]));

    case SortType.AverageGrade:
      return (order === 'asc')
        ? copyArr.sort((a, b) => getAvGrade(a.grades) - getAvGrade(b.grades))
        : copyArr.sort((a, b) => getAvGrade(b.grades) - getAvGrade(a.grades));

    default:
      break;
  }

  return copyArr;
}
