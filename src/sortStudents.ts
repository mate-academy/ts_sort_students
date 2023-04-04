
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

function average(grades: number[]): number {
  return grades.reduce((sum, el) => sum + el, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

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
        aValue = average(a.grades);
        bValue = average(b.grades);
        break;

      default:
        throw new Error(`Invalid SortType '${sortBy}'`);
    }

    if (aValue === bValue) {
      return 0;
    }

    const result = aValue > bValue ? 1 : -1;

    return order === 'asc' ? result : -result;
  });

  return sortedStudents;
}
