
function getAvarageGrade(gradeArr: number[]): number {
  return gradeArr.reduce((prev, item) => {
    return prev + item;
  }, 0) / gradeArr.length;
}

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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.AverageGrade:
      return order === 'asc'
        ? studentsCopy
          .sort((prevStudent, nextStudent) => (
            getAvarageGrade(prevStudent.grades)
            - getAvarageGrade(nextStudent.grades)))
        : studentsCopy
          .sort((prevStudent, nextStudent) => (
            getAvarageGrade(nextStudent.grades)
            - getAvarageGrade(prevStudent.grades)));

    case SortType.Age:
      return order === 'asc'
        ? studentsCopy
          .sort((prevStudent, nextStudent) => (
            prevStudent.age - nextStudent.age))
        : studentsCopy
          .sort((prevStudent, nextStudent) => (
            nextStudent.age - prevStudent.age));

    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? studentsCopy
          .sort((prevStudent, nextStudent) => (
            prevStudent[sortBy].localeCompare(nextStudent[sortBy])))
        : studentsCopy
          .sort((prevStudent, nextStudent) => (
            nextStudent[sortBy].localeCompare(prevStudent[sortBy])));
    default:
      return order === 'asc'
        ? studentsCopy
          .sort((prevStudent, nextStudent) => (
            Number(prevStudent.married) - Number(nextStudent.married)))
        : studentsCopy
          .sort((prevStudent, nextStudent) => (
            Number(nextStudent.married) - Number(prevStudent.married)));
  }
}
