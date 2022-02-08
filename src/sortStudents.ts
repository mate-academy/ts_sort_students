
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  const midlNum = (array: number[]): number => {
    return (array.reduce((a, b) => a + b) / array.length);
  };

  const result: Student[] = studentsCopy
    .sort((studentA: Student, studentB: Student) => {
      let sortNum = 0;

      switch (sortBy) {
        case SortType.Name:
          sortNum = studentA[sortBy].localeCompare(studentB[sortBy]);
          break;

        case SortType.Surname:
          sortNum = studentA[sortBy].localeCompare(studentB[sortBy]);
          break;

        case SortType.Age:
          sortNum = studentA[sortBy] - studentB[sortBy];
          break;

        case SortType.Married:
          sortNum = studentA[sortBy] && !studentB[sortBy]
            ? 1
            : -1;
          break;

        case SortType.AverageGrade:
          sortNum = midlNum(studentA[sortBy]) - midlNum(studentB[sortBy]);
          break;

        default:
          return 0;
      }

      if (order === 'desc') {
        return sortNum * -1;
      }

      return sortNum;
    });

  return result;
}
