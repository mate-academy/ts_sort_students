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

function sortArr(
  arr: Student[],
  order: SortOrder,
  callback: (a: Student, b: Student) => number,
): Student[] {
  return arr.sort((a: Student, b: Student) => {
    if (order === 'asc') {
      return callback(a, b) * 1;
    }

    return -callback(a, b);
  });
}

function averageGrade(student: Student): number {
  return (
    student.grades.reduce((acc: number, item: number) => acc + item, 0)
    / student.grades.length
  );
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
      return sortArr(studentsCopy, order, (a: Student, b: Student) => {
        return a.name.localeCompare(b.name);
      });

    case SortType.Surname:
      return sortArr(studentsCopy, order, (a: Student, b: Student) => {
        return a.surname.localeCompare(b.surname);
      });

    case SortType.Age:
      return sortArr(studentsCopy, order, (a: Student, b: Student) => {
        return Number(a.age) - Number(b.age);
      });

    case SortType.Married:
      return sortArr(studentsCopy, order, (a: Student, b: Student) => {
        return Number(a.married) - Number(b.married);
        // return Number(a[sortBy]) - Number(b[sortBy]);
      });

    case SortType.AverageGrade:
      return sortArr(studentsCopy, order, (a: Student, b: Student) => {
        return averageGrade(a) - averageGrade(b);
      });

    default:
      return studentsCopy;
  }
}
