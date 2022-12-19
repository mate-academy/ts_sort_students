
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

const getAverage = (grades: number[]): number => (
  grades.reduce((sum, mark) => sum + mark) / grades.length
);

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
      studCopy.sort((st1: Student, st2: Student) => {
        return order === 'asc'
          ? st1.name.localeCompare(st2.name)
          : st2.name.localeCompare(st1.name);
      });

      break;

    case SortType.Surname:
      studCopy.sort((st1: Student, st2: Student) => {
        return order === 'asc'

          ? st1.surname.localeCompare(st2.surname)
          : st2.surname.localeCompare(st1.surname);
      });

      break;

    case SortType.Age:
      studCopy.sort((st1: Student, st2: Student) => {
        return order === 'asc'
          ? st1.age - st2.age
          : st2.age - st1.age;
      });

      break;

    case SortType.Married:

      studCopy.sort((st1: Student, st2: Student) => {
        return order === 'asc'
          ? +st1.married - +st2.married
          : +st2.married - +st1.married;
      });
      break;

    case SortType.AverageGrade:
      studCopy.sort((st1: Student, st2: Student) => {
        return order === 'asc'
          ? getAverage(st1.grades) - getAverage(st2.grades)
          : getAverage(st2.grades) - getAverage(st1.grades);
      });

      break;

    default:
      break;
  }

  return studCopy;
}
