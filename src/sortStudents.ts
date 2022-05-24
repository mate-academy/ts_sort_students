
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

function count(obj: number[]): number {
  const first = obj.reduce((el1: number, el2: number) => el1 + el2, 0);
  const result = first / obj.length;

  return result;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedStudents: Student[] = [...students];
  let result: Student[] = [];

  switch (true) {
    case order === 'asc':
      switch (true) {
        case sortBy === SortType.Name:
        case sortBy === SortType.Surname:
          result = copiedStudents
            .sort((obj1: Student, obj2: Student) => (
              obj1[sortBy].localeCompare(obj2[sortBy])
            ));
          break;

        case sortBy === SortType.Age:
          result = copiedStudents
            .sort((obj1: Student, obj2: Student) => (
              obj1[sortBy] - obj2[sortBy]
            ));
          break;

        case sortBy === SortType.Married:
          result = copiedStudents
            .sort((obj1: Student, obj2: Student) => (
              +obj1[sortBy] - +obj2[sortBy]
            ));
          break;

        default:
          result = copiedStudents
            .sort((obj1: Student, obj2: Student) => (
              count(obj1[sortBy]) - count(obj2[sortBy])
            ));
      }
      break;

    default:
      switch (true) {
        case sortBy === SortType.Name:
          result = copiedStudents
            .sort((obj1: Student, obj2: Student) => (
              obj2[sortBy].localeCompare(obj1[sortBy])
            ));
          break;

        case sortBy === SortType.Surname:
          result = copiedStudents
            .sort((obj1: Student, obj2: Student) => (
              obj2[sortBy].localeCompare(obj1[sortBy])
            ));
          break;

        case sortBy === SortType.Age:
          result = copiedStudents
            .sort((obj1: Student, obj2: Student) => (
              obj2[sortBy] - obj1[sortBy]
            ));
          break;

        case sortBy === SortType.Married:
          result = copiedStudents
            .sort((obj1: Student, obj2: Student) => (
              +obj2[sortBy] - +obj1[sortBy]
            ));
          break;

        default:
          result = copiedStudents
            .sort((obj1: Student, obj2: Student) => (
              count(obj2[sortBy]) - count(obj1[sortBy])
            ));
      }
  }

  return result;
}
