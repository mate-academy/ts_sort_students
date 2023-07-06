
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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function checkOrder(num1: number, num2: number, order: SortOrder): number {
  if (order === 'desc') {
    return num2 - num1;
  }

  return num1 - num2;
}

function getAverageGrade(student: Student): number {
  const totalGrade = student.grades.reduce(
    (sum: number, cur: number) => sum + cur, 0,
  );

  return totalGrade / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  // eslint-disable-next-line default-case
  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyStudents.sort(
        (prev: Student, cur: Student) => {
          return prev[sortBy].localeCompare(cur[sortBy]);
        },
      );
      break;
    case SortType.Age:
    case SortType.Married:
      copyStudents.sort(
        (prev: Student, cur: Student) => {
          return checkOrder(+prev[sortBy], +cur[sortBy], order);
        },
      );
      break;
    case SortType.AverageGrade:
      copyStudents.sort(
        (prev: Student, cur: Student) => {
          return checkOrder(getAverageGrade(prev), getAverageGrade(cur), order);
        },
      );
      break;
  }

  return copyStudents;
}
