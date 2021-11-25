
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const cloneStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      cloneStudents.sort((a: Student, b: Student) => {
        if (order === 'asc') {
          return a[sortBy].localeCompare(b[sortBy]);
        }

        return b[sortBy].localeCompare(a[sortBy]);
      });
      break;
    case SortType.Age:
    case SortType.Married:
      cloneStudents.sort((a: Student, b: Student) => {
        if (order === 'asc') {
          return +a[sortBy] - +b[sortBy];
        }

        return +b[sortBy] - +a[sortBy];
      });
      break;
    case SortType.AverageGrade:
      cloneStudents.sort((a: Student, b: Student) => {
        if (order === 'asc') {
          return (
            a[sortBy].reduce((sum, current) => sum + current, 0)
            / a[sortBy].length
            - b[sortBy].reduce((sum, current) => sum + current, 0)
            / b[sortBy].length
          );
        }

        return (
          b[sortBy].reduce((sum, current) => sum + current, 0)
          / b[sortBy].length
          - a[sortBy].reduce((sum, current) => sum + current, 0)
          / a[sortBy].length
        );
      });
      break;
    default:
      break;
  }

  return cloneStudents;
}
