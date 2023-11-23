
export interface Student {
  name: string
  surname: string
  age: number
  married: boolean
  grades: number[]
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
): Student[] {
  const sortedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
      sortedStudents
        .sort((a: Student, b: Student) => {
          if (order === 'asc') {
            return a.name.localeCompare(b.name);
          }

          return b.name.localeCompare(a.name);
        });
      break;

    case SortType.Surname:
      sortedStudents
        .sort((a: Student, b: Student) => {
          if (order === 'asc') {
            return a.surname.localeCompare(b.surname);
          }

          return b.surname.localeCompare(a.surname);
        });
      break;

    case SortType.Age:
      sortedStudents
        .sort((a: Student, b: Student) => {
          if (order === 'asc') {
            return a.age - b.age;
          }

          return b.age - a.age;
        });
      break;

    case SortType.Married:
      sortedStudents
        .sort((a: Student, b: Student) => {
          if (order === 'asc') {
            if (a.married < b.married) {
              return -1;
            }

            if (a.married > b.married) {
              return 1;
            }

            return 0;
          }

          if (a.married > b.married) {
            return -1;
          }

          if (a.married < b.married) {
            return 1;
          }

          return 0;
        });
      break;

    case SortType.AverageGrade:
      sortedStudents.sort((a: Student, b: Student) => {
        const avgA = a.grades
          .reduce((sum, grade) => sum + grade, 0) / a.grades.length;
        const avgB = b.grades
          .reduce((sum, grade) => sum + grade, 0) / b.grades.length;

        return order === 'asc' ? avgA - avgB : avgB - avgA;
      });
      break;
    default:
      return sortedStudents;
  }

  return sortedStudents;
}
