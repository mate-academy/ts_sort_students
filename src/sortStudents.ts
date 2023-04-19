
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
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

  switch (sortBy) {
    case SortType.Name:
      studentsCopy.sort((a, b) => compare(a, b, 'name'));
      break;
    case SortType.Surname:
      studentsCopy.sort((a, b) => compare(a, b, 'surname'));
      break;
    case SortType.Age:
      studentsCopy.sort((a, b) => compare(a, b, 'age'));
      break;
    case SortType.Married:
      studentsCopy.sort((a, b) => compare(a, b, 'married'));
      break;
    case SortType.AverageGrade:
      studentsCopy.sort((a, b) => {
        const first = a.grades.reduce((c, d) => c + d) / a.grades.length;
        const second = b.grades.reduce((c, d) => c + d) / b.grades.length;

        return isAsc ? first - second : second - first;
      });
      break;
    default:
      throw new Error('Wrong sort inner value');
  }

  return studentsCopy;
}
