
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

export type SortOrder = 'desc' | 'asc';

export function getAverageGrade({ grades }: Student): number {
  return grades.reduce((acc, current) => acc + current, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students]
    .sort((student1: Student, student2: Student) => {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return student1[sortBy].localeCompare(student2[sortBy]);

        case SortType.Age:
          return order === 'asc'
            ? student1.age - student2.age
            : student2.age - student1.age;

        case SortType.Married:
          return Number(student2.married) - Number(student1.married);

        case SortType.AverageGrade:
          return order === 'asc'
            ? getAverageGrade(student1) - getAverageGrade(student2)
            : getAverageGrade(student2) - getAverageGrade(student1);

        default:
          return 0;
      }
    });
}
