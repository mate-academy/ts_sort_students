
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: [],
}

export enum SortType {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] | undefined {
  const studentsCopy = [...students];

  switch (sortBy) {
    case 'Name':
      if (order === 'asc') {
        return studentsCopy.sort((a, b) => a.name.localeCompare(b.name));
      }

      return studentsCopy.sort((a, b) => b.name.localeCompare(a.name));

    case 'Surname':
      if (order === 'asc') {
        return studentsCopy.sort(
          (a, b) => a.surname.localeCompare(b.surname),
        );
      }

      return studentsCopy.sort(
        (a, b) => b.surname.localeCompare(a.surname),
      );

    case 'Age':
      if (order === 'asc') {
        return studentsCopy.sort((a, b) => a.age - b.age);
      }

      return studentsCopy.sort((a, b) => b.age - a.age);

    case 'Married':
      if (order === 'asc') {
        return studentsCopy.sort(
          (a, b) => Number(a.married) - Number(b.married),
        );
      }

      return studentsCopy.sort(
        (a, b) => Number(b.married) - Number(a.married),
      );

    case 'AverageGrade':
      if (order === 'asc') {
        return studentsCopy.sort((a, b) => {
          const aAvg = a.grades.reduce(
            (prev: number, item: number) => prev + item, 0,
          ) / a.grades.length;
          const bAvg = b.grades.reduce(
            (prev: number, item: number) => prev + item, 0,
          ) / b.grades.length;

          if (aAvg === bAvg) {
            return 0;
          }

          if (aAvg > bAvg) {
            return 1;
          }

          return -1;
        });
      }

      return studentsCopy.sort((a, b) => {
        const aAvg = a.grades.reduce(
          (prev: number, item: number) => prev + item, 0,
        ) / a.grades.length;
        const bAvg = b.grades.reduce(
          (prev: number, item: number) => prev + item, 0,
        ) / b.grades.length;

        if (aAvg === bAvg) {
          return 0;
        }

        if (aAvg > bAvg) {
          return -1;
        }

        return 1;
      });

    default:
      return undefined;
  }
}
