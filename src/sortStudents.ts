
export interface Student {
  // describe Student interface
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

function getAverageGrades(grades: number[]): number {
  return grades.reduce((prev, curr) => prev + curr) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((firstStudent: Student, nextStudent: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (order === 'asc')
          ? firstStudent[sortBy].localeCompare(nextStudent[sortBy])
          : nextStudent[sortBy].localeCompare(firstStudent[sortBy]);

      case SortType.Married:
      case SortType.Age:
        return (order === 'asc')
          ? +(firstStudent[sortBy]) - +(nextStudent[sortBy])
          : +(nextStudent[sortBy]) - +(firstStudent[sortBy]);

      default:
        return (order === 'asc')
          ? getAverageGrades(firstStudent.grades)
            - getAverageGrades(nextStudent.grades)
          : getAverageGrades(nextStudent.grades)
            - getAverageGrades(firstStudent.grades);
    }
  });
}
