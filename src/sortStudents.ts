
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

function getAverageGrades({ grades }: Student): number {
  const gradesSum = grades.reduce((prev, grade) => prev + grade, 0);

  return gradesSum / grades.length;
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentArray = [...students];
  const isAscending: boolean = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (isAscending) {
        studentArray.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
      } else {
        studentArray.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
      }
      break;

    case SortType.Age:
      if (isAscending) {
        studentArray.sort((a, b) => a.age - b.age);
      } else {
        studentArray.sort((a, b) => b.age - a.age);
      }
      break;

    case SortType.Married:
      if (isAscending) {
        studentArray.sort((a, b) => +a.married - +b.married);
      } else {
        studentArray.sort((a, b) => +b.married - +a.married);
      }
      break;

    case SortType.AverageGrade:
      if (isAscending) {
        studentArray.sort((a, b) => getAverageGrades(a) - getAverageGrades(b));
      } else {
        studentArray.sort((a, b) => getAverageGrades(b) - getAverageGrades(a));
      }
      break;

    default: break;
  }

  return studentArray;
}
