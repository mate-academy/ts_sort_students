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
  AverageGrade
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  function average(grades: number[]) : number {
    return grades.reduce((num1, num2) => num1 + num2, 0) / grades.length;
  }

  switch (sortBy) {
    case (SortType.Name):
      studentsCopy.sort((prev, curr) => {
        return order === 'asc'
          ? prev.name.localeCompare(curr.name)
          : curr.name.localeCompare(prev.name);
      });

      break;

    case (SortType.Surname):
      studentsCopy.sort((prev, curr) => {
        return order === 'asc'
          ? prev.surname.localeCompare(curr.surname)
          : curr.surname.localeCompare(prev.surname);
      });

      break;

    case (SortType.Age):
      studentsCopy.sort((prev, curr) => {
        return order === 'asc'
          ? prev.age - curr.age
          : curr.age - prev.age;
      });

      break;

    case (SortType.Married):
      studentsCopy.sort((prev, curr) => {
        return order === 'asc'
          ? +prev.married - +curr.married
          : +curr.married - +prev.married;
      });

      break;

    case (SortType.AverageGrade):
      studentsCopy.sort((prev, curr) => {
        return order === 'asc'
          ? average(prev.grades) - average(curr.grades)
          : average(curr.grades) - average(prev.grades);
      });

      break;

    default:
      return studentsCopy;
  }

  return studentsCopy;
}
