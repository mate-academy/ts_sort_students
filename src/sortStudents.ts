
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

function average(arr: number[]): number {
  return arr.reduce((sum, grade) => sum + grade, 0) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newArrOfStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      newArrOfStudents.sort((a, b) => (order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy])
      ));
      break;

    case SortType.Age:
    case SortType.Married:
      newArrOfStudents.sort((a, b) => (order === 'asc'
        ? +a[sortBy] - +b[sortBy]
        : +b[sortBy] - +a[sortBy]
      ));
      break;

    case SortType.AverageGrade:
      // eslint-disable-next-line max-len
      newArrOfStudents.sort((a, b) => (order === 'asc'
        ? average(a[sortBy]) - average(b[sortBy])
        : average(b[sortBy]) - average(a[sortBy])
      ));
      break;

    default:
      break;
  }

  return newArrOfStudents;
}
