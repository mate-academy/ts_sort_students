
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
        ? studentsForSorting.sort((a, b) => (a.grades
          .reduce((prev, curr) => prev + curr) / a.grades.length)
        - (b.grades.reduce((prev, curr) => prev + curr) / b.grades.length))
        : studentsForSorting.sort((a, b) => (b.grades
          .reduce((prev, curr) => prev + curr) / b.grades.length)
        - (a.grades.reduce((prev, curr) => prev + curr) / a.grades.length));
    default: return studentsForSorting;
  }
}
