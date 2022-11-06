
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
  const studentsSort: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      return studentsSort.sort((a: Student, b: Student) => ((order
         === 'asc') ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)));

    case SortType.Surname:
      return studentsSort.sort((a: Student, b: Student) => ((order
         === 'asc') ? a.surname.localeCompare(b.surname)
        : b.surname.localeCompare(a.surname)));

    case SortType.Age:
      return studentsSort.sort((a: Student, b: Student) => ((order
         === 'asc') ? a.age - b.age : b.age - a.age));

    case SortType.Married:
      return studentsSort.sort((a: Student, b: Student) => ((order
         === 'asc') ? Number(a.married) - Number(b.married)
        : Number(b.married) - Number(a.married)));

    case SortType.AverageGrade:
      return studentsSort.sort((a: Student, b: Student) => ((order === 'asc')
        ? (a.grades.reduce((prev, curr) => prev + curr) / a.grades.length)
         - (b.grades.reduce((prev, curr) => prev + curr) / b.grades.length)
        : (b.grades.reduce((prev, curr) => prev + curr) / b.grades.length)
         - (a.grades.reduce((prev, curr) => prev + curr) / a.grades.length)));

    default: throw new Error('Error');
  }
}
