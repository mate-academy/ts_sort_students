
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
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

export function averageGrade(grades: number[]): number {
  return grades
    .reduce((acc: number, current: number) => acc + current, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      studentsCopy.sort((a, b) => (order === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)));
      break;
    case SortType.Surname:
      studentsCopy.sort((a, b) => (order === 'asc'
        ? a.surname.localeCompare(b.surname)
        : b.surname.localeCompare(a.surname)));
      break;
    case SortType.Age:
      studentsCopy.sort((a, b) => (order === 'asc'
        ? a.age - b.age
        : b.age - a.age
      ));
      break;
    case SortType.Married:
      studentsCopy.sort((a, b) => (order === 'asc'
        ? +a.married - +b.married
        : +b.married - +a.married
      ));
      break;
    case SortType.AverageGrade:
      studentsCopy.sort((a, b) => (order === 'asc'
        ? averageGrade(a.grades) - averageGrade(b.grades)
        : averageGrade(b.grades) - averageGrade(a.grades)));
      break;
    default:
      break;
  }

  return studentsCopy;
}
