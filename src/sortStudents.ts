
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
  AverageGrade,
}

const ascending = 'asc';

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy:SortType,
  order: SortOrder,
): Student[] {
  const sortedArr: Student[] = [...students];

  sortedArr
    .sort((studentOne: Student, studentTwo: Student): number => {
      switch (sortBy) {
        case SortType.Name:
          if (order === ascending) {
            return studentOne.name.localeCompare(studentTwo.name) >= 0
              ? 1
              : -1;
          }

          return studentOne.name.localeCompare(studentTwo.name) >= 0
            ? -1
            : 1;
        case SortType.Surname:
          if (order === ascending) {
            return studentOne.surname.localeCompare(studentTwo.surname) >= 0
              ? 1
              : -1;
          }

          return studentOne.surname.localeCompare(studentTwo.surname) >= 0
            ? -1
            : 1;
        case SortType.Age:
          if (order === ascending) {
            return studentOne.age > studentTwo.age
              ? 1
              : -1;
          }

          return studentOne.age > studentTwo.age
            ? -1
            : 1;
        case SortType.AverageGrade:
          if (order === ascending) {
            if ((studentOne.grades
              .reduce((a:number, b:number): number => a + b, 0)
              / studentOne.grades.length) > (studentTwo.grades
              .reduce((a:number, b:number): number => a + b, 0)
                  / studentTwo.grades.length)) {
              return 1;
            }

            if ((studentOne.grades
              .reduce((a:number, b:number): number => a + b, 0)
                    / studentOne.grades.length)
                      < (studentTwo.grades
                        .reduce((a:number, b:number): number => a + b, 0)
                        / studentTwo.grades.length)) {
              return -1;
            }

            return studentOne.age > studentTwo.age
              ? -1
              : 1;
          }

          return (studentOne.grades
            .reduce((a:number, b:number): number => a + b, 0)
            / studentOne.grades.length)
              > (studentTwo.grades
                .reduce((a:number, b:number): number => a + b, 0)
                / studentTwo.grades.length)
            ? -1
            : 1;
        case SortType.Married:
          if (order === ascending) {
            return studentOne.married > studentTwo.married
              ? 1
              : -1;
          }

          return studentOne.married > studentTwo.married
            ? -1
            : 1;
        default:
          return 1;
      }
    });

  return sortedArr;
}
