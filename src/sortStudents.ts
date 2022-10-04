
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
    firstStudent: Student,
    secondStudent: Student,
  ): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (order === 'asc')
          ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
          : secondStudent[sortBy].localeCompare(firstStudent[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return (order === 'asc')
          ? +firstStudent[sortBy] - +secondStudent[sortBy]
          : +secondStudent[sortBy] - +firstStudent[sortBy];

      case SortType.AverageGrade:
        return (order === 'asc')
          ? averageAge(firstStudent.grades) - averageAge(secondStudent.grades)
          : averageAge(secondStudent.grades) - averageAge(firstStudent.grades);

      default:
        return 0;
    }
  });
}
