export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

// defining fields by which the students can be sorted
export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// defining possible soritng ways
export type SortOrder = 'asc' | 'desc';

// takes an array of students, the SortType - fields to sort by,
// and the SortOrder (asc or desc)
// returns a new array of students sorted according to the given parameters,
// without modifying the original array.

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // calculate the average grade from the grades array:
  function calculateAverageGrade(grades: number[]): number {
    const sum = grades.reduce((total, grade) => total + grade, 0);

    return sum / grades.length;
  }

  // logic based on the SortType specified:
  const compareFunction = (a: Student, b: Student): number => {
    let aValue;
    let bValue;

    switch (sortBy) {
      case SortType.Name:
        aValue = a.name;
        bValue = b.name;
        break;
      case SortType.Surname:
        aValue = a.surname;
        bValue = b.surname;
        break;
      case SortType.Age:
        aValue = a.age;
        bValue = b.age;
        break;
      case SortType.Married:
        aValue = a.married;
        bValue = b.married;
        break;
      case SortType.AverageGrade:
        aValue = calculateAverageGrade(a.grades);
        bValue = calculateAverageGrade(b.grades);
        break;
      default:
        return 0;
    }

    if (aValue < bValue) {
      return order === 'asc' ? -1 : 1;
    }

    if (aValue > bValue) {
      return order === 'asc' ? 1 : -1;
    }

    return 0;
  };

  // copy of the input array (using the spread operator
  // to avoid modifying the original array):
  const sortedStudents = [...students];

  sortedStudents.sort(compareFunction);

  return sortedStudents;
}
