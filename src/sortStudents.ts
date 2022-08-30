
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

function calcAverage(grades: number[]): number {
  return grades.reduce((sum, value) => sum + value) / grades.length;
}

export function sortStudents(
  students: object[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyObj: Student[] = [...students];

  switch (sortBy) {
    case SortType.AverageGrade:
      return order === 'asc'
        ? copyObj.sort(
          (a, b) => calcAverage(a[sortBy]) - calcAverage(b[sortBy]),
        )
        : copyObj.sort(
          (a, b) => calcAverage(b[sortBy]) - calcAverage(a[sortBy]),
        );

    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copyObj.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : copyObj.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? copyObj.sort((a, b) => +a[sortBy] - +b[sortBy])
        : copyObj.sort((a, b) => +b[sortBy] - +a[sortBy]);

    default: break;
  }

  return copyObj;
}
