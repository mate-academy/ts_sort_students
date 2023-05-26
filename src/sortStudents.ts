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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

const getAvgGrade = (marks: number[]): number => {
  if (marks.length === 0) {
    return 0;
  }

  return (
    marks.reduce((acc: number, item: number) => acc + item, 0) / marks.length
  );
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyOfArray: Student[] = students.map((item) => ({ ...item }));

  return copyOfArray.sort((studentA, studentB) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(studentA[sortBy]) - Number(studentB[sortBy])
          : Number(studentB[sortBy]) - Number(studentA[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAvgGrade(studentA[sortBy]) - getAvgGrade(studentB[sortBy])
          : getAvgGrade(studentB[sortBy]) - getAvgGrade(studentA[sortBy]);

      default:
        return 0;
    }
  });
}
