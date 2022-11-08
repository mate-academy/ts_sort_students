
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

  const averGrade = (grades: number[]) : number => {
    return (grades.reduce((prev:number, curr:number) => prev + curr)
     / grades.length);
  };

  switch (sortBy) {
    case SortType.Name:
      return studentsSort.sort((a: Student, b: Student) => (order === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)));

    case SortType.Surname:
      return studentsSort.sort((a: Student, b: Student) => (order === 'asc'
        ? a.surname.localeCompare(b.surname)
        : b.surname.localeCompare(a.surname)));

    case SortType.Age:
      return studentsSort.sort((a: Student, b: Student) => (order === 'asc'
        ? a.age - b.age
        : b.age - a.age));

    case SortType.Married:
      return studentsSort.sort((a: Student, b: Student) => (order === 'asc'
        ? Number(a.married) - Number(b.married)
        : Number(b.married) - Number(a.married)));

    case SortType.AverageGrade:
      return studentsSort.sort((a: Student, b: Student) => (order === 'asc'
        ? averGrade(a.grades) - averGrade(b.grades)
        : averGrade(b.grades) - averGrade(a.grades)
      ));

    default: throw new Error('Error');
  }
}
