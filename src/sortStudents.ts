
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

export type SortOrder = 'asc' | 'dsc';

export function sortStudents(students: Student[], sortBy: SortType, order: SortOrder): Student[] {
  const arr: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        return arr.sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.surname.toLowerCase()));
      };

      return arr.sort((a, b) =>
      b.name.toLowerCase().localeCompare(a.surname.toLowerCase()));

    case SortType.Surname:
      if (order = 'asc') {
        return arr.sort((a, b) =>
          a.surname.toLowerCase().localeCompare(b.surname.toLowerCase()));
      };

      return arr.sort((a, b) =>
      b.surname.toLowerCase().localeCompare(a.surname.toLowerCase()));

    case SortType.Age:
      if (order === 'asc') {
        return arr.sort((a, b) => a.age - b.age);
      };

      return arr.sort((a, b) => b.age - a.age);

    case SortType.Married:
      if (order === 'asc') {
        return arr.sort((a, b) => +a.married - +b.married);
      };

      return arr.sort((a, b) => +b.married - +a.married);

    case SortType.AverageGrade:
      if (order === 'asc') {
        return arr.sort((a, b) => {
          const el1 = a.grades
          .reduce((total, current) => total + current) / a.grades.length;
          const el2 = b.grades
          .reduce((total, current) => total + current) / b.grades.length;

          return el1 - el2;
        });
      };

      return arr.sort((a, b) => {
        const el1 = a.grades
        .reduce((total, current) => total + current) / a.grades.length;
        const el2 = b.grades
        .reduce((total, current) => total + current) / b.grades.length;

        return el2 - el1;
      });

    default:
      return students;
  }
}
