
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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: string,
  order: string,
): object[] {
  type CheckedStudent = Student & {
    averageGrade: number;
  };

  const copy: CheckedStudent[] = [...students].map((student) => ({
    ...student,

    averageGrade: student.grades.reduce(
      (prev, grade) => prev + grade, 0,
    ) / student.grades.length,
  }));

  const correction = order === 'asc' ? 1 : -1;

  switch (sortBy) {
    case SortType.Name:
      copy.sort((a, b) => (order === 'asc'
        ? (a.name).localeCompare(b.name)
        : (b.name).localeCompare(a.name)));
      break;

    case SortType.Surname:
      copy.sort((a, b) => (order === 'asc'
        ? (a.surname).localeCompare(b.surname)
        : (b.surname).localeCompare(a.surname)));
      break;

    case SortType.Age:
      copy.sort((a, b) => a.age * correction - b.age * correction);
      break;

    case SortType.Married:
      copy.sort((a, b) => (
        Number(a.married) * correction - Number(b.married) * correction
      ));
      break;

    case SortType.AverageGrade:
      copy.sort((a, b) => (
        a.averageGrade * correction - b.averageGrade * correction
      ));
      break;

    default:
      throw new Error('this is an invalid sort method');
  }

  return copy;
}
