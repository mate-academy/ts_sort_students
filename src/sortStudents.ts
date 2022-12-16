
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
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function calcAvgGrade(gradesArr: number[]): number {
  return gradesArr.reduce((x, y) => x + y, 0) / gradesArr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyOfStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copyOfStudents.sort((a, b) => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return copyOfStudents.sort((a, b) => {
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
      });

    case SortType.AverageGrade:
      return copyOfStudents.sort((a, b) => {
        return order === 'asc'
          ? calcAvgGrade(a[sortBy]) - calcAvgGrade(b[sortBy])
          : calcAvgGrade(b[sortBy]) - calcAvgGrade(a[sortBy]);
      });

    default:
      break;
  }

  return copyOfStudents;
}
