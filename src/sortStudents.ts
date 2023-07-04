
export interface Student {
  name: string;
  surname: string;
  age: number;
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

function getAverageGrade(grades: number[]): number {
  return grades.reduce((sum, mark) => sum + mark, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newStudents: Student[] = [...students];

  newStudents.sort((firstStudent: Student, secondStudent: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
          : secondStudent[sortBy].localeCompare(firstStudent[sortBy]);
      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +firstStudent[sortBy] - +secondStudent[sortBy]
          : +secondStudent[sortBy] - +firstStudent[sortBy];
      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrade(firstStudent[sortBy])
            - getAverageGrade(secondStudent[sortBy])
          : getAverageGrade(secondStudent[sortBy])
            - getAverageGrade(firstStudent[sortBy]);
      default:
        return 0;
    }
  });

  return newStudents;
}
