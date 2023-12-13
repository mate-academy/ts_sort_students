
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

function calculateAverage(grades: number[]): number {
  return grades.reduce((acc, grade) => acc + grade, 0) / grades.length;
}

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  const sorted = [...students];

  const compare = (a: Student, b: Student): number => {
    let aVar: string | number | boolean | number[];
    let bVar: string | number | boolean | number[];

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
      case SortType.Age:
      case SortType.Married:

        aVar = a[sortBy as unknown as keyof Student];
        bVar = b[sortBy as unknown as keyof Student];

        break;

      case SortType.AverageGrade:
        aVar = calculateAverage(a.grades);

        bVar = calculateAverage(b.grades);
        break;
      default: throw new Error('Wrong sort type');
    }

    if (aVar < bVar) {
      return order === 'asc' ? -1 : 1;
    }

    if (aVar > bVar) {
      return order === 'asc' ? 1 : -1;
    }

    return 0;
  };

  return sorted.sort(compare);
}
