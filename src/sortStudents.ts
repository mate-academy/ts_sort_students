// describe Student type
interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}
// create and export SortType enum
export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}
// create SortOrder type
type SortOrder = 'asc' | 'desc';

const calcAverageGrade = (grades: number[]):number => {
  return grades
    .reduce((sum: number, current: number) => sum + current) / grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (order === 'asc')
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return (order === 'asc')
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);

      case SortType.AverageGrade:
        return (order === 'asc')
          ? calcAverageGrade(a[sortBy]) - calcAverageGrade(b[sortBy])
          : calcAverageGrade(b[sortBy]) - calcAverageGrade(a[sortBy]);
      default:
        return 0;
    }
  });
}
