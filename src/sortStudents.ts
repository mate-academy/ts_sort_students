
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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function countAverageSum(numbers: number[]): number {
  const sum = numbers.reduce((acc: number, num: number) => {
    return acc + num;
  }, 0);

  return sum / numbers.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortCopyArray = [...students];
  const direction = order === 'asc' ? 1 : -1;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortCopyArray.sort((prev, current) => {
        const compare = prev[sortBy].localeCompare(current[sortBy]);

        return direction * compare;
      });

    case (SortType.Age):
    case (SortType.Married):
      return sortCopyArray.sort((prev, current) => {
        const compare = +prev[sortBy] - +current[sortBy];

        return direction * compare;
      });

    case (SortType.AverageGrade):
      return sortCopyArray.sort((prev, current) => {
        const aSum = countAverageSum(prev.grades);
        const bSum = countAverageSum(current.grades);
        const compare = aSum - bSum;

        return direction * compare;
      });

    default:
      throw new Error(`Wrong ${sortBy} parameters`);
  }
}
