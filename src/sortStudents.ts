
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
  AverageGrade = 'grades',
}

type SortOrder = 'asc' | 'desc';

const calcAverageGrade = (grades: number[]):number => {
  return grades
    .reduce((a: number, b: number) => a + b) / grades.length;
};

// create SortOrder type
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
