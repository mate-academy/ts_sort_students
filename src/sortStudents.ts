export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
):Student[] {
  const sortedStudents: Student[] = [...students];
  const sortOrder = order === 'asc' ? 1 : -1;

  switch (sortBy) {
    case SortType.Name:
      sortedStudents.sort(
        (a: Student, b: Student) => {
          return a.name.localeCompare(b.name) * sortOrder;
        },
      );
    break;

    case SortType.Surname:

      return sortedStudents.sort(
        (a: Student, b: Student) => {
          return a.surname.localeCompare(b.surname) * sortOrder;
        },
      );

    case SortType.Age:

      return sortedStudents.sort(
        (a: Student, b: Student) => {
          return (a.age - b.age) * sortOrder;
        },
      );

    case SortType.Married:

      return sortedStudents.sort(
        (a: Student, b: Student) => {
          return (Number(a.married) - Number(b.married))
          * sortOrder;
        },
      );

    case SortType.AverageGrade:

      return sortedStudents.sort(
        (a: Student, b: Student) => {
          const avrA = a.grades.reduce((sum, grade) => sum + grade)
          / a.grades.length;
          const avrB = b.grades.reduce((sum, grade) => sum + grade)
          / b.grades.length;

          return (avrA - avrB) * sortOrder;
        },
      );

    default:
      throw new Error('Error');
  }
}
