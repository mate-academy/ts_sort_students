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

      case SortType.AverageGrade: {
        const avg = (grades: number[]): number => (grades.length === 0
          ? -Infinity
          : grades.reduce((sum, g) => sum + g, 0) / grades.length);

        valueA = avg(a.grades);
        valueB = avg(b.grades);
        break;
      }
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
