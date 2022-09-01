export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
  averageGrade: number;
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudens = [...students];

  sortedStudens.forEach((student) => {
    const changedStudent = student;

    changedStudent.averageGrade = student.grades
      .reduce((sum, grade) => sum + grade) / student.grades.length;
  });

  sortedStudens.sort((firstStudent: Student, secondStudent: Student) => {
    switch (order) {
      case 'asc':
        return firstStudent[sortBy] < secondStudent[sortBy]
          ? -1
          : 1;

      case 'desc':
        return firstStudent[sortBy] > secondStudent[sortBy]
          ? -1
          : 1;

      default:
        return 0;
    }
  });

  return sortedStudens;
}
