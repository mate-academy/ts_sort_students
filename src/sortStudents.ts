// describe Student type
interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}
// create and export SortType enum
export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}
// create SortOrder type
type SortOrder = 'asc' | 'desc';

function averageGrade(array: number[]): number {
  return array.reduce((sum: number, num: number) => sum + num) / array.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  if (sortBy === SortType.Name) {
    return order === 'asc'
      ? sortedStudents.sort((first, second) => (
        first.name.localeCompare(second.name)))
      : sortedStudents.sort((first, second) => (
        second.name.localeCompare(first.name)));
  }

  if (sortBy === SortType.Surname) {
    return order === 'asc'
      ? sortedStudents.sort((first, second) => (
        first.surname.localeCompare(second.surname)))
      : sortedStudents.sort((first, second) => (
        second.surname.localeCompare(first.surname)));
  }

  if (sortBy === SortType.Age) {
    return order === 'asc'
      ? sortedStudents.sort((first, second) => first.age - second.age)
      : sortedStudents.sort((first, second) => second.age - first.age);
  }

  if (sortBy === SortType.Married) {
    sortedStudents.sort((first, second) => {
      if (first.married === second.married) {
        return 0;
      }

      if (order === 'asc') {
        return first.married ? 1 : -1;
      }

      return first.married ? -1 : 1;
    });
  }

  if (sortBy === SortType.AverageGrade) {
    return order === 'asc'
      ? sortedStudents.sort((first, second) => (
        averageGrade(first.grades) - averageGrade(second.grades)))
      : sortedStudents.sort((first, second) => (
        averageGrade(second.grades) - averageGrade(first.grades)));
  }

  return sortedStudents;
}
