
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

function getAverage(arr: Student): number {
  const average = arr.grades.reduce((a: number, b: number) => a + b, 0);

  return average / arr.grades.length;
}

export function sortStudents(
  students: Student,
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  copyStudents.sort((studentA, studentB) => {
    let a = studentA;
    let b = studentB;

    if (order === 'desc') {
      a = studentB;
      b = studentA;
    }

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return a[sortBy].localeCompare(b[sortBy]);

      case SortType.Age:
        return a[sortBy] - b[sortBy];

      case SortType.Married:
        return +a[sortBy] - +b[sortBy];

      case SortType.AverageGrade:
        return getAverage(a) - getAverage(b);

      default:
        return 0;
    }
  });

  return copyStudents;
}
