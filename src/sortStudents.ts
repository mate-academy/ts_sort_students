
function getAverageGrade(grades: number[]): number {
  return grades.reduce((accum: number, curr: number) => {
    return accum + curr;
  }, 0) / grades.length;
}
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
      return students
        .map((student: Student) => student)
        .sort((a: Student, b: Student) => {
          return order === 'asc'
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        });

    case SortType.Surname:
      return students
        .map((student: Student) => student)
        .sort((a: Student, b: Student) => {
          return order === 'asc'
            ? a.surname.localeCompare(b.surname)
            : b.surname.localeCompare(a.surname);
        });

    case SortType.Age:
      return students
        .map((student: Student) => student)
        .sort((a: Student, b: Student) => {
          return order === 'asc'
            ? a.age - b.age
            : b.age - a.age;
        });

    case SortType.Married:
      return students
        .map((student: Student) => student)
        .sort((a: Student, b: Student) => {
          return order === 'asc'
            ? Number(a.married) - Number(b.married)
            : Number(b.married) - Number(a.married);
        });

    case SortType.AverageGrade:
      return students
        .map((student: Student) => student)
        .sort(
          (a: Student, b: Student) => {
            return order === 'asc'
              ? getAverageGrade(a.grades) - getAverageGrade(b.grades)
              : getAverageGrade(b.grades) - getAverageGrade(a.grades);
          },
        );

    default:
      return students;
  }
}
