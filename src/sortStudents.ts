
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

function getAverage(number: number[]): number {
  return number.reduce((sum, x) => sum + x, 0) / number.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudent: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        copyStudent
          .sort((student, nextStudent) => student.name
            .localeCompare(nextStudent.name));
      } else {
        copyStudent
          .sort((student, nextStudent) => nextStudent.name
            .localeCompare(student.name));
      }

      break;

    case SortType.Surname:
      if (order === 'asc') {
        copyStudent
          .sort((student, nextStudent) => student.surname
            .localeCompare(nextStudent.surname));
      } else {
        copyStudent
          .sort((student, nextStudent) => nextStudent.surname
            .localeCompare(student.surname));
      }

      break;

    case SortType.Age:
      if (order === 'asc') {
        copyStudent
          .sort((student, nextStudent) => Number(student.age)
            - Number(nextStudent.age));
      } else {
        copyStudent
          .sort((student, nextStudent) => Number(nextStudent.age)
            - Number(student.age));
      }

      break;

    case SortType.Married:
      if (order === 'asc') {
        copyStudent
          .sort((student, nextStudent) => Number(student.married)
            - Number(nextStudent.married));
      } else {
        copyStudent
          .sort((student, nextStudent) => Number(nextStudent.married)
            - Number(student.married));
      }

      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        copyStudent.sort(
          (student, nextStudent) => getAverage(student.grades)
            - getAverage(nextStudent.grades),
        );
      } else {
        copyStudent.sort(
          (student, nextStudent) => getAverage(nextStudent.grades)
            - getAverage(student.grades),
        );
      }

      break;

    default: break;
  }

  return copyStudent;
}
