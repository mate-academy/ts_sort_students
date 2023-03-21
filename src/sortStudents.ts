
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

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copiedStudent.sort((a, b) => {
        return chooseOrder
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });
      break;

    case SortType.Age:
    case SortType.Married:
      copiedStudent.sort((a, b) => {
        return chooseOrder
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      });
      break;

    case SortType.AverageGrade:
      copiedStudent.sort((a, b) => {
        return chooseOrder
          ? getAverage(a.grades) - getAverage(b.grades)
          : getAverage(b.grades) - getAverage(a.grades);
      });
      break;

    default: return copiedStudent;
  }

  return copiedStudent;
}
