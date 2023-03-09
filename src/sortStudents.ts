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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function averageGrade(arr: number[]): number {
  let sum: number = 0;

  sum = arr.reduce((prev, item) => prev + item, 0);

  return sum / arr.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copyOfStudents = [...students];
  const typeOfOrder = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
      return typeOfOrder ? copyOfStudents.sort(
        (a: Student, b: Student) => a.name.localeCompare(b.name),
      ) : copyOfStudents.sort(
        (a: Student, b: Student) => b.name.localeCompare(a.name),
      );

    case SortType.Surname:
      return typeOfOrder ? copyOfStudents.sort(
        (a: Student, b: Student) => a.surname.localeCompare(b.surname),
      ) : copyOfStudents.sort(
        (a: Student, b: Student) => b.surname.localeCompare(a.surname),
      );

    case SortType.Age:
      return typeOfOrder ? copyOfStudents.sort(
        (a: Student, b: Student) => a.age - b.age,
      ) : copyOfStudents.sort(
        (a: Student, b: Student) => b.age - a.age,
      );

    case SortType.Married:
      return typeOfOrder ? copyOfStudents.sort(
        (a: Student, b: Student) => +a.married - +b.married,
      ) : copyOfStudents.sort(
        (a: Student, b: Student) => +b.married - +a.married,
      );

    case SortType.AverageGrade:
      return typeOfOrder ? copyOfStudents.sort(
        (a: Student, b: Student) => averageGrade(
          a.grades,
        ) - averageGrade(b.grades),
      ) : copyOfStudents.sort(
        (a: Student, b: Student) => averageGrade(
          b.grades,
        ) - averageGrade(a.grades),
      );

    default:
      return students;
  }
}
