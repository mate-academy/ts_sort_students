
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

export type SortOrder = 'asc' | 'desk';

function averageAge(scores: number[]): number {
  return scores.reduce((firstValue: number, secondValue: number) => (
    firstValue + secondValue
  ), 0) / scores.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  return studentsCopy.sort((
    prevStudent: Student,
    currStudent: Student,
  ): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (order === 'asc')
          ? prevStudent[sortBy].localeCompare(currStudent[sortBy])
          : currStudent[sortBy].localeCompare(prevStudent[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return (order === 'asc')
          ? +prevStudent[sortBy] - +currStudent[sortBy]
          : +currStudent[sortBy] - +prevStudent[sortBy];

      case SortType.AverageGrade:
        return (order === 'asc')
          ? averageAge(prevStudent.grades) - averageAge(currStudent.grades)
          : averageAge(currStudent.grades) - averageAge(prevStudent.grades);

      default:
        return 0;
    }
  });
}
