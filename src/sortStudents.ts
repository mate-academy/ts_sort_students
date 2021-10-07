/* eslint-disable implicit-arrow-linebreak */

interface Student {
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

type SortOrder = 'asc' | 'desc';

const getAvgGrade = (student: Student): number => {
  const total = student.grades.reduce(
    (sum: number, grade: number) => sum + grade, 0,
  );

  return total / student.grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc' || '') {
        return copy.sort((a: Student, b: Student) =>
          a[sortBy].localeCompare(b[sortBy]));
      }

      if (order === 'desc') {
        return copy.sort((a: Student, b: Student) =>
          b[sortBy].localeCompare(a[sortBy]));
      }
      break;

    case SortType.Age:
      if (order === 'asc' || '') {
        return copy.sort((a: Student, b: Student) => a[sortBy] - b[sortBy]);
      }

      if (order === 'desc') {
        return copy.sort((a: Student, b: Student) => b[sortBy] - a[sortBy]);
      }
      break;

    case SortType.Married:
      if (order === 'asc' || '') {
        return copy.sort((a: Student, b: Student) =>
          +a[sortBy] - (+b[sortBy]));
      }

      if (order === 'desc') {
        return copy.sort((a: Student, b: Student) =>
          +b[sortBy] - (+a[sortBy]));
      }
      break;

    case SortType.AverageGrade:
      if (order === 'asc' || '') {
        return copy.sort(
          (a: Student, b: Student) => getAvgGrade(a) - getAvgGrade(b),
        );
      }

      if (order === 'desc') {
        return copy.sort((a: Student, b: Student) =>
          getAvgGrade(b) - getAvgGrade(a));
      }
      break;

    default:
      break;
  }

  return copy;
}

/* eslint-disable implicit-arrow-linebreak */
