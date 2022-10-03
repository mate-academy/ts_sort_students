
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

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  return grades
    .reduce((accumulator: number, current: number): number => (
      accumulator + current)) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      return copyStudents
        .sort((firstStudent: Student, secondStudent: Student) => (
          order === 'asc'
            ? firstStudent.name.localeCompare(secondStudent.name)
            : secondStudent.name.localeCompare(firstStudent.name)
        ));

    case SortType.Surname:
      return copyStudents
        .sort((firstStudent: Student, secondStudent: Student) => (
          order === 'asc'
            ? firstStudent.surname.localeCompare(secondStudent.surname)
            : secondStudent.surname.localeCompare(firstStudent.surname)
        ));

    case SortType.Age:
      return copyStudents
        .sort((firstStudent: Student, secondStudent: Student) => (
          order === 'asc'
            ? firstStudent.age - secondStudent.age
            : secondStudent.age - firstStudent.age
        ));

    case SortType.Married:
      return copyStudents
        .sort((firstStudent: Student, secondStudent: Student) => (
          order === 'asc'
            ? Number(firstStudent.married) - Number(secondStudent.married)
            : Number(secondStudent.married) - Number(firstStudent.married)
        ));

    case SortType.AverageGrade:
      return copyStudents
        .sort((firstStudent: Student, secondStudent: Student) => (
          order === 'asc'
            ? getAverageGrade(firstStudent.grades)
              - getAverageGrade(secondStudent.grades)
            : getAverageGrade(secondStudent.grades)
              - getAverageGrade(firstStudent.grades)
        ));

    default:
      return [];
  }
}
