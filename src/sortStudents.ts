
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: [], sortBy: SortType, order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        return studentsCopy
          .sort((student1: Student, student2: Student): number => (
            student1[sortBy].localeCompare(student2[sortBy])));
      }

      return studentsCopy
        .sort((student1: Student, student2: Student): number => (
          student2[sortBy].localeCompare(student1[sortBy])));

    case SortType.Surname:
      if (order === 'asc') {
        return studentsCopy
          .sort((student1: Student, student2: Student): number => (
            student1[sortBy].localeCompare(student2[sortBy])));
      }

      return studentsCopy
        .sort((student1: Student, student2: Student): number => (
          student2[sortBy].localeCompare(student1[sortBy])));

    case SortType.Age:
      if (order === 'asc') {
        return studentsCopy
          .sort((student1: Student, student2: Student): number => (
            student1[sortBy] - student2[sortBy]));
      }

      return studentsCopy
        .sort((student1: Student, student2: Student): number => (
          student2[sortBy] - student1[sortBy]));

    case SortType.Married:
      if (order === 'asc') {
        return studentsCopy
          .sort((student1: Student, student2: Student): number => (
            Number(student1[sortBy]) - Number(student2[sortBy])));
      }

      return studentsCopy
        .sort((student1: Student, student2: Student): number => (
          Number(student2[sortBy]) - Number(student1[sortBy])));

    case SortType.AverageGrade:
      return studentsCopy
        .map((pupil: Student) => {
          return {
            ...pupil,
            averageGrade:
              pupil.grades.reduce((sum: number, cur: number) => sum + cur)
              / pupil.grades.length,
          };
        })
        .sort((student1, student2): number => {
          if (order === 'asc') {
            return (student1.averageGrade) - (student2.averageGrade);
          }

          return (student2.averageGrade) - (student1.averageGrade);
        });

    default:
      throw new Error('Invalid sort type');
  }
}
