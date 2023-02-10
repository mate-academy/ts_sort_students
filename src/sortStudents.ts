
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyArray: Student[] = [...students];

  function averageGrade(arr: number[]): number {
    return arr.reduce((a: number, b: number) => a + b, 0) / arr.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyArray.sort((a, b) => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });
      break;
    case SortType.Age:
    case SortType.Married:
      copyArray.sort((a, b) => {
        return order === 'asc'
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);
      });
      break;
    case SortType.AverageGrade:
      copyArray.sort((a, b) => {
        return order === 'asc'
          ? averageGrade(a.grades) - averageGrade(b.grades)
          : averageGrade(b.grades) - averageGrade(a.grades);
      });
      break;
    default:
      return copyArray;
  }

  return copyArray;
}
