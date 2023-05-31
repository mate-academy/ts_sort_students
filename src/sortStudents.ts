// import { error } from "console";

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

const averageGrades = (grades: number[]): number => {
  return grades.length
    ? grades.reduce((sum, a) => sum + a, 0) / grades.length
    : 0;
};

export function sortStudents(students: Student[], sortBy: SortType, order:
SortOrder): Student[] {
  const copiedStudents: Student[] = [...students];

  copiedStudents.sort((firstStudent, secondStudent) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
          : secondStudent[sortBy].localeCompare(firstStudent[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(firstStudent[sortBy]) - Number(secondStudent[sortBy])
          : Number(secondStudent[sortBy]) - Number(firstStudent[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? averageGrades(firstStudent[sortBy])
            - averageGrades(secondStudent[sortBy])

          : averageGrades(secondStudent[sortBy])
            - averageGrades(firstStudent[sortBy]);

      default:
        throw new Error('');
    }
  });

  return copiedStudents;
}
