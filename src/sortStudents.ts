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
type Values = string | number | boolean;

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const compareFunction = (
    firstPerson: Student,
    secondPerson: Student,
  ): number => {
    let firstValue: Values;
    let secondValue: Values;
    let firstAverage: Values;
    let secondAverage: Values;

    switch (sortBy) {
      case SortType.Name:
        firstValue = firstPerson.name;
        secondValue = secondPerson.name;
        break;

      case SortType.Surname:
        firstValue = firstPerson.surname;
        secondValue = secondPerson.surname;
        break;

      case SortType.Age:
        firstValue = firstPerson.age;
        secondValue = secondPerson.age;
        break;

      case SortType.Married:
        firstValue = firstPerson.married;
        secondValue = secondPerson.married;
        break;

      case SortType.AverageGrade:
        firstAverage = firstPerson.grades
          .reduce((sum, grade) => sum + grade, 0) / firstPerson.grades.length;

        secondAverage = secondPerson.grades
          .reduce((sum, grade) => sum + grade, 0) / secondPerson.grades.length;

        firstValue = firstAverage;
        secondValue = secondAverage;
        break;

      default:
        throw new Error(`Invalid SortType: ${sortBy}`);
    }

    if (firstValue < secondValue) {
      return order === 'asc' ? -1 : 1;
    }

    if (firstValue > secondValue) {
      return order === 'asc' ? 1 : -1;
    }

    return students.indexOf(firstPerson) - students.indexOf(secondPerson);
  };

  const sortedStudents = [...students].sort(compareFunction);

  return sortedStudents;
}
