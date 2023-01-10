export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

function sortAvergeGrade(a: Student, b: Student, order: SortOrder): number {
  const aCalc: number
    = a.grades.reduce((prev, sum) => prev + sum, 0) / a.grades.length;
  const bCalc: number
    = b.grades.reduce((prev, sum) => prev + sum, 0) / b.grades.length;

  if (order === SortOrder.ASC) {
    return aCalc - bCalc;
  }

  return bCalc - aCalc;
}

export function sortStudents(
  initialStudents: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const students = [...initialStudents];
  // write your function

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:

      students.sort((a, b) => {
        const key = SortType.Name === sortBy ? 'name' : 'surname';

        switch (order) {
          case SortOrder.ASC:
            return a[key].localeCompare(b[key]);

          case SortOrder.DESC:
            return b[key].localeCompare(a[key]);

          default:
            return 0;
        }
      });
      break;

    case SortType.Age:
      students.sort((a, b) => {
        switch (order) {
          case SortOrder.ASC:
            return a.age - b.age;

          case SortOrder.DESC:
            return b.age - a.age;

          default:
            return 0;
        }
      });
      break;

    case SortType.Married:
      students.sort((a, b) => {
        switch (order) {
          case SortOrder.ASC:
            return a.married && !b.married ? 1 : -1;

          case SortOrder.DESC:
            return a.married && !b.married ? -1 : 1;

          default:
            return 0;
        }
      });
      break;

    case SortType.AverageGrade:
      students.sort((a, b) => {
        return sortAvergeGrade(a, b, order);
      });
      break;

    default:
      break;
  }

  return students;
}
