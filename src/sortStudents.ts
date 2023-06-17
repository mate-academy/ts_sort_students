export interface Student {
  name: string
  surname : string
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function calculateAverageGrade(student: Student): number {
  const sum: number = student.grades.reduce((acc, grade) => acc + grade, 0);

  return sum / student.grades.length;
}

function compareStrings(a: string, b: string, order: SortOrder): number {
  if (order === 'asc') {
    return a.localeCompare(b);
  }

  return b.localeCompare(a);
}

function compareNumbers(a: number, b: number, order: SortOrder): number {
  if (order === 'asc') {
    return a - b;
  }

  return b - a;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newArray: Student[] = students.map((obj: Student) => ({ ...obj }));

  newArray.sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.Name:
        return compareStrings(a.name, b.name, order);

      case SortType.Surname:
        return compareStrings(a.surname, b.surname, order);
      case SortType.Age:
        return compareNumbers(a.age, b.age, order);

      case SortType.Married:
        if (a.married === b.married) {
          return 0;
        }

        if (a.married) {
          return -1;
        }

        return 1;

      case SortType.AverageGrade:
        return order === 'asc'
          ? calculateAverageGrade(a) - calculateAverageGrade(b)
          : calculateAverageGrade(b) - calculateAverageGrade(a);

      default:
        return 0;
    }
  });

  return newArray;
}
