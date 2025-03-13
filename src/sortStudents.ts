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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a, b) => {
    let valueA: number | string;
    let valueB: number | string;

    switch (sortBy) {
      case SortType.Name:
        valueA = a.name;
        valueB = b.name;
        break;
      case SortType.Surname:
        valueA = a.surname;
        valueB = b.surname;
        break;
      case SortType.Age:
        valueA = a.age;
        valueB = b.age;
        break;
      case SortType.Married:
        valueA = Number(a.married);
        valueB = Number(b.married);
        break;
      case SortType.AverageGrade:
        valueA = a.grades.reduce((total, grade) => total
          + grade, 0) / a.grades.length;

        valueB = b.grades.reduce((total, grade) => total
          + grade, 0) / b.grades.length;
        break;
      default:
        throw new Error('error');
    }

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return order === 'asc'
        ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    }

    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return order === 'asc'
        ? valueA - valueB : valueB - valueA;
    }

    return 0;
  });
}
