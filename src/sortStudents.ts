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
export type SortOrder = {
  asc: 'asc';
  desc: 'desc';
};

export function sortStudents(
  initialStudents: Student[],
  sortBy: SortType,
  order: keyof SortOrder,
): Student[] {
  const students = [...initialStudents];

  // write your function
  switch (sortBy) {
    case SortType.Name:
      students.sort((a, b) => {
        if (order === 'asc') {
          return a.name.localeCompare(b.name);
        }

        if (order === 'desc') {
          return b.name.localeCompare(a.name);
        }

        return 0;
      });
      break;

    case SortType.Surname:
      students.sort((a, b) => {
        if (order === 'asc') {
          return a.surname.localeCompare(b.surname);
        }

        if (order === 'desc') {
          return b.surname.localeCompare(a.surname);
        }

        return 0;
      });
      break;

    case SortType.Age:
      students.sort((a, b) => {
        if (order === 'asc') {
          return a.age - b.age;
        }

        return b.age - a.age;
      });
      break;

    case SortType.Married:
      students.sort((a, b) => {
        if (order === 'asc') {
          return a.married && !b.married ? 1 : -1;
        }

        if (order === 'desc') {
          return a.married && !b.married ? -1 : 1;
        }

        return 0;
      });
      break;

    case SortType.AverageGrade:
      students.sort((a, b) => {
        const aCalc: number = a.grades
          .reduce((prev, sum) => prev + sum, 0) / a.grades.length;
        const bCalc: number = b.grades
          .reduce((prev, sum) => prev + sum, 0) / b.grades.length;

        if (order === 'asc') {
          return aCalc - bCalc;
        }

        return bCalc - aCalc;
      });
      break;

    default: break;
  }

  return students;
}
