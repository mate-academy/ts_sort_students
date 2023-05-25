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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  function calculateAverage(nums: number[]): number {
    const sum = nums.reduce((accum, num) => accum + num, 0);

    return sum / nums.length;
  }

  sortedStudents.sort((firstStudent, secondStudent) => {
    let comparison;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        comparison = firstStudent[sortBy].localeCompare(secondStudent[sortBy]);
        break;

      case SortType.Age:
      case SortType.Married:
        comparison = (
          Number(firstStudent[sortBy]) - Number(secondStudent[sortBy])
        );
        break;

      case SortType.AverageGrade: {
        const averageA = calculateAverage(firstStudent.grades);
        const averageB = calculateAverage(secondStudent.grades);

        comparison = averageA - averageB;
      }
        break;
      default: throw new Error();
    }

    return order === 'asc' ? comparison : -comparison;
  });

  return sortedStudents;
}
