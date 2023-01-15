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

function calculateAverageGrade(grades: number[]): number {
  return grades.reduce((acum, current) => acum + current) / grades.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  return [...students].sort(
    (student1: Student, student2: Student):number => {
      if (sortBy === SortType.Name
        || sortBy === SortType.Surname) {
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);
      }

      if (sortBy === SortType.Married) {
        return order === 'asc'
          ? +student1[sortBy] - +student2[sortBy]
          : +student2[sortBy] - +student1[sortBy];
      }

      if (sortBy === SortType.Age) {
        return order === 'asc'
          ? student1[sortBy] - student2[sortBy]
          : student2[sortBy] - student1[sortBy];
      }

      if (sortBy === SortType.AverageGrade) {
        return order === 'asc'
          ? calculateAverageGrade(student1[sortBy])
          - calculateAverageGrade(student2[sortBy])
          : calculateAverageGrade(student2[sortBy])
          - calculateAverageGrade(student1[sortBy]);
      }

      return 0;
    },
  );
}
