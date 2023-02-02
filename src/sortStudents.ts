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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((studentA: Student, studentB: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);

      case SortType.Age:
        return order === 'asc'
          ? studentA[sortBy] - studentB[sortBy]
          : studentB[sortBy] - studentA[sortBy];
      case SortType.Married:
        return order === 'asc'
          ? Number(studentA[sortBy]) - Number(studentB[sortBy])
          : Number(studentB[sortBy]) - Number(studentA[sortBy]);

      case SortType.AverageGrade: {
        const averageGradeA: number = studentA[sortBy].reduce(
          (acc: number, grade: number) => acc + grade,
        ) / studentA.grades.length;
        const averageGradeB: number = studentB[sortBy].reduce(
          (acc: number, grade: number) => acc + grade,
        ) / studentB.grades.length;

        return order === 'asc'
          ? averageGradeA - averageGradeB
          : averageGradeB - averageGradeA;
      }
      default:
        return 0;
    }
  });
}
