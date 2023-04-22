/* eslint-disable default-case */

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

// create SortOrder type
export type SortOrder = {
  asc : string,
  desc: string,
};

function culGrage(arrGrage: number []): number {
  return arrGrage.reduce((sum, grage) => sum + grage, 0) / arrGrage.length;
}

export function sortStudents(students: Student [], sortBy: SortType,
  order: string) : Student [] {
  const newStudents: Student [] = [...students];

  newStudents.sort((firstStudent: Student, secondStudent: Student) => {
    switch (sortBy) {
      case SortType.Name:
        return order === 'asc'
          ? firstStudent.name.localeCompare(secondStudent.name)
          : secondStudent.name.localeCompare(firstStudent.name);

      case SortType.Surname:
        return order === 'asc'
          ? firstStudent.surname.localeCompare(secondStudent.surname)
          : secondStudent.surname.localeCompare(firstStudent.surname);

      case SortType.Age:
        return order === 'asc'
          ? firstStudent.age - secondStudent.age
          : secondStudent.age - firstStudent.age;

      case SortType.Married:
        return order === 'asc'
          ? +firstStudent.married - +secondStudent.married
          : +secondStudent.married - +firstStudent.married;

      case SortType.AverageGrade:
        return order === 'asc'
          ? culGrage(firstStudent.grades) - culGrage(secondStudent.grades)
          : culGrage(secondStudent.grades) - culGrage(firstStudent.grades);

      default:
        return 0;
    }
  });

  return newStudents;
}
