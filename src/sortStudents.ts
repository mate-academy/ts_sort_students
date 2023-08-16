
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function calculateAverage(grades: number[]): number {
  const sum = grades.reduce((total, grade) => total + grade, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  studentsCopy.sort((a: Student, b: Student) => {
    if (sortBy === SortType.AverageGrade) {
      const averageA = calculateAverage(a.grades);
      const averageB = calculateAverage(b.grades);

      switch (true) {
        case averageA > averageB:
          return order === 'asc' ? 1 : -1;
        case averageA < averageB:
          return order === 'asc' ? -1 : 1;
        default:
          return 0;
      }
    }

    switch (true) {
      case a[sortBy] > b[sortBy]:
        return order === 'asc' ? 1 : -1;
      case a[sortBy] < b[sortBy]:
        return order === 'asc' ? -1 : 1;
      default:
        return 0;
    }
  });

  return studentsCopy;
}
