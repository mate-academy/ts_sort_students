export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

type ReduceCallback = (previos: number, current: number) => number;

const reduceCallback: ReduceCallback = (previos, current) => {
  return previos + current;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newStudents: Student[] = [...students];

  newStudents.sort((studentA, studentB) => {
    switch (sortBy) {
      case SortType.Name:
        if (order === 'desc') {
          return studentB.name.localeCompare(studentA.name);
        }

        return studentA.name.localeCompare(studentB.name);
      case SortType.Surname:
        if (order === 'desc') {
          return studentB.surname.localeCompare(studentA.surname);
        }

        return studentA.surname.localeCompare(studentB.surname);
      case SortType.Age:
        if (order === 'desc') {
          return studentB.age - studentA.age;
        }

        return studentA.age - studentB.age;
      case SortType.Married:
        if (order === 'desc') {
          return +studentB.married - +studentA.married;
        }

        return +studentA.married - +studentB.married;
      case SortType.AverageGrade:

        if (order === 'desc') {
          return (studentB.grades.reduce(reduceCallback, 0)
                    / studentB.grades.length)
          - (studentA.grades.reduce(reduceCallback, 0)
          / studentA.grades.length);
        }

        return (studentA.grades.reduce(reduceCallback, 0)
                    / studentA.grades.length)
          - (studentB.grades.reduce(reduceCallback, 0)
          / studentB.grades.length);
      default:
        return 0;
    }
  });

  return newStudents;
}
