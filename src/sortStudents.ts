
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
  function countAverage(grades: number[]): number {
    return grades.reduce((grade1: number,
      grade2: number) => grade1 + grade2, 0) / grades.length;
  }

  return [...students].sort((student1: Student, student2: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (order === 'asc')
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return (order === 'asc')
          ? +(student1[sortBy]) - +(student2[sortBy])
          : +(student2[sortBy]) - +(student1[sortBy]);

      default:
        return (order === 'asc')
          ? countAverage(student1.grades) - countAverage(student2.grades)
          : countAverage(student2.grades) - countAverage(student1.grades);
    }
  });
}
