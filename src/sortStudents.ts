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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

type ReduceCallback = (previos: number, current: number) => number;

const reduceCallback: ReduceCallback = (previos, current) => {
  return previos + current;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  sortedStudents.sort((studentA, studentB) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        if (order === 'desc') {
          return studentB[sortBy].localeCompare(studentA[sortBy]);
        }

        return studentA[sortBy].localeCompare(studentB[sortBy]);
      case SortType.Age:
      case SortType.Married:
        if (order === 'desc') {
          return +studentB[sortBy] - +studentA[sortBy];
        }

        return +studentA[sortBy] - +studentB[sortBy];
      case SortType.AverageGrade:

        if (order === 'desc') {
          return (studentB.grades.reduce(reduceCallback, 0)
                    / studentB.grades.length)
          - (studentA.grades.reduce(reduceCallback, 0)
          / studentA.grades.length);
        }

        return (studentA.grades.reduce(reduceCallback, 0)
                    / studentA.grades.length)
          - (studentB.grades.reduce(reduceCallback, 0)
          / studentB.grades.length);
      default:
        return 0;
    }
  });

  return sortedStudents;
}
