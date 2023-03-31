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
  const gradesSum: number = grades.reduce(
    (prev: number, grade: number) => prev + grade, 0,
  );

  return gradesSum / grades.length;
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentArray: Student[] = [...students];
  const isAscending: boolean = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (isAscending) {
        studentArray.sort(
          (a: Student, b: Student) => a[sortBy].localeCompare(b[sortBy]),
        );
      } else {
        studentArray.sort(
          (a: Student, b: Student) => b[sortBy].localeCompare(a[sortBy]),
        );
      }
      break;

    case SortType.Age:
      if (isAscending) {
        studentArray.sort((a: Student, b: Student) => a.age - b.age);
      } else {
        studentArray.sort((a: Student, b: Student) => b.age - a.age);
      }
      break;

    case SortType.Married:
      if (isAscending) {
        studentArray.sort((a: Student, b: Student) => +a.married - +b.married);
      } else {
        studentArray.sort((a: Student, b: Student) => +b.married - +a.married);
      }
      break;

    case SortType.AverageGrade:
      if (isAscending) {
        studentArray.sort(
          (a: Student, b: Student) => getAverageGrades(a) - getAverageGrades(b),
        );
      } else {
        studentArray.sort(
          (a: Student, b: Student) => getAverageGrades(b) - getAverageGrades(a),
        );
      }
      break;

    default:
      break;
  }

  return studentArray;
}
