
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

function getAverageGrade(grades:number[]):number {
  return grades.reduce((sum, curr) => sum + curr, 0)
    / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
):Student[] {
  const studentsCopy: Student[] = [...students];
  const sortOrder: 1 | -1 = order === 'asc' ? 1 : -1;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        studentsCopy.sort(
          (st1: Student, st2: Student) => st1[sortBy]
            .localeCompare(st2[sortBy]),
        );
      } else {
        studentsCopy.sort(
          (st1: Student, st2: Student) => st2[sortBy]
            .localeCompare(st1[sortBy]),
        );
      }

      break;

    case SortType.Age:
    case SortType.Married:
      studentsCopy.sort(
        (st1: Student, st2: Student) => (Number(st1[sortBy])
          - Number(st2[sortBy])) * sortOrder,
      );

      break;

    case SortType.AverageGrade:
      studentsCopy.sort(
        (st1: Student, st2: Student) => (getAverageGrade(st1.grades)
          - getAverageGrade(st2.grades)) * sortOrder,
      );

      break;

    default:
      break;
  }

  return studentsCopy;
}
