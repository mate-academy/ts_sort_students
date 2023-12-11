
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

export function calcAvgGrade(grades: number[]): number {
  const sum = grades.reduce((a, b) => a + b, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    let comparison;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        comparison = a[sortBy].localeCompare(b[sortBy]);
        break;
      case SortType.Age:
        comparison = a.age - b.age;
        break;
      case SortType.Married:
        if (a.married === b.married) {
          comparison = 0;
        } else {
          comparison = a.married ? 1 : -1;
        }
        break;
      case SortType.AverageGrade:
        comparison = calcAvgGrade(a.grades) - calcAvgGrade(b.grades);
        break;
      default:
        throw new Error('Invalid sorBy value');
    }

    return order === 'asc' ? comparison : -comparison;
  });

  return sortedStudents;
}
