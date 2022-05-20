
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
  let newArray: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      newArray = (order === 'asc' || order !== 'desc')
        ? newArray.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : newArray.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
      break;

    case SortType.Age:
      newArray = (order === 'asc' || order !== 'desc')
        ? newArray.sort((a, b) => a[sortBy] - b[sortBy])
        : newArray.sort((a, b) => b[sortBy] - a[sortBy]);
      break;

    case SortType.Married:
      newArray = (order === 'asc' || order !== 'desc')
        ? newArray.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]))
        : newArray.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));
      break;

    case SortType.AverageGrade:
      newArray = (order === 'asc' || order !== 'desc')
        ? newArray.sort((a, b) => (
          sortAverageGrade(a[sortBy]) - sortAverageGrade(b[sortBy])
        ))
        : newArray.sort((a, b) => (
          sortAverageGrade(b[sortBy]) - sortAverageGrade(a[sortBy])
        ));
      break;

    default: throw new Error('Error something went wrong');
  }

  return newArray;
}
