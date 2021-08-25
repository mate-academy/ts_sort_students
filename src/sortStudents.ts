interface Student {
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

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedArray: Student[] = [...students];
  const sum = (prev: number, curr: number): number => {
    return prev + curr;
  };

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        sortedArray
          .sort((studentA, studentB) => studentA[sortBy]
            .localeCompare(studentB[sortBy]));
      } else {
        sortedArray
          .sort((studentA, studentB) => studentB[sortBy]
            .localeCompare(studentA[sortBy]));
      }

      return sortedArray;
    case SortType.Age:
    case SortType.Married:
      if (order === 'asc') {
        sortedArray
          .sort((studentA, studentB) => Number(studentA[sortBy])
            - Number(studentB[sortBy]));
      } else {
        sortedArray
          .sort((studentA, studentB) => Number(studentB[sortBy])
            - Number(studentA[sortBy]));
      }

      return sortedArray;
    case SortType.AverageGrade:
      if (order === 'asc') {
        sortedArray
          .sort((studentA, studentB) => (studentA[sortBy].reduce(sum, 0)
            / studentA[sortBy].length)
            - (studentB[sortBy].reduce(sum)
            / studentB[sortBy].length));
      } else {
        sortedArray
          .sort((studentA, studentB) => (studentB[sortBy].reduce(sum, 0)
            / studentB[sortBy].length)
            - (studentA[sortBy].reduce(sum)
            / studentA[sortBy].length));
      }

      return sortedArray;
    default:
      throw new Error('Invalid data');
  }
}
