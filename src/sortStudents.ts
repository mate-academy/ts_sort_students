
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
  AverageGrade = 'averageGrade'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    let compareResult = 0;

    if (sortBy === SortType.AverageGrade) {
      const averageGradeA = a.grades.reduce(
        (acc, grade) => acc + grade, 0,
      ) / a.grades.length;
      const averageGradeB = b.grades.reduce(
        (acc, grade) => acc + grade, 0,
      ) / b.grades.length;

      compareResult = averageGradeA - averageGradeB;
    } else {
      compareResult = a[sortBy] > b[sortBy] ? 1 : -1;
    }

    return order === 'asc' ? compareResult : -compareResult;
  });

  return sortedStudents;
}
