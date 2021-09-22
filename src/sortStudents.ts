// describe Student type
// create and export SortType enum
// create SortOrder type

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

type Student = {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
};

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const result = [...students];

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? result.sort((a:Student, b:Student) => a.name.localeCompare(b.name))
        : result.sort((a:Student, b:Student) => b.name.localeCompare(a.name));
    case SortType.Surname:
      return order === 'asc'
        ? result
          .sort((a: Student, b:Student) => a.surname.localeCompare(b.surname))
        : result
          .sort((a: Student, b:Student) => b.surname.localeCompare(a.surname));
    case SortType.Age:
      return order === 'asc'
        ? result.sort((a:Student, b:Student) => a.age - b.age)
        : result.sort((a:Student, b:Student) => b.age - a.age);
    case SortType.Married:
      return order === 'asc'
        ? result.sort((a:Student, b:Student) => +a.married - +b.married)
        : result.sort((a:Student, b:Student) => +b.married - +a.married);
    default:
      return order === 'asc'
        ? result
          .sort((a:Student, b:Student) => (a.grades
            .reduce((acc: number, curr: number) => acc + curr) / a.grades
            .length) - (b.grades
            .reduce((acc: number, curr: number) => acc + curr) / b.grades
            .length))
        : result
          .sort((a:Student, b:Student) => (b.grades
            .reduce((acc: number, curr: number) => acc + curr) / b.grades
            .length) - (a.grades
            .reduce((acc: number, curr: number) => acc + curr) / a.grades
            .length));
  }
}
