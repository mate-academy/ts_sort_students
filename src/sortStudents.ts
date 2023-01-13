/* eslint-disable max-len */

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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  return grades.reduce((a, b) => a + b, 0) / grades.length;
}

export function sortStudents(students: Student[], sortBy: SortType, order: SortOrder): Student[] {
  const copyStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyStudents.sort((previousStudent, currentStudent) => {
        return order === 'asc'
          ? previousStudent[sortBy].localeCompare(currentStudent[sortBy])
          : currentStudent[sortBy].localeCompare(previousStudent[sortBy]);
      });
      break;

    case SortType.Age:
      copyStudents.sort((previousStudent, currentStudent) => {
        return order === 'asc'
          ? previousStudent[sortBy] - currentStudent[sortBy]
          : currentStudent[sortBy] - previousStudent[sortBy];
      });
      break;

    case SortType.Married:
      copyStudents.sort((previousStudent, currentStudent) => {
        return order === 'asc'
          ? Number(previousStudent[sortBy]) - Number(currentStudent[sortBy])
          : Number(currentStudent[sortBy]) - Number(previousStudent[sortBy]);
      });
      break;

    case SortType.AverageGrade:
      copyStudents.sort((previousStudent, currentStudent) => {
        return order === 'asc'
          ? getAverageGrade(previousStudent[sortBy]) - getAverageGrade(currentStudent[sortBy])
          : getAverageGrade(currentStudent[sortBy]) - getAverageGrade(previousStudent[sortBy]);
      });
      break;

    default:
      throw new Error(`Invalid sort type: ${sortBy}`);
  }

  return copyStudents;
}
