export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = "Name",
  Surname = "Surname",
  Age = "Age",
  Married = "Married",
  AverageGrade = "AverageGrade",
}

export type SortOrder = "asc" | "desc";

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // Copy array to avoid mutating the original
  const studentsCopy = [...students];

  // Helper to calculate average grade safely
  const getAverageGrade = (grades: number[]): number => {
    if (grades.length === 0) {
      return 0;
    } // Avoid division by zero

    const sum = grades.reduce((total, grade) => total + grade, 0);
    return sum / grades.length;
  };

  // Generic comparator function
  const compare = (a: string | number, b: string | number): number => {
    if (a < b) {
      return order === "asc" ? -1 : 1;
    }

    if (a > b) {
      return order === "asc" ? 1 : -1;
    }

    return 0;
  };

  studentsCopy.sort((a, b) => {
    let aValue: string | number;
    let bValue: string | number;


    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        aValue = a[sortBy.toLowerCase() as "name" | "surname"];
        bValue = b[sortBy.toLowerCase() as "name" | "surname"];
        break;
      case SortType.Age:
        aValue = a.age;
        bValue = b.age;
        break;
      case SortType.Married:
        aValue = a.married ? 1 : 0;
        bValue = b.married ? 1 : 0;
        break;
      case SortType.AverageGrade:
        aValue = getAverageGrade(a.grades);
        bValue = getAverageGrade(b.grades);
        break;
    }

    return compare(aValue, bValue);
  });

  return studentsCopy;
}
