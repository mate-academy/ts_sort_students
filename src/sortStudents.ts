
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
  const newStudents: Student[] = [...students];

  const getAverageGrade = (grades: number[]): number => {
    return grades.reduce((acc: number, el: number) => acc + el, 0)
    / grades.length;
  };

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? newStudents.sort((a, b) => a.name.localeCompare(b.name))
        : newStudents.sort((a, b) => b.name.localeCompare(a.name));

    case SortType.Surname:
      return order === 'asc'
        ? newStudents.sort((a, b) => a.surname.localeCompare(b.surname))
        : newStudents.sort((a, b) => b.surname.localeCompare(a.surname));

    case SortType.Age:
      return order === 'asc'
        ? newStudents.sort((a, b) => a.age - b.age)
        : newStudents.sort((a, b) => b.age - a.age);

    case SortType.AverageGrade:
      return order === 'asc'
        ? newStudents.sort((a, b) => getAverageGrade(a.grades)
        - getAverageGrade(b.grades))
        : newStudents.sort((a, b) => getAverageGrade(b.grades)
        - getAverageGrade(a.grades));

    case SortType.Married:
      return order === 'asc'
        ? newStudents.sort((a, b) => +(a.married) - +(b.married))
        : newStudents.sort((a, b) => +(b.married) - +(a.married));

    default:
      return newStudents;
  }
}
