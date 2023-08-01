
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: string,
  order: string,
): Student[] {
  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      return sortedStudents.sort(
        (
          student1: Student,
          student2: Student,
        ) => (
          order === 'asc'
            ? student1.name.localeCompare(student2.name)
            : student2.name.localeCompare(student1.name)
        ),
      );

    case SortType.Surname:
      return sortedStudents.sort(
        (
          student1: Student,
          student2: Student,
        ) => (
          order === 'asc'
            ? student1.surname.localeCompare(student2.surname)
            : student2.surname.localeCompare(student1.surname)
        ),
      );

    case SortType.Age:
      return sortedStudents.sort(
        (
          student1: Student,
          student2: Student,
        ) => (
          order === 'asc'
            ? student1.age - student2.age
            : student2.age - student1.age
        ),
      );

    case SortType.Married:
      return sortedStudents.sort(
        (
          student1: Student,
          student2: Student,
        ) => (
          order === 'asc'
            ? (+student1.married - (+student2.married))
            : (+student2.married - (+student1.married))
        ),
      );

    case SortType.AverageGrade:
      return sortedStudents.sort(
        (student1: Student, student2: Student) => {
          const average1 = (student1.grades.reduce(
            (sum: number, element: number) => (
              sum + element
            ), 0,
          )) / student1.grades.length;

          const average2 = (student2.grades.reduce(
            (sum: number, element: number) => (
              sum + element
            ), 0,
          )) / student2.grades.length;

          if (order === 'asc') {
            return average1 - average2;
          }

          return average2 - average1;
        },
      );

    default:
      break;
  }

  return sortedStudents;
}
