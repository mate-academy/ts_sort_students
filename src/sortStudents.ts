
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverage(array: number[]): number {
  return array.reduce((a, b) => a + b) / array.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortType,
): Student[] {
  const copiedStudent: Student[] = [...students];
  const chooseOrder: boolean = order === 'asc';

  copiedStudent.sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return chooseOrder
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return chooseOrder
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];

      case SortType.AverageGrade:
        return chooseOrder
          ? getAverage(a.grades) - getAverage(b.grades)
          : getAverage(b.grades) - getAverage(a.grades);

      default: return copiedStudent;
    }
  });

  return copiedStudent;
}
