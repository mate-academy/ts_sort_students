
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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copyArr = [...students];

  function aveGrade(arr: number[]): number {
    const ave = arr.reduce((prev: number, curr: number): number => {
      return prev + curr;
    }, 0);

    return ave / arr.length;
  }

  copyArr.sort((studentA: Student, studentB: Student): number => {
    if (sortBy === 'name' || sortBy === 'surname') {
      if (order === 'asc') {
        return studentA[sortBy].localeCompare(studentB[sortBy]);
      }

      if (order === 'desc') {
        return studentB[sortBy].localeCompare(studentA[sortBy]);
      }
    }

    if (sortBy === 'grades') {
      const aveGradeStudA = aveGrade(studentA[sortBy]);
      const aveGradeStudB = aveGrade(studentB[sortBy]);

      if (order === 'asc') {
        return aveGradeStudA - aveGradeStudB;
      }

      if (order === 'desc') {
        return aveGradeStudB - aveGradeStudA;
      }
    }

    if (sortBy === 'age') {
      if (order === 'asc') {
        return studentA[sortBy] - studentB[sortBy];
      }

      if (order === 'desc') {
        return studentB[sortBy] - studentA[sortBy];
      }
    }

    if (sortBy === 'married') {
      const marriedStatusA: number = studentA[sortBy] === true ? 1 : 0;
      const marriedStatusB: number = studentB[sortBy] === true ? 1 : 0;

      if (order === 'asc') {
        return marriedStatusA - marriedStatusB;
      }

      if (order === 'desc') {
        return marriedStatusB - marriedStatusA;
      }
    }

    return 0;
  });

  return copyArr;
}
