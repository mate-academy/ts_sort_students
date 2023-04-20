
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
  AverageGrade
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function calculateAverage(param: number[]): number {
  return param.reduce((prev, curr) => prev + curr) / param.length;
}

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  const studentsForSorting: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? studentsForSorting.sort((a, b) => a.name.localeCompare(b.name))
        : studentsForSorting.sort((a, b) => b.name.localeCompare(a.name));
    case SortType.Surname:
      return order === 'asc'
        ? studentsForSorting.sort((a, b) => a.surname.localeCompare(b.surname))
        : studentsForSorting.sort((a, b) => b.surname.localeCompare(a.surname));
    case SortType.Age:
      return order === 'asc'
        ? studentsForSorting.sort((a, b) => a.age - b.age)
        : studentsForSorting.sort((a, b) => b.age - a.age);
    case SortType.Married:
      return order === 'asc'
        ? studentsForSorting.sort((a, b) => a.married.toString()
          .localeCompare(b.married.toString()))
        : studentsForSorting.sort((a, b) => b.married.toString()
          .localeCompare(a.married.toString()));
    case SortType.AverageGrade:
      return order === 'asc'
        ? studentsForSorting.sort((a, b) => (calculateAverage(a.grades)
          - calculateAverage(b.grades)))
        : studentsForSorting.sort((a, b) => (calculateAverage(b.grades)
        - calculateAverage(a.grades)));
    default: return studentsForSorting;
  }
}
