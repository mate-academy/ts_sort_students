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

export type StudentProperties = number | string | boolean;

export type SortOrder = 'asc' | 'desc';

function sortByProperty(
  propertyA: StudentProperties,
  propertyB: StudentProperties,
  order: SortOrder,
): number {
  switch (order) {
    case 'asc':
      if (propertyA > propertyB) {
        return 1;
      }

      if (propertyA < propertyB) {
        return -1;
      }

      return 0;

    case 'desc':
      if (propertyA > propertyB) {
        return -1;
      }

      if (propertyA < propertyB) {
        return 1;
      }

      return 0;

    default:
      return 0;
  }
}

function getAverageGrade(grades: number[]): number {
  return grades.reduce((accum: number, curr: number) => {
    return accum + curr;
  }, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  if (sortBy === SortType.AverageGrade) {
    return students
      .map((student: Student) => student)
      .sort(
        (a: Student, b: Student) => {
          return sortByProperty(
            getAverageGrade(a.grades),
            getAverageGrade(b.grades),
            order,
          );
        },
      );
  }

  return students
    .map((student: Student) => student)
    .sort((a: Student, b: Student) => {
      return sortByProperty(a[sortBy], b[sortBy], order);
    });
}
