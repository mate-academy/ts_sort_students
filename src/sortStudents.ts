function getAverageGrades(grades: number[]): number {
  return grades
    .reduce((total: number, grade: number) => total + grade) / grades.length;
}

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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];
  const sortedStudents = copyStudents.sort((student, nextStudent) => {
    switch (sortBy) {
      case SortType.AverageGrade: {
        return order === 'asc'
          ? getAverageGrades(student[sortBy])
            - getAverageGrades(nextStudent[sortBy])
          : getAverageGrades(nextStudent[sortBy])
            - getAverageGrades(student[sortBy]);
      }
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? student[sortBy].localeCompare(nextStudent[sortBy])
          : nextStudent[sortBy].localeCompare(student[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(student[sortBy]) - Number(nextStudent[sortBy])
          : Number(nextStudent[sortBy]) - Number(student[sortBy]);

      default:
        throw new Error('Error: unacceptable sort parameter provided.');
    }
  });

  return sortedStudents;
}
