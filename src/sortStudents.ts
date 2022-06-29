
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  copyStudents.sort((firstStudent: Student, secondStudent: Student) => {
    switch (sortBy) {
      case SortType.Age:
        if (order === 'desc') {
          return secondStudent.age - firstStudent.age;
        }

        return firstStudent.age - secondStudent.age;

      case SortType.Married:
        if (order === 'desc') {
          return +secondStudent.married - +firstStudent.married;
        }

        return +firstStudent.married - +secondStudent.married;

      case SortType.Name:
        if (order === 'desc') {
          return secondStudent.name.localeCompare(firstStudent.name);
        }

        return firstStudent.name.localeCompare(secondStudent.name);

      case SortType.Surname:
        if (order === 'desc') {
          return secondStudent.surname.localeCompare(firstStudent.surname);
        }

        return firstStudent.surname.localeCompare(secondStudent.surname);

      case SortType.AverageGrade:
        if (order === 'desc') {
          return secondStudent.grades.reduce((grade1, grade2) => grade1
            + grade2, 0) / secondStudent.grades.length
            - firstStudent.grades.reduce((grade1, grade2) => grade1
            + grade2, 0) / firstStudent.grades.length;
        }

        return firstStudent.grades.reduce((grade1, grade2) => grade1
          + grade2, 0) / firstStudent.grades.length
          - secondStudent.grades.reduce((grade1, grade2) => grade1
          + grade2, 0) / secondStudent.grades.length;

      default:
        return 0;
    }
  });

  return copyStudents;
}
