
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

export type SortOrder = 'asc' | 'desc';

function averGrades(copyStudents: Student[], order: 'asc' | 'desc'): Student[] {
  copyStudents.sort((a, b) => {
    const bAverage = b.grades.reduce((x, y) => x + y, 0) / b.grades.length;
    const aAverage = a.grades.reduce((x, y) => x + y, 0) / a.grades.length;

    if (order === 'desc') {
      return bAverage - aAverage;
    }

    return aAverage - bAverage;
  });

  return copyStudents;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
      break;

    case SortType.Age:
      copyStudents.sort((a, b) => b[sortBy] - a[sortBy]);
      break;

    case SortType.Married:
      copyStudents.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));
      break;

    case SortType.AverageGrade:
      averGrades(copyStudents, order);
      break;

    default:
      break;
  }

  return copyStudents;
}
