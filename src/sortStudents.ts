
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[]
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Array<Student>,
  sortBy: SortType,
  order: SortOrder,
): Array<Student> {
  // write your function
  const result: Array<Student> = [...students]
    .sort((a, b) => {
      switch (sortBy) {
        case SortType.Age:
          return order === 'asc' ? a.age - b.age : b.age - a.age;

        case SortType.Name:
          return order === 'asc'
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);

        case SortType.Married:
          return order === 'asc'
            ? Number(a.married) - Number(b.married)
            : Number(b.married) - Number(a.married);

        case SortType.Surname:
          return order === 'asc'
            ? a.surname.localeCompare(b.surname)
            : b.surname.localeCompare(a.surname);

        case SortType.AverageGrade:
          return order === 'asc'
            ? a.grades.reduce((acc, curr) => acc + curr, 0) / a.grades.length
              - b.grades.reduce((acc, curr) => acc + curr, 0) / b.grades.length
            : b.grades.reduce((acc, curr) => acc + curr, 0) / b.grades.length
              - a.grades.reduce((acc, curr) => acc + curr, 0) / a.grades.length;

        default:
          return 0;
      }
    });

  return result;
}
