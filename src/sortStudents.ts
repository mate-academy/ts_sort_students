
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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

type StudentKey = keyof Student;

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
):Student[] {
  const studentsCopy = [...students];
  const isAsc = order === 'asc';

  const compare = (a:Student, b:Student, key: StudentKey):number => {
    if (typeof a[key] === 'boolean') {
      return isAsc
        ? Number(a[key]) - Number(b[key])
        : Number(b[key]) - Number(a[key]);
    }

    if (typeof a[key] === 'number') {
      return isAsc
        ? (a[key] as number) - (b[key] as number)
        : (b[key] as number) - (a[key] as number);
    }

    return isAsc
      ? (a[key] as string).localeCompare(b[key] as string)
      : (b[key] as string).localeCompare(a[key] as string);
  };

  if (sortBy === 'averageGrade') {
    studentsCopy.sort((a, b) => {
      const first = a.grades.reduce((c, d) => c + d) / a.grades.length;
      const second = b.grades.reduce((c, d) => c + d) / b.grades.length;

      return isAsc ? first - second : second - first;
    });
  } else {
    studentsCopy.sort((a, b) => compare(a, b, sortBy));
  }

  return studentsCopy;
}
