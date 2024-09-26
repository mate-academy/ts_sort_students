
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

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  const sortedStudents = [...students];

  let comparator: (a: Student, b: Student) => number;

  function getAverageGrade(grades: number[]): number {
    const averageGrade = grades.reduce((sum, x) => sum + x, 0) / grades.length;

    return averageGrade;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      comparator = (a, b): number => a[sortBy].localeCompare(b[sortBy]);
      break;

    case SortType.Age:
      comparator = (a, b): number => a.age - b.age;
      break;

    case SortType.Married:
      comparator = (a, b): number => Number(a.married) - Number(b.married);
      break;

    case SortType.AverageGrade:
      comparator = (a, b): number => {
        return getAverageGrade(a.grades) - getAverageGrade(b.grades);
      };
      break;
    default:
      return sortedStudents;
  }

  sortedStudents.sort((a, b): number => {
    const result = comparator(a, b);

    return order === 'asc' ? result : result * -1;
  });

  return sortedStudents;
}
