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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const getAverage = (grades: number[]): number => (
    grades.reduce((sum, grade) => sum + grade, 0) / grades.length
  );

  return [...students].sort((a, b) => {
    let result = 0;

    switch (sortBy) {
      case SortType.Name:
        result = a.name.localeCompare(b.name);
        break;

      case SortType.Surname:
        result = a.surname.localeCompare(b.surname);
        break;

      case SortType.Age:
        result = a.age - b.age;
        break;

      case SortType.Married:
        result = Number(a.married) - Number(b.married);
        break;

      case SortType.AverageGrade:
        result = getAverage(a.grades) - getAverage(b.grades);
        break;

      default:
        result = 0;
    }

    if (order === 'desc') {
      return -result;
    }

    return result;
  });
}
