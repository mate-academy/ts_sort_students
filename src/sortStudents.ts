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
  AverageGrade
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  const nameOrSurname = sortBy === SortType.Name ? 'name' : 'surname';

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((firstPerson: Student, secondPerson: Student) => (
        order === 'asc'
          ? firstPerson[nameOrSurname]
            .localeCompare(secondPerson[nameOrSurname])
          : secondPerson[nameOrSurname]
            .localeCompare(firstPerson[nameOrSurname])
      ));

      break;

    case SortType.Age:
      studentsCopy.sort((firstPerson: Student, secondPerson: Student) => (
        order === 'asc'
          ? firstPerson.age - secondPerson.age
          : secondPerson.age - firstPerson.age
      ));
      break;

    case SortType.Married:
      studentsCopy.sort((firstPerson: Student, secondPerson: Student) => (
        order === 'asc'
          ? +firstPerson.married - +secondPerson.married
          : +secondPerson.married - +firstPerson.married
      ));
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((firstPerson: Student, secondPerson: Student) => {
        const firstPersonAvgGrade = firstPerson.grades.reduce(
          (accum: number, curr: number) => accum + curr,
        ) / firstPerson.grades.length;

        const secondPersonAvgGrade = secondPerson.grades.reduce(
          (accum: number, curr: number) => accum + curr,
        ) / secondPerson.grades.length;

        return order === 'asc'
          ? firstPersonAvgGrade - secondPersonAvgGrade
          : secondPersonAvgGrade - firstPersonAvgGrade;
      });
      break;

    default:
      break;
  }

  return studentsCopy;
}
