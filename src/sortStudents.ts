function getAverage([...args]: number[]): number {
  return args.reduce((sum, current) => sum + current, 0) / args.length;
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
  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? sortedStudents
          .sort((StudentA, StudentB) => StudentA[sortBy]
            .localeCompare(StudentB[sortBy]))
        : sortedStudents
          .sort((StudentA, StudentB) => StudentB[sortBy]
            .localeCompare(StudentA[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? sortedStudents
          .sort((StudentA, StudentB) => +StudentA[sortBy] - +StudentB[sortBy])
        : sortedStudents
          .sort((StudentA, StudentB) => +StudentB[sortBy] - +StudentA[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? sortedStudents
          .sort((StudentA, StudentB) => getAverage(StudentA[sortBy])
          - getAverage(StudentB[sortBy]))
        : sortedStudents
          .sort((StudentA, StudentB) => getAverage(StudentB[sortBy])
          - getAverage(StudentA[sortBy]));

    default:
      throw new Error('We can`t sort like that yet. Sorry');
  }
}
