
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function averageGrade(grades: number[]): number {
  return grades.reduce((acc, item) => acc + item, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudensts: Student[] = [...students];

  return sortedStudensts.sort((studentOne, studentTwo) => {
    switch (sortBy) {
      case SortType.Age:
        return order === 'asc'
          ? studentOne[sortBy] - studentTwo[sortBy]
          : studentTwo[sortBy] - studentOne[sortBy];

      case SortType.Married:
        return order === 'asc'
          ? +studentOne[sortBy] - +studentTwo[sortBy]
          : +studentTwo[sortBy] - +studentOne[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? averageGrade(studentOne[sortBy]) - averageGrade(studentTwo[sortBy])
          : averageGrade(studentTwo[sortBy]) - averageGrade(studentOne[sortBy]);

      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? studentOne[sortBy].localeCompare(studentTwo[sortBy])
          : studentTwo[sortBy].localeCompare(studentOne[sortBy]);

      default:
        throw Error('Choose valid type of sorting');
    }
  });
}
