
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: object[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = JSON.parse(JSON.stringify(students));
  const orderDirection = order === 'asc' ? 1 : -1;

  switch (sortBy) {
    case SortType.Name:
      return sortedStudents.sort((a: Student, b: Student) => (
        orderDirection * a.name.localeCompare(b.name)
      ));

    case SortType.Surname:
      return sortedStudents.sort((a: Student, b: Student) => (
        orderDirection * a.surname.localeCompare(b.surname)
      ));

    case SortType.Age:
      return sortedStudents.sort((a: Student, b: Student) => (
        orderDirection * (a.age - b.age)
      ));

    case SortType.Married:
      return sortedStudents.sort((a: Student, b: Student) => (
        a.married > b.married ? orderDirection : orderDirection * -1
      ));

    case SortType.AverageGrade:
      return sortedStudents.sort((a: Student, b: Student) => {
        const averageGradesA: number = a.grades
          .reduce((acc: number, grade: number) => acc + grade, 0)
          / a.grades.length;

        const averageGradesB: number = b.grades
          .reduce((acc: number, grade: number) => acc + grade, 0)
          / b.grades.length;

        return orderDirection * (averageGradesA - averageGradesB);
      });

    default:
      throw new Error('error');
  }
}
