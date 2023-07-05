
export interface Student {
  // describe Student interface
}

export enum SortType {
  // describe SortType enum
}

// create SortOrder type
export type SortOrder;


type Student = {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortField {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortField, order: SortOrder): Student[] {
  const copyOfStudents = [...students];

  switch (sortBy) {
    case SortField.Age:
      copyOfStudents.sort((a, b) => a.age - b.age);
      break;
    case SortField.AverageGrade:
      copyOfStudents.sort((a, b) =>
        countAvarageGrade(a.grades) - countAvarageGrade(b.grades));
      break;
    case SortField.Married:
      copyOfStudents.sort((a) => {
        if (a.married) {
          return 1;
        } else {
          return -1;
        };
      });
      break;
    case SortField.Name:
      copyOfStudents.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case SortField.Surname:
      copyOfStudents.sort((a, b) => a.surname.localeCompare(b.surname));
      break;
  }

  if (order === 'desc') {
    return copyOfStudents.reverse();
  }

  return copyOfStudents;
}

function countAvarageGrade(grades: number[]): number {
  return grades.reduce(
    (accumulator, currentValue) => accumulator + currentValue) / grades.length;
}
