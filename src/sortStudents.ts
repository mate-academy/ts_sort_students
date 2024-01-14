
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

function culcAverageGrade(grade: number[]): number {
  return grade.reduce((sum, x) => sum + x, 0) / grade.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
      sortedStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
      break;

    case SortType.Surname:
      sortedStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
      break;

    case SortType.Age:
      sortedStudents.sort((a, b) => b[sortBy] - a[sortBy]);
      break;

    case SortType.Married:
      sortedStudents.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));
      break;

    case SortType.AverageGrade:
      return sortedStudents.sort((a, b) => ((order === 'asc')
        ? culcAverageGrade(a[sortBy]) - culcAverageGrade(b[sortBy])
        : culcAverageGrade(b[sortBy]) - culcAverageGrade(a[sortBy])));

    default:
  }

  if (order !== 'asc') {
    return sortedStudents;
  }

  return sortedStudents.reverse();
}
