
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): object[] {
  students.sort((st1: Student, st2: Student): number => {
    switch (sortBy) {
      case SortType.Name:
        return st1.name.localeCompare(st2.name);

      case SortType.Surname:
        return st1.surname.localeCompare(st2.surname);

      case SortType.Age:
        return st2.age - st1.age;

      case SortType.Married:
        return st1.married
          ? -1
          : 1;

      case SortType.AverageGrade:
        return ((st1.grades.reduce((sum, current) => sum + current, 0))
          / st1.grades.length
          - (st2.grades.reduce((sum, current) => sum + current, 0))
          / st2.grades.length);
      default:
        return 0;
    }
  });

  if (order === 'desc') {
    return students.reverse();
  }

  return students;
}
