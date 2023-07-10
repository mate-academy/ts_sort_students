
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
  AverageGrade = 'average',
}
type SortOrder = 'asc' | 'desc';

const getAverage = (arr: number[]): number => {
  return arr.reduce((a, b) => a + b) / arr.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyOfStudents = [...students];

  copyOfStudents.sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      case SortType.Age:
        return order === 'asc'
          ? a.age - b.age
          : b.age - a.age;
      case SortType.Married:
        return order === 'asc'
          ? Number(a.married) - Number(b.married)
          : Number(b.married) - Number(a.married);
      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverage(a.grades) - getAverage(b.grades)
          : getAverage(b.grades) - getAverage(a.grades);
      default: return 0;
    }
  });

  return copyOfStudents;
}
