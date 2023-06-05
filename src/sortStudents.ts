
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
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    let aValue: string | number | boolean;
    let bValue: string | number | boolean;
    let aAverage: number;
    let bAverage: number;

    if (SortType.AverageGrade) {
      aAverage = a.grades.reduce((sum, grade) => {
        return sum + grade;
      }, 0) / a.grades.length;

      bAverage = b.grades.reduce((sum, grade) => {
        return sum + grade;
      }, 0) / b.grades.length;
    }

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
        aValue = aAverage;
        bValue = bAverage;
        break;
      default:
        break;
    }

    if (aValue === bValue) {
      return students.indexOf(a) - students.indexOf(b);
    }

    if (order === 'asc') {
      return aValue < bValue ? -1 : 1;
    }

    return aValue > bValue ? -1 : 1;
  });

  return sortedStudents;
}
