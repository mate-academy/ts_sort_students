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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

const getAverageGrade = (grades: number[]): number => grades
  .reduce((sum: number, element: number) => sum + element, 0) / grades.length;

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copyStudents
          .sort((studentA: Student, studentB: Student) => studentA[sortBy]
            .localeCompare(studentB[sortBy]))
        : copyStudents
          .sort((studentA: Student, studentB: Student) => studentB[sortBy]
            .localeCompare(studentA[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? copyStudents
          .sort((studentA:Student, studentB:Student) => +studentA[sortBy]
          - +studentB[sortBy])
        : copyStudents
          .sort((studentA:Student, studentB:Student) => +studentB[sortBy]
          - +studentA[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? copyStudents
          .sort((studentA: Student, studentB: Student) => (
            getAverageGrade(studentA[sortBy])
            - getAverageGrade(studentB[sortBy])
          ))
        : copyStudents
          .sort((studentA: Student, studentB: Student) => (
            getAverageGrade(studentB[sortBy])
            - getAverageGrade(studentA[sortBy])
          ));

    default:
      return [];
  }
}
