
export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy:SortType,
  order: SortOrder,
): Student[] {
  // write your function
  const sortedArr: Student[] = [...students];

  sortedArr
    .sort((studentOne: Student, studentTwo: Student): number => {
      switch (sortBy) {
        case SortType.Name:
          if (order === 'asc') {
            return studentOne.name.localeCompare(studentTwo.name) >= 0
              ? 1
              : -1;
          }

          return studentOne.name.localeCompare(studentTwo.name) >= 0
            ? -1
            : 1;
        case SortType.Surname:
          if (order === 'asc') {
            return studentOne.surname.localeCompare(studentTwo.surname) >= 0
              ? 1
              : -1;
          }

          return studentOne.surname.localeCompare(studentTwo.surname) >= 0
            ? -1
            : 1;
        case SortType.Age:
          if (order === 'asc') {
            return studentOne.age > studentTwo.age
              ? 1
              : -1;
          }

          return studentOne.age > studentTwo.age
            ? -1
            : 1;
        case SortType.AverageGrade:
          if (order === 'asc') {
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
          if (order === 'asc') {
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
