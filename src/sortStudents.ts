
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
  AverageGrade = 'averageGrade',
  // (grades.reduce((a,b) => a + b, 0) / grades.length)
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): object {
  const studentsCopy = JSON.parse(JSON.stringify(students));

  if (sortBy === 'averageGrade') {
    return studentsCopy.sort((el1: Student, el2: Student) => {
      const st1 = (el1.grades.reduce((a, b) => a + b, 0)) / el1.grades.length;
      const st2 = (el2.grades.reduce((a, b) => a + b, 0)) / el2.grades.length;

      if (order === 'desc') {
        return st2 - st1;
      }

      return st1 - st2;
    });
  }

  if (sortBy === 'name' || sortBy === 'surname') {
    return studentsCopy.sort((el1, el2) => {
      if (el1[sortBy] < el2[sortBy]) {
        return -1;
      }

      if (el1[sortBy] > el2[sortBy]) {
        return 1;
      }

      return 0;
    });
  }

  if (order === 'desc') {
    return studentsCopy.sort((el1, el2) => el2[sortBy] - el1[sortBy]);
  }

  return studentsCopy.sort((el1, el2) => el1[sortBy] - el2[sortBy]);
}
