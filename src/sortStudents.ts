// import { getEffectiveConstraintOfTypeParameter } from 'typescript';

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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyArr = [...students];

  copyArr.sort((
    student1: Student,
    student2: Student,
  ): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +student1[sortBy] - +student2[sortBy]
          : +student2[sortBy] - +student1[sortBy];

      case SortType.AverageGrade: {
        const prevAvarage = student1[sortBy]
          .reduce((sum: number, num: number) => {
            return sum + num;
          }) / student1[sortBy].length;

        const nextAvarage = student2[sortBy]
          .reduce((sum: number, num: number) => {
            return sum + num;
          }) / student2[sortBy].length;

        return order === 'asc'
          ? (prevAvarage - nextAvarage)
          : (nextAvarage - prevAvarage);
      }

      default:
        throw new Error('enter valid sort type');
    }
  });

  return copyArr;
}
