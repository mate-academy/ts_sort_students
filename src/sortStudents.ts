interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
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
      if (order === 'asc') {
        sortedArray
          .sort((studentA, studentB) => studentA.name
            .localeCompare(studentB.name));
      } else {
        sortedArray
          .sort((studentA, studentB) => studentB.name
            .localeCompare(studentA.name));
      }

      return sortedArray;

    case SortType.Surname:
      if (order === 'asc') {
        sortedArray
          .sort((studentA, studentB) => studentA.surname
            .localeCompare(studentB.surname));
      } else {
        sortedArray
          .sort((studentA, studentB) => studentB.surname
            .localeCompare(studentA.surname));
      }

      return sortedArray;

    case SortType.Age:
      if (order === 'asc') {
        sortedArray
          .sort((studentA, studentB) => studentA.age - studentB.age);
      } else {
        sortedArray
          .sort((studentA, studentB) => studentB.age - studentA.age);
      }

      return sortedArray;

    case SortType.Married:
      if (order === 'asc') {
        sortedArray
          .sort((studentA, studentB) => Number(studentA.married)
            - Number(studentB.married));
      } else {
        sortedArray
          .sort((studentA, studentB) => Number(studentB.married)
            - Number(studentA.married));
      }

      return sortedArray;

    case SortType.AverageGrade:
      if (order === 'asc') {
        sortedArray
          .sort((studentA, studentB) => studentA.grades.reduce(sum, 0)
            - studentB.grades.reduce(sum));
      } else {
        sortedArray
          .sort((studentA, studentB) => studentB.grades.reduce(sum, 0)
            - studentA.grades.reduce(sum));
      }

      return sortedArray;
    default:
      throw new Error('Invalid data');
  }
}
