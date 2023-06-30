
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
  const findAverage = (student: Student): number => student.grades
    .reduce((acc, grade) => acc + grade, 0) / student.grades.length || 0;

  const sortedStudents: Student[] = students.slice();
  const orderMultiplier: number = order === 'asc' ? 1 : -1;

  switch (sortBy) {
    case SortType.Name:
      sortedStudents.sort((a, b) => orderMultiplier
        * a.name.localeCompare(b.name));
      break;

    case SortType.Surname:
      sortedStudents.sort((a, b) => orderMultiplier
        * a.surname.localeCompare(b.surname));
      break;

    case SortType.Age:
      sortedStudents.sort((a, b) => orderMultiplier * (a.age - b.age));
      break;

    case SortType.Married:
      sortedStudents.sort((a, b) => {
        if (a.married === b.married) {
          return 0;
        }

        return a.married ? orderMultiplier : -orderMultiplier;
      });
      break;

    case SortType.AverageGrade:
      sortedStudents.sort((a, b) => orderMultiplier
        * (findAverage(a) - findAverage(b)));
      break;

    default:
      break;
  }

  return sortedStudents;
}
