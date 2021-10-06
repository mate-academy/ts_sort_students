// describe Student type
// create and export SortType enum
// create SortOrder type

type Student = {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortField {
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
  sortBy: SortField,
  order: SortOrder
) {
  const sortType = typeof students[0][sortBy];

  return [...students].sort((a, b) => {
    switch (sortType) {
      case 'string':
        return order === SortOrder.Asc
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      case 'number':
        return order === SortOrder.Asc
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      case 'boolean':
        return order === SortOrder.Asc
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);
      case 'object':
        return order === SortOrder.Asc
          ? calcAverageGrade(a[sortBy]) - calcAverageGrade(b[sortBy])
          : calcAverageGrade(b[sortBy]) - calcAverageGrade(a[sortBy]);
      default:
        return 0;
    };
  });
}

function calcAverageGrade(arr: number[]) {
  return arr.reduce((a, b) => a + b) / arr.length;
}
