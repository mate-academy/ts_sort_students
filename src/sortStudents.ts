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

export const averegeGrades = (grades: number[]): number => {
  const aver = grades.reduce((a: number, b: number) => {
    return (a + b);
  }) / grades.length;

  return aver;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((student1: Student, student2: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student1[sortBy].localeCompare(student2[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'desc'
          ? +student2[sortBy] - +student1[sortBy]
          : +student1[sortBy] - +student2[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? averegeGrades(student1[sortBy]) - averegeGrades(student2[sortBy])
          : averegeGrades(student2[sortBy]) - averegeGrades(student1[sortBy]);

      default:
        return 1;
    }
  });
}
