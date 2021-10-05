// import { type } from 'os';

// describe Student type
type Student = {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
};
// create and export SortType enum
export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}
// create SortOrder type
type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const orderMultiplier: number = (order === 'asc') ? 1 : -1;
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((s1: Student, s2: Student) => {
        return s1[sortBy].localeCompare(s2[sortBy]);
      });
      break;

    case SortType.Age:
      studentsCopy.sort((s1: Student, s2: Student) => {
        return orderMultiplier * (s1.age - s2.age);
      });
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((s1: Student, s2: Student) => {
        return (orderMultiplier
          * ((s1.grades.reduce((x, y) => x + y) / s1.grades.length)
        - (s2.grades.reduce((c, d) => c + d) / s2.grades.length)));
      });
      break;

    case SortType.Married:
      studentsCopy.sort((s1: Student, s2: Student) => {
        return orderMultiplier * (+s1[sortBy] - +s2[sortBy]);
      });
      break;

    default:
      break;
  }

  return studentsCopy;
}
