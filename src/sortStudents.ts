
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

function getAverageGrades(student: Student): number {
  const { grades } = student;

  return grades.reduce((acc, curr) => acc + curr, 0) / grades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsCopy.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return studentsCopy.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
      });

    case SortType.AverageGrade:
      return studentsCopy.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? getAverageGrades(a) - getAverageGrades(b)
          : getAverageGrades(b) - getAverageGrades(a);
      });

    default:
      return studentsCopy;
  }
}
