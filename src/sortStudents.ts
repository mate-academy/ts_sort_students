
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

export type SortOrder = 'asc' | 'desc';

function averagedGrade(items: number[]): number {
  return items.reduce((initial: number, second: number) => initial + second, 0)
  / items.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
      copyStudents.sort((a: Student, b: Student) => {
        if (order === 'asc') {
          return a.name.localeCompare(b.name);
        }

        return b.name.localeCompare(a.name);
      });
      break;
    case SortType.Surname:
      copyStudents.sort((a: Student, b: Student) => {
        if (order === 'asc') {
          return a.surname.localeCompare(b.surname);
        }

        return b.surname.localeCompare(a.surname);
      });

      break;

    case SortType.Age:
      copyStudents.sort((a: Student, b: Student) => {
        if (order === 'asc') {
          return a.age - b.age;
        }

        return b.age - a.age;
      });

      break;

    case SortType.Married:
      copyStudents.sort((a: Student, b: Student) => {
        if (order === 'asc') {
          return +a.married - +b.married;
        }

        return +b.married - +a.married;
      });

      break;

    case SortType.AverageGrade:
      copyStudents.sort((a: Student, b: Student) => {
        if (order === 'asc') {
          return averagedGrade(a.grades) - averagedGrade(b.grades);
        }

        return averagedGrade(b.grades) - averagedGrade(a.grades);
      });

      break;

    default:
      break;
  }

  return copyStudents;
}
