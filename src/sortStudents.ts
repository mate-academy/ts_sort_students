
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];

}

export enum SortType {
  Name = 'NAME',
  Surname = 'SURNAME',
  Age = 'AGE',
  Married = 'MARRIED',
  AverageGrade = 'GRADES',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  const studentsArray: Student[] = [...students];
  const getAverageGrade = (grades: number[]): number => {
    return grades.reduce((acc, curr) => acc + curr, 0) / grades.length;
  };
  const getSortFunction = (): (a: Student, b: Student) => number => {
    const sortFunction = (a: Student, b: Student):number => {
      switch (sortBy) {
        case SortType.Name:
          return a.name.localeCompare(b.name);
        case SortType.Surname:
          return a.surname.localeCompare(b.surname);
        case SortType.Age:
          return a.age - b.age;
        case SortType.Married:
          return a.married - b.married;
        case SortType.AverageGrade:
          return getAverageGrade(a.grades) - getAverageGrade(b.grades);
        default:
          return 0;
      }
    };

    return order === 'asc' ? sortFunction : (a, b):number => sortFunction(b, a);
  };

  studentsArray.sort(getSortFunction());

  return studentsArray;
}
