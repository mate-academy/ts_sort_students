
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

  const averageNum = (array: number[]): number => {
    return (array.reduce((a, b) => a + b) / array.length);
  };

  const result: Student[] = studentsCopy
    .sort((studentA: Student, studentB: Student) => {
      let sortByNum = 0;

      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          sortByNum = studentA[sortBy].localeCompare(studentB[sortBy]);
          break;

        case SortType.Age:
          sortByNum = studentA[sortBy] - studentB[sortBy];
          break;

        case SortType.Married:
          sortByNum = studentA[sortBy] && !studentB[sortBy]
            ? 1
            : -1;
          break;

        case SortType.AverageGrade:
          sortByNum = (
            averageNum(studentA[sortBy]) - averageNum(studentB[sortBy])
          );
          break;

        default:
          return 0;
      }

      if (order === 'desc') {
        return sortByNum * -1;
      }

      return sortByNum;
    });

  return result;
}
