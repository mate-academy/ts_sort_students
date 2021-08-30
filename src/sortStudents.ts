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

enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];
  const reducer = (acc: number, curr: number): number => {
    return acc + curr;
  };

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === SortOrder.Asc) {
        sortedStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
      } else {
        sortedStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
      }

      return sortedStudents;

    case SortType.Age:
    case SortType.Married:
      if (order === SortOrder.Asc) {
        sortedStudents.sort((a, b) => +a[sortBy] - +b[sortBy]);
      } else {
        sortedStudents.sort((a, b) => +b[sortBy] - +a[sortBy]);
      }

      return sortedStudents;

    case SortType.AverageGrade:
      if (order === SortOrder.Asc) {
        sortedStudents.sort((a, b) => (
          a[sortBy].reduce(reducer) / a[sortBy].length)
          - (b[sortBy].reduce(reducer) / b[sortBy].length));
      } else {
        sortedStudents.sort((a, b) => (
          b[sortBy].reduce(reducer) / b[sortBy].length)
          - (a[sortBy].reduce(reducer) / a[sortBy].length));
      }

      return sortedStudents;
    default:
      return sortedStudents;
  }
}
