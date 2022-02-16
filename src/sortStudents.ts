
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function average(array: number[]): number {
  return (array.reduce((sum, el) => sum + el, 0)) / array.length;
}

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  const copyStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return (order === 'asc')
        ? copyStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : copyStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
    case SortType.Age:
      return (order === 'asc')
        ? copyStudents.sort((a, b) => a[sortBy] - b[sortBy])
        : copyStudents.sort((a, b) => b[sortBy] - a[sortBy]);
    case SortType.Married:
      return (order === 'asc')
        ? copyStudents.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]))
        : copyStudents.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));
    case SortType.AverageGrade:
      return (order === 'asc')
        ? copyStudents.sort((a, b) => average(a[sortBy]) - average(b[sortBy]))
        : copyStudents.sort((a, b) => average(b[sortBy]) - average(a[sortBy]));
    default:
      break;
  }

  return copyStudents;
}
