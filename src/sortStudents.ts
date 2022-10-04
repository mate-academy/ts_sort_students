
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

function averageGrade(grades: number[]): number {
  return grades
    .reduce((total: number, curr: number): number => (total + curr), 0)
    / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  return sortedStudents.sort((aStudent: Student, bStudent: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? aStudent[sortBy].localeCompare(bStudent[sortBy])
          : bStudent[sortBy].localeCompare(aStudent[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +aStudent[sortBy] - +bStudent[sortBy]
          : +bStudent[sortBy] - +aStudent[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? averageGrade(aStudent[sortBy]) - averageGrade(bStudent[sortBy])
          : averageGrade(bStudent[sortBy]) - averageGrade(aStudent[sortBy]);

      default:
        return students;
    }
  });
}
