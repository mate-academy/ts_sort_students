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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsArray: Student[] = [...students];

  function averAge(ageArray: number[]): number {
    return ageArray.reduce((sum, item) => sum + item) / ageArray.length;
  }

  function callBack(a: Student, b: Student): number {
    const first = (order === 'asc') ? a[sortBy] : b[sortBy];
    const second = (order === 'asc') ? b[sortBy] : a[sortBy];

    switch (sortBy) {
      case SortType.Married:
        return Number(first) - Number(second);

      case SortType.AverageGrade:
        return averAge(first) - averAge(second);

      case SortType.Surname:
      case SortType.Name:
        return first.localeCompare(second);

      default:
        return first - second;
    }
  }

  return studentsArray.sort(callBack);
}
