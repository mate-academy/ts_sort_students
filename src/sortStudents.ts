
export interface Student {
  name: string,
  surname: string,
  age: number,
  married?: boolean,
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

export function sortStudents(students: object[],
  sortBy: SortType, order: SortOrder): object[] {
  const studentsCopy = [...students];
  let result: object[] = [];

  switch (sortBy) {
    case SortType.Name:
      result = (order === 'asc')
        ? studentsCopy.sort(
          (a: object, b: object) => a.name.localeCompare(b.name),
        )
        : studentsCopy.sort(
          (a: object, b: object) => b.name.localeCompare(a.name),
        );

      return result;
    case SortType.Surname:
      result = (order === 'asc')
        ? studentsCopy.sort(
          (a: object, b: object) => a.surname.localeCompare(b.surname),
        )
        : studentsCopy.sort(
          (a: object, b: object) => a.surname.localeCompare(b.surname),
        );

      return result;
    case SortType.Age:
      result = (order === 'asc')
        ? studentsCopy.sort(
          (a: object, b: object) => a.age - b.age,
        )
        : studentsCopy.sort(
          (a: object, b: object) => b.age - a.age,
        );

      return result;
    case SortType.Married:
      result = (order === 'asc')
        ? studentsCopy.sort(
          (a: object, b: object) => a.married - b.married,
        )
        : studentsCopy.sort(
          (a: object, b: object) => b.married - a.married,
        );

      return result;
    case SortType.AverageGrade:
      result = (order === 'asc')
        ? studentsCopy.sort(
          (a: object, b: object) => (a.grades.reduce(
            (acc: number, value: number) => acc + value, 0,
          ) / a.grades.length) - (b.grades.reduce(
            (acc: number, value: number) => acc + value, 0,
          ) / b.grades.length),
        )
        : studentsCopy.sort(
          (a: object, b: object) => (b.grades.reduce(
            (acc: number, value: number) => acc + value, 0,
          ) / b.grades.length) - (a.grades.reduce(
            (acc: number, value: number) => acc + value, 0,
          ) / a.grades.length),
        );

      return result;

    default:
      throw new Error('Wrong input data!');
  }
}
