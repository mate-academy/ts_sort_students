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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

const getAverageMarks = (marks: number[]): number => {
  return marks.reduce((sum, grade) => sum + grade, 0) / marks.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];
  const isAscendingOrder: boolean = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copyStudents.sort((a: Student, b: Student) => ((isAscendingOrder)
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy])
      ));

    case SortType.Age:
    case SortType.Married:
      return copyStudents.sort((a: Student, b: Student) => ((isAscendingOrder)
        ? Number(a[sortBy]) - Number(b[sortBy])
        : Number(b[sortBy]) - Number(a[sortBy])
      ));

    case SortType.AverageGrade:
      return copyStudents.sort((a: Student, b: Student) => ((isAscendingOrder)
        ? getAverageMarks(a[sortBy]) - getAverageMarks(b[sortBy])
        : getAverageMarks(b[sortBy]) - getAverageMarks(a[sortBy])
      ));

    default: throw new Error('error');
  }
}
