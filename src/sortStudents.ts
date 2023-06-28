
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

function getAverage(arr: number[]): number {
  return arr.reduce((a: number, b: number) => a + b) / arr.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
) : Student[] {
  const result = [...students];

  switch (sortBy) {
    case 'name':
    case 'surname':
      return order === 'asc'
        ? result
          .sort((a: Student, b: Student) => a[sortBy].localeCompare(b[sortBy]))
        : result
          .sort((a: Student, b: Student) => b[sortBy].localeCompare(a[sortBy]));

    case 'age':
    case 'married':
      return order === 'asc'
        ? result
          .sort((a: Student, b: Student) => +a[sortBy] - +b[sortBy])
        : result
          .sort((a: Student, b: Student) => +b[sortBy] - +a[sortBy]);

    case 'grades':
      return order === 'asc'
        ? result
          .sort((a: Student, b: Student) => getAverage(a.grades)
          - getAverage(b.grades))
        : result
          .sort((a: Student, b: Student) => getAverage(b.grades)
          - getAverage(a.grades));
    default:
      break;
  }

  return result;
}
