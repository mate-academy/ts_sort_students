
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

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): object[] {
  const stArr: Student[] = students.map((el: Student) => ({ ...el }));

  switch (sortBy) {
    case 0:
      return (order === 'asc')
        ? stArr
          .sort((a: Student, b: Student) => a.name.localeCompare(b.name))
        : stArr
          .sort((a: Student, b: Student) => b.name.localeCompare(a.name));

    case 1:
      return (order === 'asc')
        ? stArr
          .sort((a: Student, b: Student) => a.surname.localeCompare(b.surname))
        : stArr
          .sort((a: Student, b: Student) => b.surname.localeCompare(a.surname));

    case 2:
      return (order === 'asc')
        ? stArr.sort((a: Student, b: Student) => a.age - b.age)
        : stArr.sort((a: Student, b: Student) => b.age - a.age);

    case 3:
      return (order === 'asc')
        ? stArr
          .sort((a: Student, b: Student) => (
            Number(a.married) - Number(b.married)))
        : stArr
          .sort((a: Student, b: Student) => (
            Number(b.married) - Number(a.married)));

    case 4:
      return (order === 'asc')
        ? stArr
          .sort((a: Student, b: Student) => (
            (a.grades
              .reduce((prev: number, el: number) => (
                prev + el), 0)) / a.grades.length)
            - (b.grades
              .reduce((prev: number, el: number) => (
                prev + el), 0) / b.grades.length))
        : stArr
          .sort((a: Student, b: Student) => (
            (b.grades
              .reduce((prev: number, el: number) => (
                prev + el), 0)) / b.grades.length)
          - (a.grades
            .reduce((prev: number, el: number) => (
              prev + el), 0) / a.grades.length));

    default:
      throw new Error('invalid values!');
  }
}
