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

export function calculateAverageGrade(grades: number[]): number {
  return grades.reduce((a, b) => a + b, 0) / grades.length;
}

// Helper function to handle string comparisons
function compareStrings(a: string, b: string, order: SortOrder): number {
  if (a === b) {
    return 0;
  }

  const result = a < b ? -1 : 1;

  return order === 'asc' ? result : -result;
}

// Helper function to handle number comparisons
function compareNumbers(a: number, b: number, order: SortOrder): number {
  if (a === b) {
    return 0;
  }

  const result = a < b ? -1 : 1;

  return order === 'asc' ? result : -result;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsArrayCopy: Student[] = [...students];

  return studentsArrayCopy.sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
        return compareStrings(a.name, b.name, order);

      case SortType.Surname:
        return compareStrings(a.surname, b.surname, order);

      case SortType.Age:
        return compareNumbers(a.age, b.age, order);

      case SortType.Married:
        return compareNumbers(Number(a.married), Number(b.married), order);

      case SortType.AverageGrade: {
        const averageGradeA = calculateAverageGrade(a.grades);
        const averageGradeB = calculateAverageGrade(b.grades);
        // linter was unhappy so I added a block

        return compareNumbers(averageGradeA, averageGradeB, order);
      }

      default:
        throw new Error(`Unsupported sort type: ${sortBy}`);
    }
  });
}
