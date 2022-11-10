
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

function getAverageGrade(grades: number[]): number {
  return grades
    .reduce((sum: number, current: number) => sum + current, 0)
    / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsCopy
        .sort((first: Student, second: Student) => {
          if (order === 'desc') {
            return second[sortBy].localeCompare(first[sortBy]);
          }

          return first[sortBy].localeCompare(second[sortBy]);
        });

    case SortType.Age:
    case SortType.Married:
      return studentsCopy.sort((first: Student, second: Student) => {
        if (order === 'desc') {
          return +second[sortBy] - +first[sortBy];
        }

        return +first[sortBy] - +second[sortBy];
      });

    case SortType.AverageGrade:
      return studentsCopy.sort((first: Student, second: Student) => {
        if (order === 'desc') {
          return getAverageGrade(second[sortBy])
            - getAverageGrade(first[sortBy]);
        }

        return getAverageGrade(first[sortBy])
            - getAverageGrade(second[sortBy]);
      });

    default:
      throw new Error('Change your input');
  }
}
