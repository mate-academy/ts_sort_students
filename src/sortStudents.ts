
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy = [...students];
  const callback = (acc: number, current: number): number => {
    return acc + current;
  };

  return copy.sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
        return order === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);

      case SortType.Surname:
        return order === 'asc'
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);

      case SortType.Age:
        return order === 'asc'
          ? a.age - b.age
          : b.age - a.age;

      case SortType.Married:
        return order === 'asc'
          ? +a.married - +b.married
          : +b.married - +a.married;

      case SortType.AverageGrade:
        return order === 'asc'
          ? (a.grades.reduce(callback, 0) / a.grades.length)
            - (b.grades.reduce(callback, 0) / b.grades.length)
          : (b.grades.reduce(callback, 0) / b.grades.length)
            - (a.grades.reduce(callback, 0) / a.grades.length);

      default:
        return 0;
    }
  });
}
