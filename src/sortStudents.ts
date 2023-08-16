
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

export type SortOrder = 'asc' | 'desc';

export function calcAverageGrade(grades: Array<number>): number {
  const sum = grades.reduce((total, grade) => total + grade, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Array<Student>,
  sortBy: SortType,
  order: SortOrder,
): Array<Student> {
  const studentsCopy = [...students];

  return studentsCopy.sort((a: Student, b: Student): number => {
    const direction = order === 'desc' ? -1 : 1;

    switch (sortBy) {
      case SortType.Name:
        return a.name.localeCompare(b.name);
      case SortType.Surname:
        return a.surname.localeCompare(b.surname);
      case SortType.Age:
        return direction * (a.age - b.age);
      case SortType.Married:
        if (a.married === b.married) {
          return 0;
        }

        return a.married ? direction * 1 : direction * -1;

      case SortType.AverageGrade: {
        const averageGradeA = calcAverageGrade(a.grades);
        const averageGradeB = calcAverageGrade(b.grades);

        return direction * (averageGradeA - averageGradeB);
      }

      default:
        return 0;
    }
  });
}
