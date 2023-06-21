
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
  const copy = [...students];
  const callback = (acc: number, current: number): number => {
    return acc + current;
  };

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        return copy.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }

      return copy.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });

    case SortType.Surname:
      if (order === 'asc') {
        return copy.sort((a, b) => {
          return a.surname.localeCompare(b.surname);
        });
      }

      return copy.sort((a, b) => {
        return b.surname.localeCompare(a.surname);
      });

    case SortType.Age:
      if (order === 'asc') {
        return copy.sort((a, b) => {
          return a.age - b.age;
        });
      }

      return copy.sort((a, b) => {
        return b.age - a.age;
      });

    case SortType.Married:
      if (order === 'asc') {
        return copy.sort((a, b) => {
          return a.married - b.married;
        });
      }

      return copy.sort((a, b) => {
        return b.married - a.married;
      });

    case SortType.AverageGrade:
      if (order === 'asc') {
        return copy.sort((a, b) => {
          return (a.grades.reduce(callback, 0) / a.grades.length)
          - (b.grades.reduce(callback, 0) / b.grades.length);
        });
      }

      return copy.sort((a, b) => {
        return (b.grades.reduce(callback, 0) / b.grades.length)
        - (a.grades.reduce(callback, 0) / a.grades.length);
      });

    default:
      return students;
  }
}
