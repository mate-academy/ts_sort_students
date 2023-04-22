function compareString(str1: string, str2: string): number {
  if (str1 > str2) {
    return 1;
  }

  if (str1 < str2) {
    return -1;
  }

  return 0;
}

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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy = students.map((item) => {
    const temp = { ...item };

    return temp;
  });

  copy.sort((a: Student, b: Student): number => {
    let x = { ...a };
    let y = { ...b };

    if (order === 'desc') {
      const temp = { ...a };

      x = { ...b };
      y = { ...temp };
    }

    switch (sortBy) {
      case SortType.Name:
        return compareString(x.name, y.name);
      case SortType.Surname:
        return compareString(x.surname, y.surname);
      case SortType.Age:
        return x.age - y.age;
      case SortType.AverageGrade:
        return x.grades.reduce((acc, item) => acc + item, 0) / x.grades.length
            - y.grades.reduce((acc, item) => acc + item, 0) / y.grades.length;
      case SortType.Married:
        return +(+x.married - +y.married);
      default:
        return 0;
    }
  });

  return copy;
}
