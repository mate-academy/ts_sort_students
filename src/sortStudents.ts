
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'avg',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  const clonedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        clonedStudents.sort(
          (student, studen2) => student[sortBy].localeCompare(studen2[sortBy]),
        );
        /* Please excuse the variable name studen2, had issues with
        max length and typescript seems to not like line breaks in
        arrow functions (the linter kept yelling at me) */
        break;
      }

      clonedStudents.sort(
        (student, studen2) => studen2[sortBy].localeCompare(student[sortBy]),
      );
      break;

    case SortType.Age:
      if (order === 'asc') {
        clonedStudents.sort((student, student2) => student.age - student2.age);
        break;
      }

      clonedStudents.sort((student, student2) => student2.age - student.age);
      break;

    case SortType.Married:
      if (order === 'asc') {
        clonedStudents.sort(
          (a, b) => String(a.married).localeCompare(String(b.married)),
        );
        // Here the line is already too long to change variable names
        break;
      }

      clonedStudents.sort(
        (a, b) => String(b.married).localeCompare(String(a.married)),
      );
      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        clonedStudents.sort((stdnt, stdnt2) => {
          let avg1: number = stdnt.grades.reduce((prv, cur) => prv + cur, 0);
          let avg2: number = stdnt2.grades.reduce((prv, cur) => prv + cur, 0);

          avg1 /= stdnt.grades.length;
          avg2 /= stdnt2.grades.length;

          return avg1 - avg2;
        });
        break;
      }

      clonedStudents.sort((stdnt, stdnt2) => {
        let avg1: number = stdnt.grades.reduce((prv, cur) => prv + cur, 0);
        let avg2: number = stdnt2.grades.reduce((prv, cur) => prv + cur, 0);

        avg1 /= stdnt.grades.length;
        avg2 /= stdnt2.grades.length;

        return avg2 - avg1;
      });
      break;

    default:
      throw new Error('Invalid Sorting Parameter.');
  }

  return clonedStudents;
}
