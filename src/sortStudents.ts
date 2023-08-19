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

function averageGrade(grades: number[]): number {
  return grades.reduce((acc, grade) => acc + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  const compareStudents = (a: Student, b: Student): number => {
    switch (sortBy) {
      case SortType.Name:

        return a.name.localeCompare(b.name);

      case SortType.Surname:
        return a.surname.localeCompare(b.surname);

      case SortType.Age:
        return a.age - b.age;

      case SortType.Married:
        if (a.married === b.married) {
          return 0;
        }

        return a.married ? 1 : -1;

      case SortType.AverageGrade: {
        const averageGradeA = averageGrade(a.grades);
        const averageGradeB = averageGrade(b.grades);

        return averageGradeA - averageGradeB;
      }
      default:

        return 0;
    }
  };

  const direction = order === 'desc' ? -1 : 1;

  studentsCopy.sort((a, b) => direction * compareStudents(a, b));

  return studentsCopy;
}
