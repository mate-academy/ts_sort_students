export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  readonly grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function gerAverageGrades(student: Student): number {
  return (
    student.grades.reduce((acc, grade) => acc + grade) / student.grades.length
  );
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];
  const sortOrder = order === 'asc' ? 1 : -1;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortedStudents.sort(
        (st1, st2) => sortOrder * st1[sortBy].localeCompare(st2[sortBy]),
      );

    case SortType.Age:
    case SortType.Married:

      return sortedStudents.sort(
        (st1, st2) => sortOrder * (+st1[sortBy] - +st2[sortBy]),
      );

    case SortType.AverageGrade:
      return sortedStudents.sort((st1, st2) => sortOrder
      * (gerAverageGrades(st1) - gerAverageGrades(st2)));

    default:
      return sortedStudents;
  }
}
