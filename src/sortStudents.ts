export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade',
}

export type SortOrder = 'asc' | 'desc';

function calculateAverageGrade(grades: number[]): number {
  const sum = grades.reduce((acc, grade) => acc + grade, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    let aValue;
    let bValue;

    switch (sortBy) {
      case SortType.Name:
        aValue = a.name;
        bValue = b.name;
        break;

      case SortType.Surname:
        aValue = a.surname;
        bValue = b.surname;
        break;

      case SortType.Age:
        aValue = a.age;
        bValue = b.age;
        break;

      case SortType.Married:
        aValue = a.married;
        bValue = b.married;
        break;

      case SortType.AverageGrade:
        aValue = calculateAverageGrade(a.grades);
        bValue = calculateAverageGrade(b.grades);
        break;

      default:
        throw new Error('Invalid SortType');
    }

    if (aValue < bValue) {
      return order === 'asc' ? -1 : 1;
    }

    if (aValue > bValue) {
      return order === 'asc' ? 1 : -1;
    }

    return 0;
  });

  return sortedStudents;
}
