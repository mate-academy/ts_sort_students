// describe Student type
interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
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
  return array.reduce((ack: number, num: number) => ack + num) / array.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  if (sortBy === SortType.Name) {
    return order === 'asc'
      ? copyStudents.sort((first, second) => (
        first.name.localeCompare(second.name)))
      : copyStudents.sort((first, second) => (
        second.name.localeCompare(first.name)));
  }

  if (sortBy === SortType.Surname) {
    return order === 'asc'
      ? copyStudents.sort((first, second) => (
        first.surname.localeCompare(second.surname)))
      : copyStudents.sort((first, second) => (
        second.surname.localeCompare(first.surname)));
  }

  if (sortBy === SortType.Age) {
    return order === 'asc'
      ? copyStudents.sort((first, second) => first.age - second.age)
      : copyStudents.sort((first, second) => second.age - first.age);
  }

  if (sortBy === SortType.Married) {
    copyStudents.sort((first, second) => {
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
      ? copyStudents.sort((first, second) => (
        averageGrade(first.grades) - averageGrade(second.grades)))
      : copyStudents.sort((first, second) => (
        averageGrade(second.grades) - averageGrade(first.grades)));
  }

  return copyStudents;
}
