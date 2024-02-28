/* eslint-disable max-len */

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
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    let comparison = 0;

    switch (sortBy) {
      case SortType.Name:
        comparison = a.name.localeCompare(b.name);
        break;
      case SortType.Surname:
        comparison = a.surname.localeCompare(b.surname);
        break;
      case SortType.Age:
        comparison = a.age - b.age;
        break;
      case SortType.Married:
        if (a.married === b.married) {
          comparison = 0;
        } else {
          comparison = a.married ? 1 : -1;
        }
        break;
      case SortType.AverageGrade:
        // eslint-disable-next-line no-case-declarations
        const avgGradeA = a.grades.reduce((total, grade) => total + grade, 0) / a.grades.length;
        // eslint-disable-next-line no-case-declarations
        const avgGradeB = b.grades.reduce((total, grade) => total + grade, 0) / b.grades.length;

        comparison = avgGradeA - avgGradeB;
        break;
      default:
        break;
    }

    if (comparison === 0) {
      return 0;
    }

    return (order === 'asc') ? comparison : -comparison;
  });

  return sortedStudents;
}
