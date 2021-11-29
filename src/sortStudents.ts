
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
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'desc' | 'asc';

function findAverage(arr:number[]):number {
  return arr.reduce((sum, num) => (sum + num)) / arr.length;
}

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
  ):object[] | number {  // eslint-disable-line

  const copy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copy.sort((studentA, studentB) => {
        return order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);
      });
      break;
    case SortType.Age:
      copy.sort((studentA, studentB) => {
        return order === 'asc'
          ? studentA[sortBy] - (studentB[sortBy])
          : studentB[sortBy] - (studentA[sortBy]);
      });
      break;

    case SortType.Married:
      copy.sort((studentA, studentB) => {
        if (studentA.married === studentB.married) {
          return 0;
        }

        if (order === 'asc') {
          return studentA.married ? 1 : -1;
        }

        return studentA.married ? -1 : 1;
      });
      break;

    case SortType.AverageGrade:
      copy.sort((studentA, studentB) => {
        const averageA = findAverage(studentA.grades);
        const averageB = findAverage(studentB.grades);

        return order === 'asc'
          ? averageA - averageB
          : averageB - averageA;
      });

      break;

    default:
      return 0;
  }

  return copy;
}
