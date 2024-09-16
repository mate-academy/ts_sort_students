
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

function calcAverage(grades: number[]): number {
  return grades.reduce((sum, num) => sum + num, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? [...students].sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : [...students].sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? [...students].sort((a, b) => +a[sortBy] - +b[sortBy])
        : [...students].sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade: {
      return order === 'asc'
        ? studentsCopy.sort((a, b) => {
          return calcAverage(a[sortBy]) - calcAverage(b[sortBy]);
        })
        : studentsCopy.sort((a, b) => {
          return calcAverage(b[sortBy]) - calcAverage(a[sortBy]);
        });
    }

    default:
      return studentsCopy;
  }
}
