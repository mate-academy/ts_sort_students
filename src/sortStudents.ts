
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

const selectors: Record<
SortType, (student: Student) => number | string | boolean> = {
  [SortType.Name]: (student) => student.name,
  [SortType.Surname]: (student) => student.surname,
  [SortType.Age]: (student) => student.age,
  [SortType.Married]: (student) => student.married,
  [SortType.AverageGrade]: (student) => (
    student.grades.reduce(
      (a, b) => a + b,
      0,
    ) / student.grades.length
  ),
};

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const direction = order === 'asc' ? 1 : -1;

  return students
    .map((student) => [student, selectors[sortBy](student)] as const)
    .sort(([, a], [, b]) => {
      if (a < b) {
        return -1 * direction;
      }

      if (a > b) {
        return 1 * direction;
      }

      return 0;
    })
    .map(([student]) => student);
}
