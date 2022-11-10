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

export const getAverageGrade = (student: Student): number => {
  return student.grades.reduce((grade1: number, grade2: number): number => {
    return grade1 + grade2;
  }, 0) / student.grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsCopy
        .sort((student1: Student, student2: Student): number => {
          return order === 'asc'
            ? student1[sortBy].localeCompare(student2[sortBy])
            : student2[sortBy].localeCompare(student1[sortBy]);
        });

    case SortType.Age:
      return studentsCopy
        .sort((student1: Student, student2: Student): number => {
          return order === 'asc'
            ? student1[sortBy] - student2[sortBy]
            : student2[sortBy] - student1[sortBy];
        });

    case SortType.Married:
      return studentsCopy
        .sort((student1: Student, student2: Student): number => {
          return order === 'asc'
            ? Number(student1.married) - Number(student2.married)
            : Number(student2.married) - Number(student1.married);
        });

    case SortType.AverageGrade:
      return studentsCopy
        .sort((student1: Student, student2: Student): number => {
          return order === 'asc'
            ? getAverageGrade(student1) - getAverageGrade(student2)
            : getAverageGrade(student2) - getAverageGrade(student1);
        });

    default:
      throw new Error('Sorting failed!!!');
  }
}
