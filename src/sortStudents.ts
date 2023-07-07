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

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        return sortedStudents.sort(
          (st1, st2) => st1[sortBy].localeCompare(st2[sortBy]),
        );
      }

      return sortedStudents.sort(
        (st1, st2) => st1[sortBy].localeCompare(st2[sortBy]),
      );

    case SortType.Age:
    case SortType.Married:
      if (order === 'asc') {
        return sortedStudents.sort((st1, st2) => +st1[sortBy] - +st2[sortBy]);
      }

      return sortedStudents.sort((st1, st2) => +st2[sortBy] - +st1[sortBy]);

    case SortType.AverageGrade:
      if (order === 'asc') {
        return sortedStudents.sort(
          (st1, st2) => gerAverageGrades(st1) - gerAverageGrades(st2),
        );
      }

      return sortedStudents.sort(
        (st1, st2) => gerAverageGrades(st2) - gerAverageGrades(st1),
      );

    default:
      return sortedStudents;
  }
}
