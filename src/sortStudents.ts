
export interface Student {
  name:string,
  surname: string,
  age: number,
  married:boolean,
  grades:number[],
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

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  const studentList:Student[] = students.map(
    (student:Student) => ({ ...student }),
  );

  // eslint-disable-next-line default-case
  switch (sortBy) {
    // eslint-disable-next-line no-undef
    case SortType.Surname:
      if (order === 'asc') {
        return studentList.sort(
          (a, b) => a.surname.localeCompare(b.surname),
        );
      }

      return studentList.sort(
        (a, b) => b.surname.localeCompare(a.surname),
      );

    case SortType.Age:
      if (order === 'asc') {
        return studentList.sort(
          (a, b) => a.age - b.age,
        );
      }

      return studentList.sort(
        (a, b) => b.age - a.age,
      );

    case SortType.Married:
      if (order === 'asc') {
        return studentList.sort(
          (a, b) => {
            if (a.married && b.married) {
              return 0;
            }

            if (a.married) {
              return 1;
            }

            return -1;
          },
        );
      }

      return studentList.sort(
        (a, b) => {
          if (a.married && b.married) {
            return 0;
          }

          if (a.married) {
            return -1;
          }

          return 1;
        },
      );
    case SortType.AverageGrade:
      if (order === 'asc') {
        return studentList.sort(
          (a, b) => a.grades.reduce(
            (sum, value) => sum + value,
          ) / a.grades.length - b.grades.reduce(
            (sum, value) => sum + value,
          ) / b.grades.length,
        );
      }

      return studentList.sort(
        (a, b) => b.grades.reduce(
          (sum, value) => sum + value,
        ) / b.grades.length - a.grades.reduce(
          (sum, value) => sum + value,
        ) / a.grades.length,
      );
    default:
      if (order === 'asc') {
        return studentList.sort(
          (a, b) => a.name.localeCompare(b.name),
        );
      }

      return studentList.sort(
        (a, b) => b.name.localeCompare(a.name),
      );
  }
}
