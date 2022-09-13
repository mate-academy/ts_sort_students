
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const resArr: Student[] = [...students];
  const sortOrder: boolean = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
      resArr.sort((a: Student, b: Student): number => {
        if (sortOrder) {
          return a.name.localeCompare(b.name);
        }

        return b.name.localeCompare(a.name);
      });
      break;
    case SortType.Surname:
      resArr.sort((a: Student, b: Student): number => {
        if (sortOrder) {
          return a.surname.localeCompare(b.surname);
        }

        return b.surname.localeCompare(a.surname);
      });
      break;
    case SortType.Age:
      resArr.sort((a: Student, b: Student): number => {
        let res = 0;

        if (Number(a.age) > Number(b.age)) {
          if (sortOrder) {
            res = 1;
          } else {
            res = -1;
          }
        }

        if (Number(a.age) < Number(b.age)) {
          if (!sortOrder) {
            res = 1;
          } else {
            res = -1;
          }
        }

        return res;
      });
      break;
    case SortType.Married:
      resArr.sort((a: Student, b: Student): number => {
        let res = 0;

        if (a.married && !b.married) {
          if (sortOrder) {
            res = 1;
          } else {
            res = -1;
          }
        }

        if (!a.married && b.married) {
          if (!sortOrder) {
            res = 1;
          } else {
            res = -1;
          }
        }

        return res;
      });
      break;
    case SortType.AverageGrade:
      resArr.sort((a: Student, b: Student): number => {
        const averageStudentGrade = (student: Student):number => {
          return student
            .grades.reduce((accum: number, grade: number): number => {
              return accum + grade;
            }, 0) / student.grades.length;
        };

        let res = 0;

        if (averageStudentGrade(a) > averageStudentGrade(b)) {
          if (sortOrder) {
            res = 1;
          } else {
            res = -1;
          }
        }

        if (averageStudentGrade(a) < averageStudentGrade(b)) {
          if (!sortOrder) {
            res = 1;
          } else {
            res = -1;
          }
        }

        return res;
      });
      break;
    default:
      return resArr;
  }

  return resArr;
}
