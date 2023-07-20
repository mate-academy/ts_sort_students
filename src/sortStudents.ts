
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyStudents.sort((a, b) => {
        return (order === 'desc')
          ? b[sortBy].localeCompare(a[sortBy])
          : a[sortBy].localeCompare(b[sortBy]);
      });
      break;

    case SortType.Age:
    case SortType.Married:
      copyStudents.sort((a, b) => {
        return (order === 'desc')
          ? Number(b[sortBy]) - Number(a[sortBy])
          : Number(a[sortBy]) - Number(b[sortBy]);
      });
      break;

    case SortType.AverageGrade:
      copyStudents.sort((a, b) => {
        const bAverage = b.grades.reduce((x, y) => x + y, 0) / b.grades.length;
        const aAverage = a.grades.reduce((x, y) => x + y, 0) / a.grades.length;

        return order === 'desc' ? bAverage - aAverage : aAverage - bAverage;
      });
      break;

    default:
      break;
  }

  return copyStudents;
}
