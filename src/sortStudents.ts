
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

function getAvarageGrade(grades: number[]): number {
  return grades.reduce((a, b) => a + b, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.AverageGrade:
      return order === 'asc'
        ? copyStudents
          .sort((prevStudent, nextStudent) => (
            getAvarageGrade(prevStudent.grades)
            - getAvarageGrade(nextStudent.grades)))
        : copyStudents
          .sort((prevStudent, nextStudent) => (
            getAvarageGrade(nextStudent.grades)
          - getAvarageGrade(prevStudent.grades)));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? copyStudents
          .sort((prevStudent, nextStudent) => Number(prevStudent[sortBy])
          - Number(nextStudent[sortBy]))
        : copyStudents
          .sort((prevStudent, nextStudent) => Number(nextStudent[sortBy])
          - Number(prevStudent[sortBy]));

    default:
      return order === 'asc'
        ? copyStudents
          .sort((prevStudent, nextStudent) => prevStudent[sortBy]
            .localeCompare(nextStudent[sortBy]))
        : copyStudents
          .sort((prevStudent, nextStudent) => nextStudent[sortBy]
            .localeCompare(prevStudent[sortBy]));
  }
}
