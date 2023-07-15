
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
  AverageGrade = 'averageGrade'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  function calculateAverage(grades: number[]):number {
    return grades.reduce((sum, x) => sum + x, 0) / grades.length;
  }

  copyStudents.sort((a, b) => {
    const sortA = order === 'asc' ? a : b;
    const sortB = order === 'asc' ? b : a;
    const marriedA = sortA.married ? 1 : 0;
    const marriedB = sortB.married ? 1 : 0;
    let averageA: number;
    let averageB: number;

    switch (sortBy) {
      case SortType.Age:
        return sortA.age - sortB.age;

      case SortType.Married:
        return marriedA - marriedB;

      case SortType.AverageGrade:
        averageA = calculateAverage(sortA.grades);
        averageB = calculateAverage(sortB.grades);

        return averageA - averageB;

      default:
        return sortA[sortBy].localeCompare(sortB[sortBy]);
    }
  });

  return copyStudents;
}
