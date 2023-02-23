
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
): object {
  function getAverageGrade(numPropValue: Student): number {
    return numPropValue.grades.reduce((sum: number, x: number) => {
      return sum + Number(x);
    }, 0) / numPropValue.grades.length;
  }

  const isCompareAsNumber = sortBy === SortType.Age
  || sortBy === SortType.AverageGrade
  || sortBy === SortType.Married;

  const sortedStudents = [...students].sort((a: Student, b: Student) => {
    let firstPropValue = null;
    let secondPropValue = null;

    switch (sortBy) {
      case SortType.Age:
        firstPropValue = a.age;
        secondPropValue = b.age;
        break;

      case SortType.AverageGrade:
        firstPropValue = getAverageGrade(a);
        secondPropValue = getAverageGrade(b);
        break;

      case SortType.Married:
        firstPropValue = a.married;
        secondPropValue = b.married;
        break;

      case SortType.Name:
        firstPropValue = a.name;
        secondPropValue = b.name;
        break;

      case SortType.Surname:
        firstPropValue = a.surname;
        secondPropValue = b.surname;
        break;

      default:
        break;
    }

    if (order === 'desc') {
      return isCompareAsNumber
        ? Number(secondPropValue) - Number(firstPropValue)
        : String(secondPropValue).localeCompare(String(firstPropValue));
    }

    return isCompareAsNumber
      ? Number(firstPropValue) - Number(secondPropValue)
      : String(firstPropValue).localeCompare(String(secondPropValue));
  });

  return sortedStudents;
}
