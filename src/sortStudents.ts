
export interface Student {
  name: string;
  surname: string;
  age: string;
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
  sortBy: SortType,
  order: SortOrder): Student[] {
  return [...students].sort((el1: Student, el2: Student) => {
    let a = el1;
    let b = el2;

    if (order === 'desc') {
      a = el2;
      b = el1;
    }

    let averageA;
    let averageB;

    switch (sortBy) {
      case SortType.Name:
        return a.name.localeCompare(b.name);
      case SortType.Surname:
        return a.surname.localeCompare(b.surname);
      case SortType.Age:
        return +a.age - +b.age;
      case SortType.Married:
        return +a.married - +b.married;
      case SortType.AverageGrade:
        averageA = a.grades.reduce((acc, el) => acc + el)
         / a.grades.length;

        averageB = b.grades.reduce((acc, el) => acc + el)
         / b.grades.length;

        return averageA - averageB;
      default:
        return 0;
    }
  });
}
