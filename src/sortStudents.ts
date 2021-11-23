export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType{
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(students: Student): number {
  const sumOfGrades = students.grades.reduce((sum, grade) => sum + grade);

  return sumOfGrades / students.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  if ((sortBy === SortType.Name || sortBy === SortType.Surname)) {
    if (order === 'asc') {
      studentsCopy.sort((s1, s2) => s1[sortBy].localeCompare(s2[sortBy]));
    } else {
      studentsCopy.sort((s1, s2) => s2[sortBy].localeCompare(s1[sortBy]));
    }
  }

  if (sortBy === SortType.Age) {
    if (order === 'asc') {
      studentsCopy.sort((s1, s2) => s1[sortBy] - s2[sortBy]);
    } else {
      studentsCopy.sort((s1, s2) => s2[sortBy] - s1[sortBy]);
    }
  }

  if (sortBy === SortType.Married) {
    if (order === 'asc') {
      studentsCopy.sort((s1, s2) => +s1[sortBy] - +s2[sortBy]);
    } else {
      studentsCopy.sort((s1, s2) => +s2[sortBy] - +s1[sortBy]);
    }
  }

  if (sortBy === SortType.AverageGrade) {
    if (order === 'asc') {
      studentsCopy.sort((s1, s2) => getAverageGrade(s1) - getAverageGrade(s2));
    } else {
      studentsCopy.sort((s1, s2) => getAverageGrade(s2) - getAverageGrade(s1));
    }
  }

  return studentsCopy;
}
