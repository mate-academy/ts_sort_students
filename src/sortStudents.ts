
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
          switch (order) {
            case 'asc':
              return a.name.localeCompare(b.name);

            case 'desc':
              return b.name.localeCompare(a.name);

            default:
              return 0;
          }
        });

    case SortType.Surname:
      return students
        .map((student: Student) => student)
        .sort((a: Student, b: Student) => {
          switch (order) {
            case 'asc':
              return a.surname.localeCompare(b.surname);

            case 'desc':
              return b.surname.localeCompare(a.surname);

            default:
              return 0;
          }
        });

    case SortType.Age:
      return students
        .map((student: Student) => student)
        .sort((a: Student, b: Student) => {
          switch (order) {
            case 'asc':
              return a.age - b.age;

            case 'desc':
              return b.age - a.age;

            default:
              return 0;
          }
        });

    case SortType.Married:
      return students
        .map((student: Student) => student)
        .sort((a: Student, b: Student) => {
          switch (order) {
            case 'asc':
              return Number(a.married) - Number(b.married);

            case 'desc':
              return Number(b.married) - Number(a.married);

            default:
              return 0;
          }
        });

    case SortType.AverageGrade:
      return students
        .map((student: Student) => student)
        .sort(
          (a: Student, b: Student) => {
            switch (order) {
              case 'asc':
                return getAverageGrade(a.grades) - getAverageGrade(b.grades);

              case 'desc':
                return getAverageGrade(b.grades) - getAverageGrade(a.grades);

              default:
                return 0;
            }
          },
        );

    default:
      return students;
  }
}
