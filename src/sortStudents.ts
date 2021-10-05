interface Student{
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

const calcAvgGrade = (arr: number[]): number => {
  return arr.reduce((sum: number, n: number) => sum + n, 0) / arr.length;
};

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a, b) => {
    switch (sortBy) {
      case 'age':
        return (order === 'asc')
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);
      case 'married':
        return (order === 'asc')
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);
      case 'grades':
        return (order === 'asc')
          ? calcAvgGrade(a[sortBy]) - calcAvgGrade(b[sortBy])
          : calcAvgGrade(b[sortBy]) - calcAvgGrade(a[sortBy]);
      case 'name':
        return (order === 'asc')
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      case 'surname':
        return (order === 'asc')
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      default:
        return 0;
    }
  });
}
