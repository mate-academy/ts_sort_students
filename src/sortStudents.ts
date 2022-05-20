
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
    if (sortBy === SortType.Name || sortBy === SortType.Surname) {
      newArray.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    }

    if (sortBy === SortType.Age) {
      newArray.sort((a, b) => a[sortBy] - b[sortBy]);
    }

    if (sortBy === SortType.Married) {
      newArray.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]));
    }

    if (sortBy === SortType.AverageGrade) {
      newArray.sort((a, b) => (
        sortAverageGrade(a[sortBy]) - sortAverageGrade(b[sortBy])
      ));
    }
  }

  if (order === 'desc') {
    if (sortBy === SortType.Name || sortBy === SortType.Surname) {
      newArray.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
    }

    if (sortBy === SortType.Age) {
      newArray.sort((a, b) => b[sortBy] - a[sortBy]);
    }

    if (sortBy === SortType.Married) {
      newArray.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));
    }

    if (sortBy === SortType.AverageGrade) {
      newArray.sort((a, b) => (
        sortAverageGrade(b[sortBy]) - sortAverageGrade(a[sortBy])
      ));
    }
  }

  return newArray;
}
