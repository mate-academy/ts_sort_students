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
  const sortedStudents: Student[] = [...students];

  function getAverage(student: Student): number {
    return (
      student.grades.reduce(
        (sum, grade) => sum + grade, 0,
      ) / student.grades.length
    );
  }

  sortedStudents.sort((a, b) => {
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
        aValue = getAverage(a);
        bValue = getAverage(b);
        break;
      default:
        return 0;
    }

    if (order === 'asc') {
      if (aValue > bValue) {
        return 1;
      }

      if (aValue < bValue) {
        return -1;
      }

      return 0;
    }

    if (aValue < bValue) {
      return 1;
    }

    if (aValue > bValue) {
      return -1;
    }

    return 0;
  });

  return sortedStudents;
}
