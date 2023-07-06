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
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

function averageGrade(array: number[]): number {
  const result: number = array.reduce((accum, current) => accum + current,
    0);

  return result / array.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): object[] {
  let preparedArray: object[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        preparedArray = preparedArray.sort(
          (student1, student2) => student1.name.localeCompare(student2.name),
        );
      }

      if (order === 'desc') {
        preparedArray = preparedArray.sort(
          (student1, student2) => student2.name.localeCompare(student1.name),
        );
      }

      break;

    case SortType.Surname:
      if (order === 'asc') {
        preparedArray = preparedArray.sort(
          (student1, student2) => student1.surname
            .localeCompare(student2.surname),
        );
      }

      if (order === 'desc') {
        preparedArray = preparedArray.sort(
          (student1, student2) => student2.surname
            .localeCompare(student1.surname),
        );
      }

      break;

    case SortType.Age:
      if (order === 'asc') {
        preparedArray = preparedArray.sort(
          (student1, student2) => student1.age - student2.age,
        );
      }

      if (order === 'desc') {
        preparedArray = preparedArray.sort(
          (student1, student2) => student2.age - student1.age,
        );
      }

      break;

    case SortType.Married:
      if (order === 'asc') {
        preparedArray = preparedArray.sort(
          (student1, student2) => student1.married - student2.married,
        );
      }

      if (order === 'desc') {
        preparedArray = preparedArray.sort(
          (student1, student2) => student2.married - student1.married,
        );
      }

      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        preparedArray = preparedArray.sort(
          (student1, student2) => averageGrade(student1.grades)
            - averageGrade(student2.grades),
        );
      }

      if (order === 'desc') {
        preparedArray = preparedArray.sort(
          (student1, student2) => averageGrade(student2.grades)
            - averageGrade(student1.grades),
        );
      }

      break;

    default:
      return preparedArray;
  }

  return preparedArray;
}
