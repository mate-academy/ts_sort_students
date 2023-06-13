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

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copy = [...students];

  copy.sort((first, second) => {
    let a = first;
    let b = second;

    if (order === 'desc') {
      a = second;
      b = first;
    }

    switch (sortBy) {
      case SortType.Name:
        return a.name.localeCompare(b.name);
      case SortType.Surname:
        return a.surname.localeCompare(b.surname);
      case SortType.Age:
        return a.age - b.age;
      case SortType.Married:
        return Number(a.married) - Number(b.married);
      case SortType.AverageGrade:
        return (a.grades
          .reduce((sum, cur) => sum + cur, 0) / a.grades.length) - (b.grades
          .reduce((sum, cur) => sum + cur, 0) / b.grades.length);
      default:
        throw new Error();
    }
  });

  return copy;
}
