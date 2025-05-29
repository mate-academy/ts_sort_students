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
  const studentsCopy = [...students];

  return studentsCopy.sort((a, b) => {
    let valueA: string | number | boolean;
    let valueB: string | number | boolean;

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
        valueA = a.married;
        valueB = b.married;
        break;
      case SortType.AverageGrade:
        valueA = a.grades.reduce((sum, g) => sum + g, 0) / a.grades.length;
        valueB = b.grades.reduce((sum, g) => sum + g, 0) / b.grades.length;
        break;
      default:
        valueA = 0;
        valueB = 0;
        break;
    }

    if (valueA === valueB) {
      return 0;
    }

    const result = valueA > valueB ? 1 : -1;

    return order === 'asc' ? result : -result;
  });
}
