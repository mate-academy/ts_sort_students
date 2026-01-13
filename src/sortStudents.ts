
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  if (grades.length === 0) {
    return 0;
  }

  const sum = grades.reduce((acc, g) => acc + g, 0);

  return sum / grades.length;
}

function getSortValue(student: Student, sortBy: SortType): string | number {
  switch (sortBy) {
    case SortType.Name:
      return student.name;

    case SortType.Surname:
      return student.surname;

    case SortType.Age:
      return student.age;

    case SortType.Married:
      return Number(student.married);

    case SortType.AverageGrade:
      return getAverageGrade(student.grades);

    default:
      return 0;
  }
}

function compareValues(a: string | number, b: string | number): number {
  if (typeof a === 'string' && typeof b === 'string') {
    return a.localeCompare(b);
  }

  return Number(a) - Number(b);
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const direction = order === 'asc' ? 1 : -1;

  return students
    .map((student, index) => ({
      student,
      index,
    }))
    .sort((a, b) => {
      const v1 = getSortValue(a.student, sortBy);
      const v2 = getSortValue(b.student, sortBy);

      const result = compareValues(v1, v2);

      if (result !== 0) {
        return result * direction;
      }

      // stable sort: remis = oryginalna kolejność niezależnie od asc/desc
      return a.index - b.index;
    })
    .map((item) => item.student);
}
