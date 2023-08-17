
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

function averageGrade(student: Student): number {
  return student.grades.reduce(
    (acc: number, item: number) => acc + item, 0,
  ) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  if (sortBy === SortType.Name) {
    return order === 'asc'
      ? studentsCopy.sort((a, b) => a.name.localeCompare(b.name))
      : studentsCopy.sort((a, b) => b.name.localeCompare(a.name));
  }

  if (sortBy === SortType.Surname) {
    return order === 'asc'
      ? studentsCopy.sort((a, b) => a.surname.localeCompare(b.surname))
      : studentsCopy.sort((a, b) => b.surname.localeCompare(a.surname));
  }

  if (sortBy === SortType.Age) {
    return order === 'asc'
      ? studentsCopy.sort((a, b) => a.age - b.age)
      : studentsCopy.sort((a, b) => b.age - a.age);
  }

  if (sortBy === SortType.Married) {
    return order === 'asc'
      ? studentsCopy.sort((a, b) => Number(a.married) - Number(b.married))
      : studentsCopy.sort((a, b) => Number(b.married) - Number(a.married));
  }

  if (sortBy === SortType.AverageGrade) {
    return order === 'asc'
      ? studentsCopy.sort((a, b) => averageGrade(a) - averageGrade(b))
      : studentsCopy.sort((a, b) => averageGrade(b) - averageGrade(a));
  }

  return studentsCopy;
}
