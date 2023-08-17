export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

function calculateAverage(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  return students.slice().sort((a, b) => {
    let aValue,
      bValue;

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
        aValue = calculateAverage(a.grades);
        bValue = calculateAverage(b.grades);
        break;
      default:
        throw new Error('Invalid SortType');
    }

    if (order === 'asc') {
      if (aValue === bValue || aValue === undefined || bValue === undefined) {
        return 0;
      }

      return aValue < bValue ? -1 : 1;
    }

    if (aValue === bValue || aValue === undefined || bValue === undefined) {
      return 0;
    }

    return aValue < bValue ? 1 : -1;
  });
}
