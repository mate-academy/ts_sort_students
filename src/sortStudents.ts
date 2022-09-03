
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = JSON.parse(JSON.stringify(students));

  function countAverage(grades: number[]): number {
    return grades.reduce((grade1: number,
      grade2: number) => grade1 + grade2, 0) / grades.length;
  }

  return studentsCopy.sort((student1: Student, student2: Student) => {
    if (sortBy === SortType.Name || sortBy === SortType.Surname) {
      return (order === 'asc')
        ? String(student1[sortBy]).localeCompare(String(student2[sortBy]))
        : String(student2[sortBy]).localeCompare(String(student1[sortBy]));
    }

    if (sortBy === SortType.Age || sortBy === SortType.Married) {
      return (order === 'asc')
        ? +(student1[sortBy]) - +(student2[sortBy])
        : +(student2[sortBy]) - +(student1[sortBy]);
    }

    return (order === 'asc')
      ? countAverage(student1[sortBy]) - countAverage(student2[sortBy])
      : countAverage(student2[sortBy]) - countAverage(student1[sortBy]);
  });
}
