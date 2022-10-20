
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
  students: Array<Student>, sortBy: SortType, order: SortOrder,
): Array<Student> {
  const resultStudents = [...students];

  const studentAverage = (grades: Array<number>): number => {
    return (grades.reduce((a: number, b: number) => a + b, 0) / grades.length);
  };

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'desc') {
        return resultStudents
          .sort((studentA, studentB) => studentA[sortBy]
            .localeCompare(studentB[sortBy]));
      }

      return resultStudents
        .sort((studentA, studentB) => studentA[sortBy]
          .localeCompare(studentB[sortBy]));

    case SortType.Age:
    case SortType.Married:
      if (order === 'desc') {
        return resultStudents
          .sort((studentA, studentB) => Number(studentB[sortBy])
            - Number(studentA[sortBy]));
      }

      return resultStudents
        .sort((studentA, studentB) => Number(studentB[sortBy])
          - Number(studentA[sortBy]));

    case SortType.AverageGrade:
      if (order === 'desc') {
        return resultStudents
          .sort((studentA, studentB) => studentAverage(studentB[sortBy])
            - studentAverage(studentA[sortBy]));
      }

      return resultStudents
        .sort((studentA, studentB) => studentAverage(studentA[sortBy])
          - studentAverage(studentB[sortBy]));

    default:
      return students;
  }
}
