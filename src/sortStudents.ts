
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],

}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  [...students]: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? students.sort((a: Student, b: Student) => (
          (a.name).localeCompare(b.name)))
        : students.sort((a: Student, b: Student) => (
          b.name.localeCompare(a.name)));

    case SortType.Surname:
      return order === 'asc'
        ? students.sort((a: Student, b: Student) => (
          a.surname.localeCompare(b.surname)))
        : students.sort((a: Student, b: Student) => (
          b.surname.localeCompare(a.surname)));

    case SortType.Age:
      return order === 'asc'
        ? students.sort((a: Student, b: Student) => (a.age - b.age))
        : students.sort((a: Student, b: Student) => (b.age - a.age));

    case SortType.Married:
      return order === 'asc'
        ? students.sort((a: Student, b: Student) => (
          Number(a.married) - Number(b.married)))
        : students.sort((a: Student, b: Student) => (
          Number(b.married) - Number(a.married)));

    case SortType.AverageGrade:
      return order === 'asc'
        ? students.sort((a: Student, b: Student) => (
          a.grades.reduce((sum, n) => sum + n) / a.grades.length
          - b.grades.reduce((sum, n) => sum + n) / b.grades.length
        ))
        : students.sort((a: Student, b: Student) => (
          b.grades.reduce((sum, n) => sum + n) / b.grades.length
          - a.grades.reduce((sum, n) => sum + n) / a.grades.length
        ));

    default:
      return students;
  }
}
