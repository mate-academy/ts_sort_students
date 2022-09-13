
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

  if (sortBy === SortType.Name) {
    resArr.sort((a: Student, b: Student): number => {
      if (sortOrder) {
        return a.name.localeCompare(b.name);
      }

      return b.name.localeCompare(a.name);
    });
  } else if (sortBy === SortType.Surname) {
    resArr.sort((a: Student, b: Student): number => {
      if (sortOrder) {
        return a.surname.localeCompare(b.surname);
      }

      return b.surname.localeCompare(a.surname);
    });
  } else if (sortBy === SortType.Age) {
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
  } else if (sortBy === SortType.Married) {
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
  } else if (sortBy === SortType.AverageGrade) {
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
  }

  return resArr;
}
