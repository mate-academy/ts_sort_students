
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const copiedStudents = [...students];

  const getAverage = (grades: number[]): number => {
    return grades.reduce((sum, v) => sum + v) / grades.length;
  };

  copiedStudents.sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
        if (order === 'asc') {
          return a.name.localeCompare(b.name);
        }

        if (order === 'desc') {
          return b.name.localeCompare(a.name);
        }
        break;

      case SortType.Surname:
        if (order === 'asc') {
          return a.surname.localeCompare(b.surname);
        }

        if (order === 'desc') {
          return b.surname.localeCompare(a.surname);
        }
        break;

      case SortType.Age:
        if (order === 'asc') {
          return a.age - b.age;
        }

        if (order === 'desc') {
          return b.age - a.age;
        }
        break;

      case SortType.Married:
        if (order === 'asc') {
          return +a.married - +b.married;
        }

        if (order === 'desc') {
          return +b.married - +a.married;
        }
        break;

      case SortType.AverageGrade:
        if (order === 'asc') {
          return getAverage(a.grades) - getAverage(b.grades);
        }

        if (order === 'desc') {
          return getAverage(b.grades) - getAverage(a.grades);
        }
        break;
      default:
    }

    return 0;
  });

  return copiedStudents;
}
