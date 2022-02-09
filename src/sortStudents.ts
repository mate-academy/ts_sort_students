
export interface Student {
  name: string;
  surname: string;
  age: number
  married: boolean;
  grades: number[];
  averageGrade: number;
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = students
    .map((student: Student) => {
      const { grades } = student;
      const numberOfGrades = grades.length;
      const averageGrade = grades
        .reduce((sum: number, grade: number) => sum + grade, 0)
        / numberOfGrades;

      return {
        ...student,
        averageGrade,
      };
    });

  studentsCopy.sort((a: Student, b: Student): number => {
    switch (sortBy) {
      case SortType.Age:
      case SortType.AverageGrade:
        if (order === 'desc') {
          return b[sortBy] - a[sortBy];
        }

        return a[sortBy] - b[sortBy];

      case SortType.Name:
      case SortType.Surname:
        if (order === 'desc') {
          return b[sortBy].localeCompare(a[sortBy]);
        }

        return a[sortBy].localeCompare(b[sortBy]);

      case SortType.Married:
        if (order === 'desc') {
          return +b.married - +a.married;
        }

        return +a.married - +b.married;

      default: return 0;
    }
  });

  return studentsCopy;
}
