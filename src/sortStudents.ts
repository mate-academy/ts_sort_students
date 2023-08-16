
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
    case 'name':
    case 'surname':
      return student[sortBy];
    case 'age':
    case 'married':
      return Number(student[sortBy]);
    case 'averageGrade':
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
  const orderDirection = order === 'asc';

  return studentsCopy.sort((a, b) => {
    const studentValueA = getValue(a, sortBy);
    const studentValueB = getValue(b, sortBy);

    if (typeof studentValueA === 'string'
    && typeof studentValueB === 'string') {
      return orderDirection
        ? studentValueA.localeCompare(studentValueB)
        : studentValueB.localeCompare(studentValueA);
    }

    return orderDirection
      ? ((studentValueA as number) - (studentValueB as number))
      : ((studentValueB as number) - (studentValueA as number));
  });
}
