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

function getAverageGrade(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  const getSortValue = (student: Student): string | number | boolean => {
    switch (sortBy) {
      case SortType.Name:
        return student.name;

      case SortType.Surname:
        return student.surname;

      case SortType.Age:
        return student.age;

      case SortType.Married:
        return student.married;

      case SortType.AverageGrade:
        return getAverageGrade(student.grades);

      default:
        return 0;
    }
  };

  return studentsCopy.sort((a, b) => {
    const valueA = getSortValue(a);
    const valueB = getSortValue(b);

    if (valueA === valueB) {
      return 0;
    }

    if (order === 'asc') {
      if (valueA > valueB) {
        return 1;
      }

      return -1;
    }

    // order === 'desc'
    if (valueA < valueB) {
      return 1;
    }

    return -1;
  });
}
