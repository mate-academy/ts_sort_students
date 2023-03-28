
export interface Student {
  name: 'Jessica',
  surname: 'Buxton',
  age: 26,
  married: true,
  grades: [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

const average = (arr: number[]): number => {
  return arr.reduce((acc: number, item: number) => (acc + item)) / arr.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copyStudents.sort((a, b) => (order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy])
      ));

    case SortType.Age:
      return copyStudents.sort((a, b) => (order === 'asc'
        ? a[sortBy] - b[sortBy]
        : b[sortBy] - a[sortBy]
      ));

    case SortType.Married:
      return copyStudents.sort((a, b) => (order === 'asc'
        ? Number(a[sortBy]) - Number(b[sortBy])
        : Number(b[sortBy]) - Number(a[sortBy])
      ));

    case SortType.AverageGrade:
      return copyStudents.sort((a, b) => (order === 'asc'
        ? average(a.grades) - average(b.grades)
        : average(b.grades) - average(a.grades)
      ));

    default:
      return copyStudents;
  }
}
