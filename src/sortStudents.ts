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

  if (sortBy === SortType.Name || sortBy === SortType.Surname) {
    copyOfArray.sort((studentA, studentB) => {
      return order === 'asc'
        ? studentA[sortBy].localeCompare(studentB[sortBy])
        : studentB[sortBy].localeCompare(studentA[sortBy]);
    });
  }

  if (sortBy === SortType.Age || sortBy === SortType.Married) {
    copyOfArray.sort((studentA, studentB) => {
      return order === 'asc'
        ? Number(studentA[sortBy]) - Number(studentB[sortBy])
        : Number(studentB[sortBy]) - Number(studentA[sortBy]);
    });
  }

  if (sortBy === SortType.AverageGrade) {
    copyOfArray.sort((studentA, studentB) => {
      const avgOfStudentA: number = getAvgGrade(studentA[sortBy]);
      const avgOfStudentB: number = getAvgGrade(studentB[sortBy]);

      return order === 'asc'
        ? avgOfStudentA - avgOfStudentB
        : avgOfStudentB - avgOfStudentA;
    });
  }

  return copyOfArray;
}
