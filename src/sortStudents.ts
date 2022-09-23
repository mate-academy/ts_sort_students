
export interface Student {
  'name': string,
  'surname': string,
  'age': number,
  'married': boolean,
  'grades': number[],
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
  type CallBack = (student1: Student, student2: Student) => number;

  function calculateAverageGrade(student:Student): number {
    return student.grades.reduce((sum: number, n: number) => sum + n, 0)
    / student.grades.length;
  }

  const callback: CallBack = (student1, student2) => {
    switch (sortBy) {
      case SortType.Surname:
      case SortType.Name:
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +student1[sortBy] - +student2[sortBy]
          : +student2[sortBy] - +student1[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? calculateAverageGrade(student1) - calculateAverageGrade(student2)
          : calculateAverageGrade(student2) - calculateAverageGrade(student1);

      default:
        return 0;
    }
  };

  return [...students].sort(callback);
}
