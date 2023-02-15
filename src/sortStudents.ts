
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
  AverageGrade = 'averageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student,
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = JSON.parse(JSON.stringify(students));

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? copyStudents
          .sort((a: Student, b: Student) => a.name.localeCompare(b.name))
        : copyStudents
          .sort((a: Student, b: Student) => b.name.localeCompare(a.name));

    case SortType.Age:
      return order === 'asc'
        ? copyStudents
          .sort((a: Student, b: Student) => a[sortBy] - b[sortBy])
        : copyStudents
          .sort((a: Student, b: Student) => b[sortBy] - a[sortBy]);

    case SortType.Surname:
      return order === 'asc'
        ? copyStudents
          .sort((a: Student, b: Student) => a.surname.localeCompare(b.surname))
        : copyStudents
          .sort((a: Student, b: Student) => b.surname.localeCompare(a.surname));

    case SortType.Married:
      return order === 'asc'
        ? copyStudents
          .sort((a: Student, b: Student) => +a[sortBy] - +b[sortBy])
        : copyStudents
          .sort((a: Student, b: Student) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      return copyStudents.sort((a: Student, b: Student) => {
        const aUser = a.grades.reduce((acc: number, num: number) => {
          return acc + num;
        }, 0) / a.grades.length;
        const bUser = b.grades.reduce((acc: number, num: number) => {
          return acc + num;
        }, 0) / b.grades.length;

        return order === 'asc'
          ? aUser - bUser
          : bUser - aUser;
      });

    default:
      return copyStudents;
  }
}
