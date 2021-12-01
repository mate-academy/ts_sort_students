
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): object {
  const sortedStudents: object = [...students];

  function avarageNum(numArray: number[]): number {
    return numArray.reduce((sum, num) => sum + num, 0) / numArray.length;
  }

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        sortedStudents.sort((studentA: Student, studentB: Student) => {
          return studentA.name.localeCompare(studentB.name);
        });
      } else {
        sortedStudents.sort((studentA: Student, studentB: Student) => {
          return studentB.name.localeCompare(studentA.name);
        });
      }
      break;
    case SortType.Surname:
      if (order === 'asc') {
        sortedStudents.sort((studentA: Student, studentB: Student) => {
          return studentA.surname.localeCompare(studentB.surname);
        });
      } else {
        sortedStudents.sort((studentA: Student, studentB: Student) => {
          return studentB.surname.localeCompare(studentA.surname);
        });
      }
      break;
    case SortType.Age:
      if (order === 'asc') {
        sortedStudents.sort(
          (studentA: Student, studentB: Student) => studentA.age - studentB.age,
        );
      } else {
        sortedStudents.sort(
          (studentA: Student, studentB: Student) => studentB.age - studentA.age,
        );
      }
      break;
    case SortType.Married:
      if (order === 'asc') {
        sortedStudents.sort(
          (studentA: Student, studentB: Student) => {
            return (+studentA.married) - (+studentB.married);
          },
        );
      } else {
        sortedStudents.sort(
          (studentA: Student, studentB: Student) => {
            return (+studentB.married) - (+studentA.married);
          },
        );
      }
      break;
    case SortType.AverageGrade:
      if (order === 'asc') {
        sortedStudents.sort((studentA: Student, studentB: Student) => {
          return avarageNum(studentA.grades) - avarageNum(studentB.grades);
        });
      } else {
        sortedStudents.sort((studentA: Student, studentB: Student) => {
          return avarageNum(studentB.grades) - avarageNum(studentA.grades);
        });
      }
      break;
    default: return sortStudents;
  }

  return sortedStudents;
}
