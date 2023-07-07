
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

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  let result: Student[] = [];

  function CompareFn(a: Student, b: Student): number {
    let retValue: number = 0;

    switch (sortBy) {
      case SortType.Name:
        if (order === 'asc') {
          retValue = (a.name).localeCompare(b.name);
        }

        if (order === 'desc') {
          retValue = (b.name).localeCompare(a.name);
        }
        break;

      case SortType.Surname:
        if (order === 'asc') {
          retValue = (a.surname).localeCompare(b.surname);
        }

        if (order === 'desc') {
          retValue = (b.surname).localeCompare(a.surname);
        }
        break;

      case SortType.Age:
        if (order === 'asc') {
          retValue = a.age - b.age;
        }

        if (order === 'desc') {
          retValue = b.age - a.age;
        }
        break;

      case SortType.Married:
        if (order === 'asc') {
          retValue = Number(a.married) - Number(b.married);
        }

        if (order === 'desc') {
          retValue = Number(b.married) - Number(a.married);
        }
        break;

      case SortType.AverageGrade:
        if (order === 'asc') {
          retValue = a.grades.reduce((sum, x): number => sum + x, 0)
          / a.grades.length - b.grades.reduce((sum, x): number => sum + x, 0)
          / b.grades.length;
        }

        if (order === 'desc') {
          retValue = b.grades.reduce((sum, x): number => sum + x, 0)
          / b.grades.length - a.grades.reduce((sum, x): number => sum + x, 0)
          / a.grades.length;
        }
        break;

      default:
        break;
    }

    return retValue;
  }

  result = [...students].sort(CompareFn);

  return result;
}
