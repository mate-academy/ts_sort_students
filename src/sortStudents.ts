
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

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  function averGrade(arr: number[]): number {
    const grade = arr.reduce((sum: number, a: number):
    number => sum + a, 0) / arr.length;

    return grade;
  }

  const newStudents = [...students];

  switch (sortBy) {
    case SortType.Name: {
      if (order === 'asc') {
        newStudents.sort((a: Student, b: Student):
        number => a.name.localeCompare(b.name));
      } else {
        newStudents.sort((a: Student, b: Student):
        number => b.name.localeCompare(a.name));
      }

      break;
    }

    case SortType.Surname: {
      if (order === 'asc') {
        newStudents.sort((a: Student, b: Student):
        number => a.surname.localeCompare(b.surname));
      } else {
        newStudents.sort((a: Student, b: Student):
        number => b.surname.localeCompare(a.surname));
      }

      break;
    }

    case SortType.Age: {
      if (order === 'asc') {
        newStudents.sort((a: Student, b: Student):
        number => a.age - b.age);
      } else {
        newStudents.sort((a: Student, b: Student):
        number => b.age - a.age);
      }

      break;
    }

    case SortType.Married: {
      newStudents.sort((a: Student, b: Student): number => {
        if (a.married && !b.married) {
          if (order === 'asc') {
            return 1;
          }

          return -1;
        }

        if (!a.married && b.married) {
          if (order === 'asc') {
            return -1;
          }

          return 1;
        }

        return 0;
      });

      break;
    }

    case SortType.AverageGrade: {
      if (order === 'asc') {
        newStudents.sort((a: Student, b: Student):
        number => averGrade(a.grades) - averGrade(b.grades));
      } else {
        newStudents.sort((a: Student, b: Student):
        number => averGrade(b.grades) - averGrade(a.grades));
      }

      break;
    }

    default:
      throw new Error('No correct data');
  }

  return newStudents;
}
