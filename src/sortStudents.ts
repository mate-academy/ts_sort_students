
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function getAverage(students: Student): number {
  if (students.grades.length === 0) {
    return 0;
  }

  return students.grades.reduce((a, b) => a + b, 0) / students.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a, b) => {
    let firstElement = a;
    let secondElement = b;

    if (order === 'desc') {
      firstElement = b;
      secondElement = a;
    }

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return firstElement[sortBy].localeCompare(secondElement[sortBy]);

      case SortType.Age:
        return firstElement.age - secondElement.age;

      case SortType.Married:
        return +firstElement.married - +secondElement.married;

      case SortType.AverageGrade:
        return getAverage(firstElement) - getAverage(secondElement);

      default:
        return 0;
    }
  });
}
