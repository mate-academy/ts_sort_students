
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
  AverageGrade
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  let sortedStudents: Student[];

  if (order === 'asc') {
    switch (sortBy) {
      case SortType.Name:
        sortedStudents = students
          .slice()
          .sort((a: Student, b: Student) => a.name.localeCompare(b.name));

        return sortedStudents;
      case SortType.Surname:
        sortedStudents = students
          .slice()
          .sort((a: Student, b: Student) => a.surname.localeCompare(b.surname));

        return sortedStudents;
      case SortType.Age:
        sortedStudents = students
          .slice()
          .sort((a: Student, b: Student) => a.age - b.age);

        return sortedStudents;
      case SortType.Married:
        sortedStudents = students
          .slice()
          .sort((
            a: Student, b: Student,
          ) => Number(a.married) - Number(b.married));

        return sortedStudents;
      case SortType.AverageGrade:
        sortedStudents = students
          .slice()
          .sort((a: Student, b: Student) => {
            const aAverageGrade: number = a.grades.reduce((
              c: number,
              d: number,
            ) => c + d) / a.grades.length;

            const bAverageGrade: number = b.grades.reduce((
              c: number,
              d: number,
            ) => c + d) / b.grades.length;

            return aAverageGrade - bAverageGrade;
          });

        return sortedStudents;
      default:
    }
  }

  if (order === 'desc') {
    switch (sortBy) {
      case SortType.Name:
        sortedStudents = students
          .slice()
          .sort((a: Student, b: Student) => b.name.localeCompare(a.name));

        return sortedStudents;
      case SortType.Surname:
        sortedStudents = students
          .slice()
          .sort((a: Student, b: Student) => b.surname.localeCompare(a.surname));

        return sortedStudents;
      case SortType.Age:
        sortedStudents = students
          .slice()
          .sort((a: Student, b: Student) => b.age - a.age);

        return sortedStudents;
      case SortType.Married:
        sortedStudents = students
          .slice()
          .sort((
            a: Student, b: Student,
          ) => Number(b.married) - Number(a.married));

        return sortedStudents;
      case SortType.AverageGrade:
        sortedStudents = students
          .slice()
          .sort((a: Student, b: Student) => {
            const aAverageGrade: number = a.grades.reduce((
              c: number,
              d: number,
            ) => c + d) / a.grades.length;

            const bAverageGrade: number = b.grades.reduce((
              c: number,
              d: number,
            ) => c + d) / b.grades.length;

            return bAverageGrade - aAverageGrade;
          });

        return sortedStudents;
      default:
    }
  }

  return students;
}
