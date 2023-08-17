
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: [],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade'
}

export type SortOrder = 'asc' | 'desc';

function avgGrade(student: Student): number {
  return student.grades.reduce(
    (prev, item) => prev + item, 0,
  ) / student.grades.length;
}

function getValue(student: Student, sortBy: SortType): string | number {
  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return student[sortBy];
    case SortType.Age:
    case SortType.Married:
      return Number(student[sortBy]);
    case SortType.AverageGrade:
      return avgGrade(student);
    default:
      throw new Error('Provide sort type.');
  }
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];
  const ascending = order === 'asc';

  return studentsCopy.sort((a, b) => {
    const studentValueA = getValue(a, sortBy);
    const studentValueB = getValue(b, sortBy);

    if (typeof studentValueA === 'string'
    && typeof studentValueB === 'string') {
      return ascending
        ? studentValueA.localeCompare(studentValueB)
        : studentValueB.localeCompare(studentValueA);
    }

    return ascending
      ? (Number(studentValueA) - Number(studentValueB))
      : (Number(studentValueB) - Number(studentValueA));
  });
}
