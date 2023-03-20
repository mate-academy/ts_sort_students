
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
  AverageGrade = 'AverageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(item: number[]): number {
  return item.reduce((sum: number, el: number) => sum + el, 0)
  / item.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedStudents = [...students];
  const flag: number = order === 'asc' ? 1 : -1;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copiedStudents.sort(
        (a: Student, b: Student) => a[sortBy].localeCompare(b[sortBy]) * flag,
      );
      break;
    case SortType.Age:
      copiedStudents.sort(
        (a: Student, b: Student) => (a[sortBy] - b[sortBy]) * flag,
      );
      break;
    case SortType.AverageGrade:
      copiedStudents.sort((a: Student, b: Student) => {
        const curr: number
          = getAverageGrade(a.grades);
        const next: number
          = getAverageGrade(b.grades);

        return (curr - next) * flag;
      });
      break;

    case SortType.Married:
      copiedStudents.sort(
        (a: Student, b: Student) => (+a.married - +b.married) * flag,
      );
      break;

    default:
      break;
  }

  return copiedStudents;
}
