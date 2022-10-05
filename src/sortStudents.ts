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

function getAverageMark(marks: number[]): number {
  return marks
    .reduce((acc: number, mark: number) => acc + mark, 0)
    / marks.length;
}

function sortNums(order: SortOrder, numA: number, numB: number): number {
  return order === 'asc'
    ? numA - numB
    : numB - numA;
}

function sortStrings(order: SortOrder, strA: string, strB: string): number {
  return order === 'asc'
    ? strA.localeCompare(strB)
    : strB.localeCompare(strA);
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
) : Student[] {
  const studentsCopy = [...students];

  studentsCopy.sort((studentA: Student, studentB: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return sortStrings(order, studentA[sortBy], studentB[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return sortNums(
          order,
          Number(studentA[sortBy]),
          Number(studentB[sortBy]),
        );

      default: {
        const averageMarkA = getAverageMark(studentA[sortBy]);
        const averageMarkB = getAverageMark(studentB[sortBy]);

        return sortNums(order, averageMarkA, averageMarkB);
      }
    }
  });

  return studentsCopy;
}
