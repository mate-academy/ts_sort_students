
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

function sortAverageGrade(element: number[]): number {
  return element
    .reduce((sum, el) => sum + el, 0)
    / element.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newArray: Student[] = [...students];

  if (order === 'asc') {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        newArray.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
        break;

      case SortType.Age:
        newArray.sort((a, b) => a[sortBy] - b[sortBy]);
        break;

      case SortType.Married:
        newArray.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]));
        break;

      case SortType.AverageGrade:
        newArray.sort((a, b) => (
          sortAverageGrade(a[sortBy]) - sortAverageGrade(b[sortBy])
        ));
        break;

      default: break;
    }
  }

  if (order === 'desc') {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        newArray.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
        break;

      case SortType.Age:
        newArray.sort((a, b) => b[sortBy] - a[sortBy]);
        break;

      case SortType.Married:
        newArray.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));
        break;

      case SortType.AverageGrade:
        newArray.sort((a, b) => (
          sortAverageGrade(b[sortBy]) - sortAverageGrade(a[sortBy])
        ));
        break;

      default: break;
    }
  }

  return newArray;
}
