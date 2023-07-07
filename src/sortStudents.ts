export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

function getAverageGrade(grades: number[]): number {
  const sum = grades.reduce((total, grade) => total + grade, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? sortedStudents.sort((a, b) => a.name.localeCompare(b.name))
        : sortedStudents.sort((a, b) => b.name.localeCompare(a.name));
    case SortType.Surname:
      return order === 'asc'
        ? sortedStudents.sort((a, b) => a.surname.localeCompare(b.surname))
        : sortedStudents.sort((a, b) => b.surname.localeCompare(a.surname));
    case SortType.Age:
      return order === 'asc'
        ? sortedStudents.sort((a, b) => +a.age - +b.age)
        : sortedStudents.sort((a, b) => +b.age - +a.age);
    case SortType.Married:
      return order === 'asc'
        ? sortedStudents.sort((a, b) => +a.married - +b.married)
        : sortedStudents.sort((a, b) => +b.married - +a.married);
    case SortType.AverageGrade:
      return order === 'asc'
        ? sortedStudents.sort(
          (a, b) => getAverageGrade(a.grades) - getAverageGrade(b.grades),
        )
        : sortedStudents.sort(
          (a, b) => getAverageGrade(b.grades) - getAverageGrade(a.grades),
        );
    default:
      return sortedStudents;
  }
}
