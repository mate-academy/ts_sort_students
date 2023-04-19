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
  AverageGrade
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = students.map((el: Student) => ({ ...el }));

  switch (sortBy) {
    case SortType.Name:
      return (copyStudents
        .sort((
          student1: Student,
          student2: Student,
        ) => {
          return order === 'asc'
            ? student1.name.localeCompare(student2.name)
            : +!student1.name.localeCompare(student2.name);
        }));

    case SortType.Surname:
      return (copyStudents
        .sort((
          student1: Student,
          student2: Student,
        ) => {
          return order === 'asc'
            ? student1.surname.localeCompare(student2.surname)
            : +!student1.surname.localeCompare(student2.surname);
        }));

    case SortType.Age:
      return (copyStudents
        .sort((
          student1: Student,
          student2: Student,
        ) => {
          return order === 'asc'
            ? student1.age - student2.age
            : student2.age - student1.age;
        }));

    case SortType.Married:
      return (copyStudents
        .sort((
          student1: Student,
          student2: Student,
        ) => {
          return order === 'asc'
            ? +student1.married - +student2.married
            : +student2.married - +student1.married;
        }));

    case SortType.AverageGrade:
      return (copyStudents
        .sort((
          student1: Student,
          student2: Student,
        ) => {
          const student1Avarage = student1
            .grades
            .reduce((acc: number, grade: number) => acc + grade, 0)
            / student1.grades.length;

          const student2Avarage = student2
            .grades
            .reduce((acc: number, grade: number) => acc + grade, 0)
            / student2.grades.length;

          return order === 'asc'
            ? student1Avarage - student2Avarage
            : student2Avarage - student1Avarage;
        }));

    default:
      throw new Error(`unknown sort type: ${sortBy}`);
  }
}
