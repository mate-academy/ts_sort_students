
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const unsorted: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        unsorted
          .sort((a: Student, b: Student) => a[sortBy].localeCompare(b[sortBy]));
      }

      if (order === 'desc') {
        unsorted
          .sort((a: Student, b: Student) => b[sortBy].localeCompare(a[sortBy]));
      }
      break;

    case SortType.Age:
    case SortType.Married:
      if (order === 'asc') {
        unsorted.sort((a, b) => {
          return (+a[sortBy] - +b[sortBy]);
        });
      }

      if (order === 'desc') {
        unsorted.sort((a, b) => {
          return (+b[sortBy] - +a[sortBy]);
        });
      }
      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        unsorted.sort((a, b) => {
          const sumA = a[sortBy].reduce((x, y) => x + y);
          const sumB = b[sortBy].reduce((x, y) => x + y);

          return sumA / a.grades.length - sumB / b.grades.length;
        });
      }

      if (order === 'desc') {
        unsorted.sort((a, b) => {
          const sumA = a[sortBy].reduce((x, y) => x + y);
          const sumB = b[sortBy].reduce((x, y) => x + y);

          return sumB / b[sortBy].length - sumA / a[sortBy].length;
        });
      }
      break;

    default:
      break;
  }

  return unsorted;
}
