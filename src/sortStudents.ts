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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
) : Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((studentA: Student, studentB: Student) => (
        order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy])
      ));

      break;

    case SortType.Age:
      studentsCopy.sort((studentA: Student, studentB: Student) => (
        order === 'asc'
          ? studentA[sortBy] - studentB[sortBy]
          : studentB[sortBy] - studentA[sortBy]
      ));

      break;

    case SortType.Married:
      studentsCopy.sort((studentA: Student, studentB: Student) => (
        order === 'asc'
          ? Number(studentA[sortBy]) - Number(studentB[sortBy])
          : Number(studentB[sortBy]) - Number(studentA[sortBy])
      ));

      break;

    default:
      studentsCopy.sort((studentA: Student, studentB: Student) => {
        const averageMarkA = getAverageMark(studentA[sortBy]);
        const averageMarkB = getAverageMark(studentB[sortBy]);

        return order === 'asc'
          ? (averageMarkA - averageMarkB)
          : (averageMarkB - averageMarkA);
      });
  }

  return studentsCopy;
}
