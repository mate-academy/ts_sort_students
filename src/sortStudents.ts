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
  const orderNum: number = order === 'asc' ? 1 : -1;

  return students.sort((student1: Student, student2: Student): number => {
    switch (sortBy) {
      case SortType.Name:
        if (student1.name.toLowerCase() > student2.name.toLowerCase()) {
          return 1 * orderNum;
        }

        if (student1.name.toLowerCase() < student2.name.toLowerCase()) {
          return -1 * orderNum;
        }

        return 0;

      case SortType.Surname:
        if (student1.surname.toLowerCase() > student2.surname.toLowerCase()) {
          return 1 * orderNum;
        }

        if (student1.surname.toLowerCase() < student2.surname.toLowerCase()) {
          return -1 * orderNum;
        }

        return 0;

      case SortType.Age:
        if (student1.age > student2.age) {
          return 1 * orderNum;
        }

        if (student1.age < student2.age) {
          return -1 * orderNum;
        }

        return 0;

      case SortType.Married:
        if (student1.married > student2.married) {
          return 1 * orderNum;
        }

        if (student1.married < student2.married) {
          return -1 * orderNum;
        }

        return 0;

      case SortType.AverageGrade: {
        const student1AverageGrade = student1.grades.reduce((acc, grade) => {
          return acc + grade;
        }, 0) / student1.grades.length;
        const student2AverageGrade = student2.grades.reduce((acc, grade) => {
          return acc + grade;
        }, 0) / student2.grades.length;

        if (student1AverageGrade > student2AverageGrade) {
          return 1 * orderNum;
        }

        if (student1AverageGrade < student2AverageGrade) {
          return -1 * orderNum;
        }

        return 0;
      }
      default:
        return 0;
    }
  });
}
