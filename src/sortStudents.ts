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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = JSON.parse(JSON.stringify(students));
  let firstStudent: number | string | boolean;
  let secondStudent: number | string | boolean;

  sortedStudents.sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.Name:
        firstStudent = a.name;
        secondStudent = b.name;
        break;

      case SortType.Age:
        firstStudent = a.age;
        secondStudent = b.age;
        break;

      case SortType.Surname:
        firstStudent = a.surname;
        secondStudent = b.surname;
        break;

      case SortType.Married:
        firstStudent = a.married;
        secondStudent = b.married;
        break;

      case SortType.AverageGrade:
        firstStudent = a.grades.reduce((sum, grade) => {
          return sum + grade;
        }, 0) / a.grades.length;

        secondStudent = b.grades.reduce((sum, grade) => {
          return sum + grade;
        }, 0) / b.grades.length;
        break;

      default:
        break;
    }

    if (order === 'asc') {
      return firstStudent < secondStudent ? -1 : 1;
    }

    return firstStudent > secondStudent ? -1 : 1;
  });

  return sortedStudents;
}
