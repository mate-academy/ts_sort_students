
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
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
) : Student[] {
  // write your function
  const person: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      person.sort((a, b) => a.name.localeCompare(b.name));

      break;

    case SortType.Surname:
      person.sort((a, b) => a.surname.localeCompare(b.surname));

      break;

    case SortType.Age:
      person.sort((a, b) => b.age - a.age).reverse();

      break;

    case SortType.Married:
      person.sort((a, b) => +b.married - +a.married).reverse();

      break;

    case SortType.AverageGrade:
      person.sort((a, b) => (
        a.grades.reduce((firstVal, secondVal) => firstVal + secondVal, 0)
        / a.grades.length
        - b.grades.reduce((firstVal, secondVal) => firstVal + secondVal, 0)
        / b.grades.length
      ));

      break;

    default:
      break;
  }

  if (order === 'desc' && sortBy === SortType.AverageGrade) {
    person.sort((a, b) => (
      b.grades.reduce((firstVal, secondVal) => firstVal + secondVal, 0)
      / b.grades.length
      - a.grades.reduce((firstVal, secondVal) => firstVal + secondVal, 0)
      / a.grades.length
    )).reverse();
  }

  if (order === 'desc') {
    return person.reverse();
  }

  return person;
}
