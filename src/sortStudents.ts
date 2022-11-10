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

function calcAverage(arr: number[]): number {
  return arr.reduce((a: number, b: number) => a + b, 0) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsCopy.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);
      });

    case SortType.Age:
      return studentsCopy.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? student1[sortBy] - student2[sortBy]
          : student2[sortBy] - student1[sortBy];
      });

    case SortType.Married:
      return studentsCopy.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? Number(student1[sortBy]) - Number(student2[sortBy])
          : Number(student2[sortBy]) - Number(student1[sortBy]);
      });

    case SortType.AverageGrade:
      return studentsCopy.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? calcAverage(student1[sortBy]) - calcAverage(student2[sortBy])
          : calcAverage(student2[sortBy]) - calcAverage(student1[sortBy]);
      });

    default:
      throw new Error('Entered type is not available');
  }
}
