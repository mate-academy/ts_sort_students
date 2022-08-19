
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades:number[]):number {
  return grades.reduce((sum, mark) => sum + mark, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];
  let married;
  let notMarried;

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? sortedStudents.sort((st1: Student, st2: Student): number => (
          st1.name.localeCompare(st2.name)
        ))
        : sortedStudents.sort((st1: Student, st2: Student): number => (
          st2.name.localeCompare(st1.name)
        ));

    case SortType.Surname:
      return order === 'asc'
        ? sortedStudents.sort((st1: Student, st2: Student): number => (
          st1.surname.localeCompare(st2.surname)
        ))
        : sortedStudents.sort((st1: Student, st2: Student): number => (
          st2.surname.localeCompare(st1.surname)
        ));

    case SortType.Age:
      return order === 'asc'
        ? sortedStudents.sort((st1: Student, st2: Student): number => (
          st1.age - st2.age
        ))
        : sortedStudents.sort((st1: Student, st2: Student): number => (
          st2.age - st1.age
        ));

    case SortType.Married:
      married = sortedStudents
        .filter((st: Student): boolean => st.married === true);

      notMarried = sortedStudents
        .filter((st: Student): boolean => st.married === false);

      return order === 'asc'
        ? [...notMarried, ...married]
        : [...married, ...notMarried];

    case SortType.AverageGrade:
      return order === 'asc'
        ? sortedStudents.sort((st1: Student, st2: Student): number => (
          getAverageGrade(st1.grades) - getAverageGrade(st2.grades)
        ))
        : sortedStudents.sort((st1: Student, st2: Student): number => (
          getAverageGrade(st2.grades) - getAverageGrade(st1.grades)
        ));

    default:
      throw new Error('Something went wrong...');
  }
}
