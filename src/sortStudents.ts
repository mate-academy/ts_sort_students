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
  AverageGrade = 'average_grade',
}

export type SortOrder = 'asc' | 'desc';

function calculateAvgGrade({ grades }: Student): number {
  const sum = grades.reduce((prev: number, grade: number) => {
    return prev + grade;
  }, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const allStudents = [...students];

  return allStudents.sort((student1, student2): number => {
    switch (sortBy) {
      case SortType.Age:
      case SortType.Married:
        if (order === 'asc') {
          return (+student1[sortBy] - +student2[sortBy]);
        }

        return (+student2[sortBy] - +student1[sortBy]);
      case SortType.Surname:
      case SortType.Name:
        if (order === 'asc') {
          return student1[sortBy].localeCompare(student2[sortBy]);
        }

        return student2[sortBy].localeCompare(student1[sortBy]);
      case SortType.AverageGrade:
        if (order === 'asc') {
          return calculateAvgGrade(student1) - calculateAvgGrade(student2);
        }

        return calculateAvgGrade(student2) - calculateAvgGrade(student1);
      default:
        return 0;
    }
  });
}
