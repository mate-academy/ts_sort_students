/* eslint-disable max-len */

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

export function sortStudents(students: Student[], sortBy: SortType, order: SortOrder): Student[] {
  const newArr: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        return newArr.sort((a, b) => a.name.localeCompare(b.name));
      }

      return newArr.sort((a, b) => b.name.localeCompare(a.name));

    case SortType.Surname:
      if (order === 'asc') {
        return newArr.sort((a, b) => a.surname.localeCompare(b.surname));
      }

      return newArr.sort((a, b) => b.surname.localeCompare(a.surname));

    case SortType.Age:
      if (order === 'asc') {
        return newArr.sort((a, b) => a.age - b.age);
      }

      return newArr.sort((a, b) => b.age - a.age);

    case SortType.Married:
      if (order === 'asc') {
        return newArr.sort((a, b) => +a.married - +b.married);
      }

      return newArr.sort((a, b) => +b.married - +a.married);

    case SortType.AverageGrade:
      if (order === 'asc') {
        return newArr.sort((a, b) => {
          const firstItem = a.grades.reduce((sum, current) => sum + current) / a.grades.length;
          const secondItem = b.grades.reduce((sum, current) => sum + current) / b.grades.length;

          return firstItem - secondItem;
        });
      }

      return newArr.sort((a, b) => {
        const firstItem: number = a.grades.reduce((sum, current) => sum + current) / a.grades.length;
        const secondItem: number = b.grades.reduce((sum, current) => sum + current) / b.grades.length;

        return secondItem - firstItem;
      });
    default:
      return students;
  }
}
