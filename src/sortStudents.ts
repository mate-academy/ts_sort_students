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
  const clone = [...students];

  function calculateAverageGrade(grades: number[]): number {
    return grades.reduce((acc, cur) => acc + cur, 0) / grades.length;
  }

  clone.sort((a: Student, b: Student): number => {
    const avgGradeA = calculateAverageGrade(a.grades);
    const avgGradeB = calculateAverageGrade(b.grades);

    let comparison = 0;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        comparison = a[sortBy].localeCompare(b[sortBy]);
        break;
      case SortType.Age:
        comparison = a.age - b.age;
        break;
      case SortType.Married:
        comparison = +a[sortBy] - +b[sortBy];
        break;
      case SortType.AverageGrade:
        comparison = avgGradeA - avgGradeB;
        break;
      default:
        throw new Error('Unsupported sort type');
    }

    return order === 'asc' ? comparison : -comparison;
  });

  return clone;
}
