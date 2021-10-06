// describe Student type
// create and export SortType enum
// create SortOrder type
interface Student {
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

type SortOrder = 'asc' | 'desc';

function getAverageGrade(student: Student): number {
  /* eslint-disable max-len */
  const average: number = student.grades.reduce((total: number, grade: number) => (
    total + grade));

  return average / student.grades.length;
}

export function sortStudents(students: Student[], sortBy: SortType, order: SortOrder): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? studentsCopy.sort((first: Student, second: Student) => (
          first[sortBy].localeCompare(second[sortBy])))
        : studentsCopy.sort((first: Student, second: Student) => (
          second[sortBy].localeCompare(first[sortBy])));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? studentsCopy.sort((first: Student, second: Student) => (
          +first[sortBy] - +second[sortBy]))
        : studentsCopy.sort((first: Student, second: Student) => (
          +second[sortBy] - +first[sortBy]));

    case SortType.AverageGrade:
      return order === 'asc'
        ? studentsCopy.sort((first: Student, second: Student) => (
          getAverageGrade(first) - getAverageGrade(second)))
        : studentsCopy.sort((first: Student, second: Student) => (
          getAverageGrade(second) - getAverageGrade(first)));
    default:
      return studentsCopy;
  }
}
