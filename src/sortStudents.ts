/* eslint-disable implicit-arrow-linebreak */

export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: Array<number>,
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

const avgGrades = (v: Array<number>): number => {
  return v.length === 0
    ? 0
    : v.reduce((acc: number, grade: number) => acc + grade, 0) / v.length;
};

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Array<Student>
  , sortBy: SortType
  , order: SortOrder,
): Array<Student> {
  const copyStudents = [...students];
  const sortByAsc = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
      return sortByAsc
        ? copyStudents.sort((student1, student2) =>
          student1.name.localeCompare(student2.name))
        : copyStudents.sort((student1, student2) =>
          student2.name.localeCompare(student1.name));

    case SortType.Surname:
      return sortByAsc
        ? copyStudents.sort((student1, student2) =>
          student1.surname.localeCompare(student2.surname))
        : copyStudents.sort((student1, student2) =>
          student2.surname.localeCompare(student1.surname));

    case SortType.Age:
      return sortByAsc
        ? copyStudents.sort((student1, student2) => student1.age - student2.age)
        : copyStudents.sort((student1, student2) =>
          student2.age - student1.age);

    case SortType.Married:
      return sortByAsc
        ? copyStudents.sort((student1, student2) =>
          Number(student1.married) - Number(student2.married))
        : copyStudents.sort((student1, student2) =>
          Number(student2.married) - Number(student1.married));

    case SortType.AverageGrade:
      return sortByAsc
        ? copyStudents.sort((student1, student2) =>
          avgGrades(student1.grades) - avgGrades(student2.grades))
        : copyStudents.sort((student1, student2) =>
          avgGrades(student2.grades) - avgGrades(student1.grades));
    default:
      return copyStudents;
  }
}
