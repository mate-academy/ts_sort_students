export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

interface CopiedStudent extends Student {
  avgGrade: number
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
  const copiedStudents: CopiedStudent[] = [...students].map((student) => {
    const lengthArr = student.grades.length;
    const averageGrade
      = student.grades.reduce((acc, grade) => acc + grade, 0) / lengthArr;

    return Object.assign(
      student, { avgGrade: Math.trunc(averageGrade * 100) / 100 },
    );
  });

  return copiedStudents.sort((
    student1: CopiedStudent, student2: CopiedStudent,
  ): number => {
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
        return orderNum * (student1.age - student2.age);

      case SortType.Married:
        if (student1.married && !student2.married) {
          return 1 * orderNum;
        }

        if (!student1.married && student2.married) {
          return -1 * orderNum;
        }

        return 0;

      case SortType.AverageGrade: {
        if (student1.avgGrade > student2.avgGrade) {
          return 1 * orderNum;
        }

        if (student1.avgGrade < student2.avgGrade) {
          return -1 * orderNum;
        }

        return 0;
      }
      default:
        return 0;
    }
  });
}
