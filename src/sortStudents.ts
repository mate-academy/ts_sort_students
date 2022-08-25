
export interface Student {
  // describe Student interface
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  let aAverage;
  let bAverage;

  const getAverageGrade = (student: Student): number => student.grades
    .reduce((sum, grade) => sum + grade) / student.grades.length;

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
        aAverage = getAverageGrade(a);
        bAverage = getAverageGrade(b);

        return aAverage - bAverage;

      default:
        return 0;
    }
  });
}
