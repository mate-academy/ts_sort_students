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
  const copierStudents = [...students];
  const sortOrder = order === 'asc' ? 1 : -1;

  type Callback = (prev: number, cur: number) => number;

  const sumCallback: Callback = (prev, cur) => prev + cur;

  switch (sortBy) {
    case SortType.Name:
      copierStudents.sort(
        (a: Student, b: Student) => a.name.localeCompare(b.name) * sortOrder,
      );
      break;

    case SortType.Surname:
      copierStudents.sort(
        (a: Student, b: Student) => a.surname.localeCompare(b.surname)
        * sortOrder,
      );
      break;

    case SortType.Age:
      copierStudents.sort(
        (a: Student, b: Student) => (a.age - b.age) * sortOrder,
      );
      break;

    case SortType.Married:
      copierStudents.sort(
        (a: Student, b: Student) => ((a.married > b.married)
          ? sortOrder : -sortOrder),
      );
      break;

    case SortType.AverageGrade:
      copierStudents.sort(
        (a: Student, b: Student) => {
          const aGrade = a.grades.reduce(sumCallback) / a.grades.length;
          const bGrade = b.grades.reduce(sumCallback) / b.grades.length;

          return (aGrade - bGrade) * sortOrder;
        },
      );
      break;

    default:
      throw new Error(`Not correct type for sort: '${sortBy}'`);
  }

  return copierStudents;
}
