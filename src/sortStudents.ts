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
    const studentA: Student = order === 'asc'
      ? a
      : b;

    const studentB: Student = order === 'asc'
      ? b
      : a;

    const isMarried = (student: Student): Num => (student.married
      ? 1
      : 0
    );

    const getSum = (x: Num, y: Num): Num => x + y;
    const getAverageGradeOf = (student: Student): Num => (
      student.grades.reduce(getSum) / student.grades.length
    );

    switch (sortBy) {
      case SortType.Name:
        return studentA.name.localeCompare(studentB.name);

      case SortType.Surname:
        return studentA.surname.localeCompare(studentB.surname);

      case SortType.Age:
        return studentA.age - studentB.age;

      case SortType.Married:
        return isMarried(studentA) - isMarried(studentB);

      case SortType.AverageGrade:
        return getAverageGradeOf(studentA) - getAverageGradeOf(studentB);

      default:
        return 0;
    }
  };

  return [...students].sort(sortCallback);
};
