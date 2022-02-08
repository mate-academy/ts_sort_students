
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
  averageGrade?: number;
}

export enum SortType {
  AverageGrade = 'averageGrade',
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  Grades = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(student: Student): number {
  return student.grades
    .reduce((a, b) => a + b) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students]
    .sort((firstStudent: Student, secondStudent: Student) => {
      let student1: Student = firstStudent;
      let student2: Student = secondStudent;

      if (order === 'desc') {
        [student1, student2] = [student2, student1];
      }

      switch (sortBy) {
        case SortType.AverageGrade:
          return getAverageGrade(student1) - getAverageGrade(student2);

        case SortType.Name:
        case SortType.Surname:
          return student1[sortBy].localeCompare(student2[sortBy]);

        case SortType.Age:
          return student1[sortBy] - student2[sortBy];

        case SortType.Married:
          return Number(student1[sortBy]) - Number(student2[sortBy]);

        default:
          return 0;
      }
    });
}
