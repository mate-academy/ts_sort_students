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
  let aAverage;
  let bAverage;

  const getAverage = (student: Student): number => student.grades
    .reduce((acc, grade) => acc + grade) / student.grades.length;

  return [...students].sort((firstEl, secondEl) => {
    let a = firstEl;
    let b = secondEl;

    if (order === 'desc') {
      a = secondEl;
      b = firstEl;
    }

    switch (sortBy) {
      case SortType.Name:
        return a.name.localeCompare(b.name);

      case SortType.Surname:
        return a.surname.localeCompare(b.surname);

      case SortType.Age:
        return a.age - b.age;

      case SortType.Married:
        return +a.married - +b.married;

      case SortType.AverageGrade:
        aAverage = getAverage(a);
        bAverage = getAverage(b);

        return aAverage - bAverage;

      default:
        return 0;
    }
  });
}
