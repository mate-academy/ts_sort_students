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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): object[] {
  const copyOfStudents: object[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyOfStudents.sort((studentA: Student, stundentB: Student) => (
        studentA[sortBy].localeCompare(stundentB[sortBy])
      ));
      break;

    case SortType.Age:
    case SortType.Married:
      copyOfStudents.sort((studentA: Student, studentB: Student) => {
        return order === 'asc'
          ? studentA[sortBy] - studentB[sortBy]
          : studentB[sortBy] - studentA[sortBy];
      });
      break;

    case SortType.AverageGrade:
      copyOfStudents.sort((studentA: Student, studentB: Student) => {
        const studentAAverage = studentA[sortBy].reduce(
          (previous: number, current: number) => previous + current,
        ) / studentA[sortBy].length;

        const studenBAverage = studentB[sortBy].reduce(
          (previous: number, current: number) => previous + current,
        ) / studentB[sortBy].length;

        return order === 'asc'
          ? studentAAverage - studenBAverage
          : studenBAverage - studentAAverage;
      });
      break;

    default:
      break;
  }

  return copyOfStudents;
}
