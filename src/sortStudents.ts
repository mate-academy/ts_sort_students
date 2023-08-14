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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    let valueA;
    let valueB;

    switch (sortBy) {
      case SortType.Name:
        valueA = a.name;
        valueB = b.name;
        break;

      case SortType.Surname:
        valueA = a.surname;
        valueB = b.surname;
        break;

      case SortType.Age:
        valueA = a.age;
        valueB = b.age;
        break;

      case SortType.Married:
        valueA = a.married;
        valueB = b.married;
        break;

      case SortType.AverageGrade:
        valueA = a.grades.reduce(
          (sum, grade) => sum + grade,
          0,
        ) / a.grades.length;

        valueB = b.grades.reduce(
          (sum, grade) => sum + grade,
          0,
        ) / b.grades.length;
        break;

      default:
        return sortedStudents;
    }

    if (valueA === valueB) {
      return 0;
    }

    if (order === 'asc') {
      return valueA < valueB ? -1 : 1;
    }

    return valueA < valueB ? 1 : -1;
  });

  return sortedStudents;
}
