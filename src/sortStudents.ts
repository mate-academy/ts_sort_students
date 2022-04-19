
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
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
  // write your function
  const result: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      result.sort((x, y): number => {
        return order === 'asc'
          ? x[sortBy].localeCompare(y[sortBy])
          : y[sortBy].localeCompare(x[sortBy]);
      });
      break;

    case SortType.Married:
    case SortType.Age:
      result.sort((x, y) => {
        return order === 'asc'
          ? +x[sortBy] - +y[sortBy]
          : +y[sortBy] - +x[sortBy];
      });
      break;

    case SortType.AverageGrade:
      result.sort((x: Student, y: Student): number => {
        const first = avgGrades(x.grades);
        const second = avgGrades(y.grades);

        return order === 'asc'
          ? first - second
          : second - first;
      });
      break;

    default:
      return students;
  }

  return result;
}
