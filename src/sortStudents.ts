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
  AvrageGrade
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copy = [...students];
  const avarage = (grades: number[]): number => {
    return grades
      .reduce((prev: number, elem: number) => prev + elem, 0) / grades.length;
  };

  switch (sortBy) {
    case SortType.Name:
      copy.sort((person1: Student, person2: Student) => {
        return order === 'asc'
          ? person1.name.localeCompare(person2.name)
          : person2.name.localeCompare(person1.name);
      });
      break;

    case SortType.Surname:
      copy.sort((person1: Student, person2: Student) => {
        return order === 'asc'
          ? person1.surname.localeCompare(person2.surname)
          : person2.surname.localeCompare(person1.surname);
      });
      break;

    case SortType.Age:
      copy.sort((person1: Student, person2: Student) => {
        return order === 'asc'
          ? person1.age - person2.age
          : person2.age - person1.age;
      });
      break;

    case SortType.Married:
      copy.sort((person1: Student, person2: Student) => {
        return order === 'asc'
          ? +person1.married - +person2.married
          : +person2.married - +person1.married;
      });
      break;

    default:
      copy.sort((person1: Student, person2: Student) => {
        return order === 'asc'
          ? avarage(person1.grades) - avarage(person2.grades)
          : avarage(person2.grades) - avarage(person1.grades);
      });
      break;
  }

  return copy;
}
