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
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sorted: Student[] = [...students];

  if (order === 'asc') {
    switch (sortBy) {
      case SortType.Name:
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case SortType.Surname:
        sorted.sort((a, b) => a.surname.localeCompare(b.surname));
        break;

      case SortType.Age:
        sorted.sort((a, b) => a.age - b.age);
        break;

      case SortType.Married:
        sorted.sort((a, b) => (a.married ? 1 : -1) - (b.married ? 1 : -1));
        break;

      case SortType.AverageGrade:
        sorted.sort((a, b) => {
          const averageGradeA
            = a.grades.reduce((sum, grade) => sum + grade, 0) / a.grades.length;
          const averageGradeB
            = b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length;

          return averageGradeA - averageGradeB;
        });
        break;

      default:
        break;
    }
  } else if (order === 'desc') {
    switch (sortBy) {
      case SortType.Name:
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;

      case SortType.Surname:
        sorted.sort((a, b) => b.surname.localeCompare(a.surname));
        break;

      case SortType.Age:
        sorted.sort((a, b) => b.age - a.age);
        break;

      case SortType.Married:
        sorted.sort((a, b) => (b.married ? 1 : -1) - (a.married ? 1 : -1));
        break;

      case SortType.AverageGrade:
        sorted.sort((a, b) => {
          const averageGradeA
            = a.grades.reduce((sum, grade) => sum + grade, 0) / a.grades.length;
          const averageGradeB
            = b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length;

          return averageGradeB - averageGradeA;
        });
        break;

      default:
        break;
    }
  }

  return sorted;
}
