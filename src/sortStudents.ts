
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

export type SortOrder = 'asc' |'desc';

function countSum(numbers: number[]): number {
  return numbers.reduce((acc: number, num: number) => {
    return acc + num;
  }, 0);
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copyArray = [...students];
  const copyObject = copyArray.map((person) => ({ ...person }));

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyObject.sort((prev, current) => {
        return order === 'asc'
          ? prev[sortBy].localeCompare(current[sortBy])
          : current[sortBy].localeCompare(prev[sortBy]);
      });
      break;

    case (SortType.Age):
    case (SortType.Married):
      copyObject.sort((prev, current) => {
        return order === 'asc'
          ? +prev[sortBy] - +current[sortBy]
          : +current[sortBy] - +prev[sortBy];
      });
      break;

    case (SortType.AverageGrade):
      copyObject.sort((prev, current) => {
        const aSum = countSum(prev.grades);
        const bSum = countSum(current.grades);

        return order === 'asc'
          ? aSum / prev.grades.length - bSum / current.grades.length
          : bSum / current.grades.length - aSum / prev.grades.length;
      });
      break;

    default:
      throw new Error('wrong parameters');
  }

  return copyObject;
}
