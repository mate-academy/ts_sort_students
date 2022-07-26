
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'firstName',
  Surname = 'lastName',
  Age = 'yearsOld',
  Married = 'isMarried',
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  const averageGrade = (grades: number[]): number => grades
    .reduce((prev: number, curr: number) => prev + curr, 0) / grades.length;

  switch (sortBy) {
    case SortType.Name:
      studentsCopy.sort((first: Student, second: Student) => {
        return order === 'asc'
          ? first.name.localeCompare(second.name)
          : second.name.localeCompare(first.name);
      });

      break;

    case SortType.Surname:
      studentsCopy.sort((first: Student, second: Student) => {
        return order === 'asc'
          ? first.surname.localeCompare(second.surname)
          : second.surname.localeCompare(first.surname);
      });

      break;

    case SortType.Age:
      studentsCopy.sort((first: Student, second: Student) => {
        return order === 'asc'
          ? first.age - second.age
          : second.age - first.age;
      });

      break;

    case SortType.Married:
      studentsCopy.sort((first: Student, second: Student) => {
        return order === 'asc'
          ? +first.married - +second.married
          : +second.married - +first.married;
      });

      break;

    case SortType.AverageGrade:
      studentsCopy.sort((first: Student, second: Student) => {
        return order === 'asc'
          ? averageGrade(first.grades) - averageGrade(second.grades)
          : averageGrade(second.grades) - averageGrade(first.grades);
      });

      break;

    default:
      throw new Error('Wrong Sort Type');
  }

  return studentsCopy;
}
