
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

function getAverageGrade(grades: number[]): number {
  return grades.reduce((sum, x) => sum + x, 0) / grades.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType,
  order: SortOrder): object[] {
  const copyOfPeople = [...students];

  let result: object[];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      result = order === 'asc'
        ? copyOfPeople.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : copyOfPeople.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
      break;
    // case SortType.Age:
      // result = order === 'asc'
      // ? copyOfPeople.sort((a, b) => a[sortBy] - b[sortBy])
      // : copyOfPeople.sort((a, b) => b[sortBy] - a[sortBy]);
    // break;
    case SortType.AverageGrade:
      result = order === 'asc'
        ? copyOfPeople.sort((a, b) => getAverageGrade(a[sortBy])
        - getAverageGrade(b[sortBy]))
        : copyOfPeople.sort((a, b) => getAverageGrade(b[sortBy])
        - getAverageGrade(a[sortBy]));
      break;
    case SortType.Married:
    case SortType.Age:
      result = order === 'asc'
        ? copyOfPeople.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]))
        : copyOfPeople.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));

      break;
    default:
      return [];
  }

  return result;
}
