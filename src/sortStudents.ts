
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

const avgGrades = (students: Student): number => (
  students.grades.reduce((acc, grade) => acc + grade, 0)
  / students.grades.length);

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? avgGrades(a) - avgGrades(b)
          : avgGrades(b) - avgGrades(a);

      default: return 0;
    }
  });

  return sortedStudents;
}
