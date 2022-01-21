
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
  AverageGrade
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const calculateAvarage = (marks: number[]): number => marks
    .reduce((sum: number, el: number) => el + sum, 0) / marks.length;

  return [...students].sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.Name:
        return order === 'asc'
          ? a.name.localeCompare(b.name)
          : +!a.name.localeCompare(b.name);
      case SortType.Surname:
        return order === 'asc'
          ? a.surname.localeCompare(b.surname)
          : +!a.surname.localeCompare(b.surname);
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
          ? calculateAvarage(a.grades) - calculateAvarage(b.grades)
          : calculateAvarage(b.grades) - calculateAvarage(a.grades);
      default:
        return 0;
    }
  });
}
