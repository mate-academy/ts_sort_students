
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

function getAverageGrades(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((stud1: Student, stud2: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? stud1[sortBy].localeCompare(stud2[sortBy])
          : stud2[sortBy].localeCompare(stud1[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +stud1[sortBy] - +stud2[sortBy]
          : +stud2[sortBy] - +stud1[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrades(stud1[sortBy]) - getAverageGrades(stud2[sortBy])
          : getAverageGrades(stud2[sortBy]) - getAverageGrades(stud1[sortBy]);

      default:
        throw new Error('Unknown sort type');
    }
  });
}
