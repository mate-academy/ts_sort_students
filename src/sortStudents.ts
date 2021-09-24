// describe Student type
// create and export SortType enum
// create SortOrder type

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grade'
}

type Student = {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
};

type SortOrder = 'asc' | 'desc';

export const getAverage = (arr: number[]): number => {
  const sum = arr.reduce((acc: number, curr: number) => acc + curr);

  return sum / arr.length;
};

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const result = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return result.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });
    case SortType.Age:
    case SortType.Married:
      return result.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
      });
    default:
      return result.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? getAverage(a.grades) - getAverage(b.grades)
          : getAverage(b.grades) - getAverage(a.grades);
      });
  }
}
