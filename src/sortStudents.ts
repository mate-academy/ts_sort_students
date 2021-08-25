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
  const sortedStudents: Student[] = [...students];
  const callback = (prev: number, curr: number): number => {
    return prev + curr;
  };

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        sortedStudents
          .sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
      } else {
        sortedStudents
          .sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
      }

      return sortedStudents;

    case SortType.Age:
      if (order === 'asc') {
        sortedStudents
          .sort((a, b) => a[sortBy] - b[sortBy]);
      } else {
        sortedStudents
          .sort((a, b) => b[sortBy] - a[sortBy]);
      }

      return sortedStudents;

    case SortType.Married:
      if (order === 'asc') {
        sortedStudents
          .sort((a, b) => +a[sortBy] - +b[sortBy]);
      } else {
        sortedStudents
          .sort((a, b) => +b[sortBy] - +a[sortBy]);
      }

      return sortedStudents;

    case SortType.AverageGrade:
      if (order === 'asc') {
        sortedStudents
          .sort((a, b) => (
            (a[sortBy].reduce(callback, 0))
            - (b[sortBy].reduce(callback, 0))
          ));
      } else {
        sortedStudents
          .sort((a, b) => (
            (b[sortBy].reduce(callback, 0))
            - (a[sortBy].reduce(callback, 0))
          ));
      }

      return sortedStudents;

    default:
      return sortedStudents;
  }
}
