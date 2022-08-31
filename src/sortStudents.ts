
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

function calcAverage(points: number[]): number {
  return points.reduce((sum, point) => sum + point, 0) / points.length;
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  return copyStudents.sort((a, b) => {
    const studentA = a[sortBy];
    const studentB = b[sortBy];

    if (typeof studentA === 'number' && typeof studentB === 'number') {
      return order === 'asc' ? studentA - studentB : studentB - studentA;
    }

    if (typeof studentA === 'string' && typeof studentB === 'string') {
      return order === 'asc' ? studentA.localeCompare(studentB)
        : studentB.localeCompare(studentA);
    }

    if (typeof studentA === 'object' && typeof studentB === 'object') {
      return order === 'asc'
        ? calcAverage(studentA) - calcAverage(studentB)
        : calcAverage(studentB) - calcAverage(studentA);
    }

    if (typeof studentA === 'boolean' && typeof studentB === 'boolean') {
      return order === 'asc' ? +studentA - +studentB : +studentB - +studentA;
    }

    return 0;
  });
}
