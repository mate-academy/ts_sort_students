
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
  AverageGrade = 'AverageGrade',
}

export type SortOrder = 'asc' | 'desc';

function compareAverageGrades(a: Student, b: Student): number {
  const averageA = a.grades.reduce((sum, grade) => sum + grade, 0)
  / a.grades.length;
  const averageB = b.grades.reduce((sum, grade) => sum + grade, 0)
  / b.grades.length;

  return averageA - averageB;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  return [...students].sort((a, b) => {
    let comparison = 0;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        comparison = a[sortBy].localeCompare(b[sortBy]);
        break;
      case SortType.Age:
      case SortType.Married:
        comparison = +a[sortBy] - +b[sortBy];
        break;
      case SortType.AverageGrade:
        comparison = compareAverageGrades(a, b);
        break;
      default:
        return 0;
    }

    return order === 'asc' ? comparison : -comparison;
  });
}
