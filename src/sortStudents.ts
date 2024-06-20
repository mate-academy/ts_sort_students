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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  return grades.reduce((sum, grade) => (sum + grade), 0)
    / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];
  const orderIndex = order === 'desc' ? -1 : 1;

  return (studentsCopy.sort((student1, student2) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (student1[sortBy].localeCompare(student2[sortBy])) * orderIndex;

      case SortType.Age:
      case SortType.Married:
        return (+student1[sortBy] - +student2[sortBy]) * orderIndex;

      case SortType.AverageGrade:
        return ((
          getAverageGrade(student1.grades) - getAverageGrade(student2.grades)
        ) * orderIndex);

      default:
        return 0;
    }
  }));
}
