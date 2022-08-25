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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsSorted = [...students];
  const direction: -1 | 1 = order === 'asc' ? 1 : -1;

  studentsSorted.sort((studA, studB): number => {
    const paramA = studA[sortBy];
    const paramB = studB[sortBy];
    let diff: number = 0;

    if (typeof paramA === 'number' && typeof paramB === 'number') {
      diff = paramA - paramB;
    }

    if (typeof paramA === 'string' && typeof paramB === 'string') {
      diff = paramA.localeCompare(paramB);
    }

    if (typeof paramA === 'boolean' && typeof paramB === 'boolean') {
      diff = Number(paramA) - Number(paramB);
    }

    if (Array.isArray(paramA) && Array.isArray(paramB)) {
      const getAverage = (param: number[]): number => (
        param.reduce((sum, num) => (sum + num), 0) / param.length
      );

      diff = getAverage(paramA) - getAverage(paramB);
    }

    return diff * direction;
  });

  return studentsSorted;
}
