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

function compareProperties(
  property1:string,
  property2:string,
  orderOfSorting: number,
): number {
  if (property1.toLowerCase() > property2.toLowerCase()) {
    return 1 * orderOfSorting;
  }

  if (property1.toLowerCase() < property2.toLowerCase()) {
    return -1 * orderOfSorting;
  }

  return 0;
}

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
        return compareProperties(student1.name, student2.name, orderNum);

      case SortType.Surname:
        return compareProperties(student1.surname, student2.surname, orderNum);

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

      case SortType.AverageGrade:
        return orderNum * (student1.avgGrade - student2.avgGrade);
      default:
        return 0;
    }
  });
}
