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
export type SortOrder = 'asc' | 'dsc';

function calcSum(numbers): number {
  const sum = numbers.reduce((prev: number, curr: number) => prev + curr);

  return sum / numbers.length;
}

export function sortStudents(
  students: Student,
  sortBy: SortType,
  order: SortOrder,
): Student {
  const tempStudents = Object.assign([], students);

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        return tempStudents.sort((a, b) => a.name.localeCompare(b.name));
      }

      return tempStudents.sort((a, b) => b.name.localeCompare(a.name));

    case SortType.Surname:
      if (order === 'dsc') {
        return tempStudents.sort((a, b) => b.surname.localeCompare(a.surname));
      }

      return tempStudents.sort((a, b) => a.surname.localeCompare(b.surname));

    case SortType.Age:
      if (order === 'asc') {
        return tempStudents.sort((a, b) => a.age - b.age);
      }

      return tempStudents.sort((a, b) => b.age - a.age);

    case SortType.Married:
      if (order === 'asc') {
        return tempStudents.sort((a, b) => a.married - b.married);
      }

      return tempStudents.sort((a, b) => b.married - a.married);

    case SortType.AverageGrade:
      if (order === 'asc') {
        return tempStudents.sort(
          (a, b) => calcSum(a.grades) - calcSum(b.grades),
        );
      }

      return tempStudents.sort(
        (a, b) => calcSum(b.grades) - calcSum(a.grades),
      );

    default:
      break;
  }

  return tempStudents;
}
