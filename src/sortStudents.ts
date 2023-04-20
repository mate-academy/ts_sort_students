
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: number,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'gradesAverage',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const studentsCopy = [...students];
  let result: Student[] = [];

  switch (sortBy) {
    case SortType.Name:
      result = (order === 'asc')
        ? studentsCopy.sort(
          (a: Student, b: Student) => a.name.localeCompare(b.name),
        )
        : studentsCopy.sort(
          (a: Student, b: Student) => b.name.localeCompare(a.name),
        );

      return result;
    case SortType.Surname:
      result = (order === 'asc')
        ? studentsCopy.sort(
          (a: Student, b: Student) => a.surname.localeCompare(b.surname),
        )
        : studentsCopy.sort(
          (a: Student, b: Student) => a.surname.localeCompare(b.surname),
        );

      return result;
    case SortType.Age:
      result = (order === 'asc')
        ? studentsCopy.sort(
          (a: Student, b: Student) => a.age - b.age,
        )
        : studentsCopy.sort(
          (a: Student, b: Student) => b.age - a.age,
        );

      return result;
    case SortType.Married:
      result = (order === 'asc')
        ? studentsCopy.sort(
          (a: Student, b: Student) => a.married - b.married,
        )
        : studentsCopy.sort(
          (a: Student, b: Student) => b.married - a.married,
        );

      return result;
    case SortType.AverageGrade:
      result = (order === 'asc')
        ? studentsCopy.sort(
          (a: Student, b: Student) => (a.grades.reduce(
            (acc: number, value: number) => acc + value, 0,
          ) / a.grades.length) - (b.grades.reduce(
            (acc: number, value: number) => acc + value, 0,
          ) / b.grades.length),
        )
        : studentsCopy.sort(
          (a: Student, b: Student) => (b.grades.reduce(
            (acc: number, value: number) => acc + value, 0,
          ) / b.grades.length) - (a.grades.reduce(
            (acc: number, value: number) => acc + value, 0,
          ) / a.grades.length),
        );

      return result;

    default:
      return students;
  }
}
