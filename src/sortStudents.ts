/* eslint-disable @typescript-eslint/brace-style */
/* eslint-disable no-nested-ternary */
/* eslint-disable brace-style */
/* eslint-disable max-len */

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

function calculateAverage(grades: number[]): number {
  return grades.reduce((total, grade) => total + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
) : Student[]
{
  const copiedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copiedStudents.sort((first, second) => (
        order === 'asc'
          ? first[sortBy].localeCompare(second[sortBy])
          : second[sortBy].localeCompare(first[sortBy])));
      break;

    // That looks more complicated than before
    case SortType.Age:
    case SortType.Married:
      copiedStudents.sort((first, second) => {
        const valueA = typeof first[sortBy] === 'number' ? first[sortBy] : first[sortBy] ? 1 : 0;
        const valueB = typeof second[sortBy] === 'number' ? second[sortBy] : second[sortBy] ? 1 : 0;

        // Also trigger on ValueA / ValueB
        // The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.ts(2362)
        return order === 'asc' ? valueA - valueB : valueB - valueA;
      });
      break;

    case SortType.AverageGrade:
      copiedStudents.sort((a, b) => {
        const averageA = calculateAverage(a.grades);
        const averageB = calculateAverage(b.grades);

        return order === 'asc' ? averageA - averageB : averageB - averageA;
      });
      break;

    default:
      break;
  }

  return copiedStudents;
}
