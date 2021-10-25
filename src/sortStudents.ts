
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
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

export function getAverageGrade(grades: number[]): number {
  const sumOfGrades = grades.reduce((sum, grade) => sum + grade, 0);

  return sumOfGrades / grades.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const studentsSorted: Student[] = [...students];
  const isAscending: boolean = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
      studentsSorted.sort((studentFirst, studentSecond) => (isAscending
        ? studentFirst.name.localeCompare(studentSecond.name)
        : studentSecond.name.localeCompare(studentFirst.name)));
      break;

    case SortType.Surname:
      studentsSorted.sort((studentFirst, studentSecond) => (isAscending
        ? studentFirst.surname.localeCompare(studentSecond.surname)
        : studentSecond.surname.localeCompare(studentSecond.surname)));
      break;

    case SortType.Age:
      studentsSorted.sort((studentFirst, studentSecond) => (isAscending
        ? studentFirst.age - studentSecond.age
        : studentSecond.age - studentFirst.age));
      break;

    case SortType.Married:
      studentsSorted.sort((studentFirst, studentSecond) => (isAscending
        ? Number(studentFirst.married) - Number(studentSecond.married)
        : Number(studentSecond.married) - Number(studentFirst.married)));
      break;

    case SortType.AverageGrade:
      studentsSorted.sort((studentFirst, studentSecond) => (isAscending
        ? getAverageGrade(studentFirst.grades)
        - getAverageGrade(studentSecond.grades)
        : getAverageGrade(studentSecond.grades)
        - getAverageGrade(studentFirst.grades)));
      break;

    default:
      throw new Error('Wrong SortType');
  }

  return studentsSorted;
}
