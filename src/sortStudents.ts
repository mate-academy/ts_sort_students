
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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

function getAverageNum(array: number[]): number {
  return array.reduce((sum: number, num: number) => sum + num, 0)
    / array.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentCopy.sort(
        (student1: Student, student2: Student) => {
          return order === 'asc'
            ? student1[sortBy].localeCompare(student2[sortBy])
            : student2[sortBy].localeCompare(student1[sortBy]);
        },
      );

    case SortType.Age:
    case SortType.Married:
      return studentCopy.sort(
        (student1: Student, student2: Student) => {
          return order === 'asc'
            ? +student1[sortBy] - +student2[sortBy]
            : +student2[sortBy] - +student1[sortBy];
        },
      );

    case SortType.AverageGrade:
      return studentCopy.sort(
        (student1: Student, student2: Student) => {
          return order === 'asc'
            ? getAverageNum(student1[sortBy]) - getAverageNum(student2[sortBy])
            : getAverageNum(student2[sortBy]) - getAverageNum(student1[sortBy]);
        },
      );

    default:
      throw new Error('Wrong sort type');
  }
}
