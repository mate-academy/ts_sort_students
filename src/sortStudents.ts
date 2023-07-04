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
  if (grades.length === 0) {
    return 0;
  }

  const sum = grades.reduce((acc, grade) => acc + grade, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
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
        aValue = averageGrade(a.grades);
        bValue = averageGrade(b.grades);
        break;
      default:
        aValue = '';
        bValue = '';
        break;
    }

    if (aValue === bValue) {
      return 0;
    }

    if (order === 'asc') {
      return aValue < bValue ? -1 : 1;
    }

    return aValue < bValue ? 1 : -1;
  };

  return [...students].sort(compareFunction);
}
