
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

const calculateAverage = (grades: number[]): number => {
  return grades.reduce((a, b) => a + b) / grades.length;
};

export function sortStudents(
  students: Array<Student>,
  sortBy: SortType,
  order: SortOrder,
): Array<Student> {
  const result: Array<Student> = [...students]
    .sort((a, b) => {
      switch (sortBy) {
        case SortType.Age:
        case SortType.Married:
          return order === 'asc'
            ? Number(a[sortBy]) - Number(b[sortBy])
            : Number(b[sortBy]) - Number(a[sortBy]);

        case SortType.Name:
        case SortType.Surname:
          return order === 'asc'
            ? a[sortBy].localeCompare(b[sortBy])
            : b[sortBy].localeCompare(a[sortBy]);

        case SortType.AverageGrade:
          return order === 'asc'
            ? calculateAverage(a.grades) - calculateAverage(b.grades)
            : b.grades.reduce((acc, curr) => acc + curr, 0) / b.grades.length
              - a.grades.reduce((acc, curr) => acc + curr, 0) / a.grades.length;

        default:
          return 0;
      }
    });

  return result;
}
