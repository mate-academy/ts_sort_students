
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

function getAverageGrade(grades: number[]): number {
  return grades.reduce((sum, g) => sum + g, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
) : Student[] {
  const studentsCopy = [...students];

  return studentsCopy.sort((a, b) => {
    let valueA: string | number | boolean;
    let valueB: string | number | boolean;

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
        valueA = getAverageGrade(a.grades);
        valueB = getAverageGrade(b.grades);
        break;
      default:
        return 0;
    }

    if (valueA === valueB) {
      return 0;
    }

    if (order === 'asc') {
      return valueA > valueB ? 1 : -1;
    }

    return valueA < valueB ? 1 : -1;
  });
}
