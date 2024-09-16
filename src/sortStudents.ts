
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

function getAverageGrade(student: Student): number {
  return student.grades
    .reduce((sum, grade) => sum + grade, 0) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyStudents.sort((st1, st2) => (order === 'asc'
        ? st1[sortBy].localeCompare(st2[sortBy])
        : st2[sortBy].localeCompare(st1[sortBy])
      ));

      break;

    case SortType.Age:
    case SortType.Married:
      copyStudents.sort((st1, st2) => (order === 'asc'
        ? +st1[sortBy] - +st2[sortBy]
        : +st2[sortBy] - +st1[sortBy]
      ));

      break;

    case SortType.AverageGrade:
      copyStudents.sort((st1, st2) => (order === 'asc'
        ? getAverageGrade(st1) - getAverageGrade(st2)
        : getAverageGrade(st2) - getAverageGrade(st1)
      ));

      break;

    default:
      return copyStudents;
  }

  return copyStudents;
}
