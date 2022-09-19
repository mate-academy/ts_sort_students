
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

function getAverage(grades: number[]): number {
  return grades.reduce((sum, value) => sum + value, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        return sortedStudents.sort((a, b) => {
          return a[sortBy].localeCompare(b[sortBy]);
        });
      }

      return sortedStudents.sort((a, b) => {
        return b[sortBy].localeCompare(a[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      if (order === 'asc') {
        return sortedStudents.sort((a, b) => {
          return +a[sortBy] - +b[sortBy];
        });
      }

      return sortedStudents.sort((a, b) => {
        return +b[sortBy] - +a[sortBy];
      });

    case SortType.AverageGrade:
      if (order === 'asc') {
        return sortedStudents.sort((a, b) => {
          return getAverage(a[sortBy]) - getAverage(b[sortBy]);
        });
      }

      return sortedStudents.sort((a, b) => {
        return getAverage(b[sortBy]) - getAverage(a[sortBy]);
      });

    default:
      throw new Error('Invalid parameters received!');
  }
}
