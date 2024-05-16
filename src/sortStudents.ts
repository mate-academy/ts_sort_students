
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function AvarageGrade(grades: number[]) : number {
  const sum: number = grades.reduce(
    (acc: number, cur: number) => acc + cur, 0,
  );

  const avg: number = sum / grades.length;

  return avg;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  function compare(a: Student, b: Student): number {
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
          ? AvarageGrade(a.grades) - AvarageGrade(b.grades)
          : AvarageGrade(b.grades) - AvarageGrade(a.grades);
      default:
        return 0;
    }
  }

  sortedStudents.sort(compare);

  return sortedStudents;
}
