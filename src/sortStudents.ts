
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

function countAvGrades(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function sortStudents(
  [...students]: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? students.sort((st1, st2) => st1[sortBy].localeCompare(st2[sortBy]))
        : students.sort((st1, st2) => st2[sortBy].localeCompare(st1[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? students.sort((st1, st2) => +st1[sortBy] - +st2[sortBy])
        : students.sort((st1, st2) => +st2[sortBy] - +st1[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? students.sort(
          (st1, st2) => countAvGrades(st1[sortBy]) - countAvGrades(st2[sortBy]),
        )
        : students.sort(
          (st1, st2) => countAvGrades(st2[sortBy]) - countAvGrades(st1[sortBy]),
        );
    default:
      break;
  }

  return students;
}
