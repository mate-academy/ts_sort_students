/* eslint-disable no-case-declarations */

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
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyArr = [...students];

  function averageGrade(arr: number[]): number {
    const sumOfGrades = arr.reduce((prev: number, curr: number): number => {
      return prev + curr;
    }, 0);

    return sumOfGrades / arr.length;
  }

  function compareNumberType(prop1: number, prop2: number): number {
    if (order === 'asc') {
      return prop1 - prop2;
    }

    if (order === 'desc') {
      return prop2 - prop1;
    }

    return 0;
  }

  copyArr.sort((studentA: Student, studentB: Student): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        if (order === 'asc') {
          return studentA[sortBy].localeCompare(studentB[sortBy]);
        }

        if (order === 'desc') {
          return studentB[sortBy].localeCompare(studentA[sortBy]);
        }
        break;

      case SortType.AverageGrade:
        const aveGradeStudA = averageGrade(studentA[sortBy]);
        const aveGradeStudB = averageGrade(studentB[sortBy]);

        return compareNumberType(aveGradeStudA, aveGradeStudB);

      case SortType.Age:
        return compareNumberType(studentA.age, studentB.age);

      case SortType.Married:
        const marriedStatusA: number = studentA[sortBy] === true ? 1 : 0;
        const marriedStatusB: number = studentB[sortBy] === true ? 1 : 0;

        return compareNumberType(marriedStatusA, marriedStatusB);

      default:
        break;
    }

    return 0;
  });

  return copyArr;
}
