export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name= 'name',
  Surname= 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade'
}

export type SortOrder = 'asc' | 'desc';

function avgGrades(arr: number[]): number {
  return arr
    .reduce((a: number, b: number): number => {
      return a + b;
    }, 0) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:

      copy.sort((a, b) => {
        return order === 'asc'
          ? String(a[sortBy]).localeCompare(String(b[sortBy]))
          : String(b[sortBy]).localeCompare(String(a[sortBy]));
      });
      break;

    case SortType.Married:
    case SortType.Age:

      copy.sort((a, b) => {
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
      });
      break;

    case SortType.AverageGrade:

      copy.sort((x: Student, y: Student): number => {
        const one = avgGrades(x.grades);
        const two = avgGrades(y.grades);

        return order === 'asc'
          ? one - two
          : two - one;
      });
      break;

    default:
      return students;
  }

  return copy;
}
