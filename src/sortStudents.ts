
export interface Student {
  [key: string]: string | number | boolean | number[],
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number []
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function calculateAverage(array: number[]):number {
  const sum = array.reduce((acc:number, curr:number) => acc + curr, 0);

  return (sum / array.length) || 0;
}

export function sortStudents(
  students: Student [],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students]
    .sort((a: Student, b: Student) => {
      const firstStudent = a[sortBy];
      const secondStudent = b[sortBy];
      const sortDirection = order === 'asc' ? 1 : -1;

      if (typeof firstStudent === 'string'
      && typeof secondStudent === 'string') {
        return sortDirection * firstStudent.localeCompare(secondStudent);
      }

      if (typeof firstStudent === 'number'
      && typeof secondStudent === 'number') {
        return sortDirection * (firstStudent - secondStudent);
      }

      if (typeof firstStudent === 'boolean'
      && typeof secondStudent === 'boolean') {
        return sortDirection * (+firstStudent - +secondStudent);
      }

      if (Array.isArray(firstStudent) && Array.isArray(secondStudent)) {
        const averageFirst = calculateAverage(firstStudent);
        const averageSecond = calculateAverage(secondStudent);

        return sortDirection * (averageFirst - averageSecond);
      }

      return 1;
    });
}
