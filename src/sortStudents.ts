
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
  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      sortedStudents.sort(
        (a: Student, b: Student) => {
          return order === 'asc'
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        },
      );
      break;

    case SortType.Surname:
      sortedStudents.sort(
        (a: Student, b: Student) => {
          return order === 'asc'
            ? a.surname.localeCompare(b.surname)
            : b.surname.localeCompare(a.surname);
        },
      );
      break;

    case SortType.Age:
      sortedStudents.sort(
        (a: Student, b: Student) => {
          return order === 'asc'
            ? a.age - b.age
            : b.age - a.age;
        },
      );
      break;

    case SortType.Married:
      sortedStudents.sort(
        (a: Student, b: Student) => {
          return order === 'asc'
            ? Number(a.married) - Number(b.married)
            : Number(b.married) - Number(a.married);
        },
      );
      break;

    case SortType.AverageGrade:
      sortedStudents.sort(
        (a: Student, b: Student) => {
          const firstStudentGrade: number = a.grades.reduce(
            (x: number, y: number) => x + y,
          ) / a.grades.length;

          const secondStudentGrade: number = b.grades.reduce(
            (x: number, y: number) => x + y,
          ) / b.grades.length;

          return order === 'asc'
            ? firstStudentGrade - secondStudentGrade
            : secondStudentGrade - firstStudentGrade;
        },
      );
      break;

    default:
      throw new Error('Error :3');
  }

  return sortedStudents;
}
