
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
          (student, student2) => student[sortBy]
            .localeCompare(student2[sortBy]),
        );
        break;
      }

      clonedStudents.sort(
        (student, student2) => student2[sortBy]
          .localeCompare(student[sortBy]),
      );
      break;

    case SortType.Age:
    case SortType.Married:
      if (order === 'asc') {
        clonedStudents.sort(
          (student, student2) => +student[sortBy] - +student2[sortBy],
        );
        break;
      }

      clonedStudents.sort(
        (student, student2) => +student2[sortBy] - +student[sortBy],
      );
      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        clonedStudents.sort((student, student2) => {
          const avg1: number = student.grades
            .reduce((previous, current) => previous + current, 0)
              / student.grades.length;
          const avg2: number = student2.grades
            .reduce((previous, current) => previous + current, 0)
              / student2.grades.length;

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
