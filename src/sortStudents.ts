
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
  AverageGrade = 'averageGrade'
}

export type SortOrder = 'asc' | 'desc';

function avgGrades(arr: number[]): number {
  return arr.reduce((a: number, b: number): number => {
    return a + b;
  }, 0) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const res: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      res.sort((x, y): number => {
        return order === 'asc'
          ? x[sortBy].localeCompare(y[sortBy])
          : y[sortBy].localeCompare(x[sortBy]);
      });
      break;

    case SortType.Married:
    case SortType.Age:
      res.sort((x, y) => {
        return order === 'asc'
          ? +x[sortBy] - +y[sortBy]
          : +y[sortBy] - +x[sortBy];
      });
      break;

    case SortType.AverageGrade:
      res.sort((x: Student, y: Student): number => {
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

  return res;
}
