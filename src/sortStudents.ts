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
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copyStudents = students.map((student) => {
    return { ...student };
  });

  copyStudents.sort((a: Student, b: Student): number => {
    let result;
    let value1 = a[sortBy];
    let value2 = b[sortBy];

    if (order === 'desc') {
      value1 = b[sortBy];
      value2 = a[sortBy];
    }

    if (typeof value1 === 'number' && typeof value2 === 'number') {
      result = value1 - value2;
    }

    if (typeof value1 === 'string' && typeof value2 === 'string') {
      result = value1.localeCompare(value2);
    }

    if (typeof value1 === 'boolean' && typeof value2 === 'boolean') {
      result = Number(value1) - Number(value2);
    }

    if (Array.isArray(value1) && Array.isArray(value2)) {
      const average1
        = value1.reduce((num1, num2) => (num1 + num2)) / value1.length;
      const average2
        = value2.reduce((num1, num2) => (num1 + num2)) / value2.length;

      result = average1 - average2;
    }

    return result;
  });

  return copyStudents;
}
