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
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';
export type SortFunc = (a: Student[], b: SortType, c: SortOrder) => Student[];

export const sortStudents: SortFunc = (students, sortBy, order) => {
  type Num = number;

  const sortCallback = (a: Student, b: Student): Num => {
    let studentA: Student = a;
    let studentB: Student = b;

    if (order === 'desc') {
      studentA = b;
      studentB = a;
    }

    if (sortBy === SortType.AverageGrade) {
      const gradesA: Num[] = studentA.grades;
      const gradesB: Num[] = studentB.grades;

      const getSum = (x: Num, y: Num): Num => x + y;

      const averageA: Num = gradesA.reduce(getSum) / gradesA.length;
      const averageB: Num = gradesB.reduce(getSum) / gradesB.length;

      return averageA - averageB;
    }

    switch (sortBy) {
      case SortType.Name:
        return studentA.name.localeCompare(studentB.name);

      case SortType.Surname:
        return studentA.surname.localeCompare(studentB.surname);

      case SortType.Age:
        return studentA.age - studentB.age;

      case SortType.Married:
        return !studentA.married && studentB.married
          ? -1
          : 1;

      default:
        return 0;
    }
  };

  return [...students].sort(sortCallback);
};
