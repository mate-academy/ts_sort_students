// describe Student type
// create and export SortType enum
// create SortOrder type

interface Student {
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

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortCopy: Student[] = [...students];
  const sum = (prev: number, curr: number): number => {
    return prev + curr;
  };

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        sortCopy
          .sort((studentX, studentY) => studentX[sortBy]
            .localeCompare(studentY[sortBy]));
      } else {
        sortCopy
          .sort((studentX, studentY) => studentY[sortBy]
            .localeCompare(studentX[sortBy]));
      }

      return sortCopy;

    case SortType.Surname:
      if (order === 'asc') {
        sortCopy
          .sort((studentX, studentY) => studentX[sortBy]
            .localeCompare(studentY[sortBy]));
      } else {
        sortCopy
          .sort((studentX, studentY) => studentY[sortBy]
            .localeCompare(studentX[sortBy]));
      }

      return sortCopy;

    case SortType.Age:
      if (order === 'asc') {
        sortCopy
          .sort((studentX, studentY) => studentX[sortBy] - studentY[sortBy]);
      } else {
        sortCopy
          .sort((studentX, studentY) => studentY[sortBy] - studentX[sortBy]);
      }

      return sortCopy;

    case SortType.Married:
      if (order === 'asc') {
        sortCopy
          .sort((studentX, studentY) => Number(studentX[sortBy])
            - Number(studentY[sortBy]));
      } else {
        sortCopy
          .sort((studentX, studentY) => Number(studentY[sortBy])
            - Number(studentX[sortBy]));
      }

      return sortCopy;

    case SortType.AverageGrade:
      if (order === 'asc') {
        sortCopy
          .sort((studentX, studentY) => (studentX[sortBy].reduce(sum, 0)
            / studentX[sortBy].length)
            - (studentY[sortBy].reduce(sum)
            / studentY[sortBy].length));
      } else {
        sortCopy
          .sort((studentX, studentY) => (studentY[sortBy].reduce(sum, 0)
            / studentY[sortBy].length)
            - (studentX[sortBy].reduce(sum)
            / studentX[sortBy].length));
      }

      return sortCopy;

    default:
      return sortCopy;
  }
}
