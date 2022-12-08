
export interface Student {
  name: string
  surname: string
  age: number
  married: boolean
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'average grade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        return students
          .map((student: Student) => student)
          .sort((a: Student, b: Student) => a.name.localeCompare(b.name));
      }

      return students
        .map((student: Student) => student)
        .sort((a: Student, b: Student) => b.name.localeCompare(a.name));
    case SortType.Surname:
      if (order === 'asc') {
        return students
          .map((student: Student) => student)
          .sort((a: Student, b: Student) => a.surname.localeCompare(b.surname));
      }

      return students
        .map((student: Student) => student)
        .sort((a: Student, b: Student) => b.surname.localeCompare(a.surname));
    case SortType.Age:
      if (order === 'asc') {
        return students
          .map((student: Student) => student)
          .sort((a: Student, b: Student) => a.age - b.age);
      }

      return students
        .map((student: Student) => student)
        .sort((a: Student, b: Student) => b.age - a.age);
    case SortType.Married:
      if (order === 'asc') {
        return students
          .map((student: Student) => student)
          .sort((a: Student, b: Student) => {
            return Number(a.married) - Number(b.married);
          });
      }

      return students
        .map((student: Student) => student)
        .sort((a: Student, b: Student) => {
          return Number(b.married) - Number(a.married);
        });
    case SortType.AverageGrade:
      if (order === 'asc') {
        return students
          .map((student: Student) => student)
          .sort(
            (a: Student, b: Student) => {
              const averageGradeA: number = a.grades
                .reduce((accum: number, curr: number) => {
                  return accum + curr;
                }, 0) / a.grades.length;

              const averageGradeB = b.grades
                .reduce((accum: number, curr: number) => {
                  return accum + curr;
                }, 0) / b.grades.length;

              return averageGradeA - averageGradeB;
            },
          );
      }

      return students
        .map((student: Student) => student)
        .sort(
          (a: Student, b: Student) => {
            const averageGradeA = a.grades
              .reduce((accum: number, curr: number) => {
                return accum + curr;
              }, 0) / a.grades.length;

            const averageGradeB = b.grades
              .reduce((accum: number, curr: number) => {
                return accum + curr;
              }, 0) / b.grades.length;

            return averageGradeB - averageGradeA;
          },
        );
    default:
      return students;
  }
}
