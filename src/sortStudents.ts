
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
  const avarage = (numbers: number[]): number => (
    numbers.reduce((acc, num) => acc + num) / numbers.length
  );

  return [...students].sort((a: Student, b:Student) => {
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

      default:
        return order === 'asc'
          ? avarage(a.grades) - avarage(b.grades)
          : avarage(b.grades) - avarage(a.grades);
    }
  });
}
