export interface Student {
  name:string;
  surname:string;
  age:number;
  married:boolean;
  grades:number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  const copyArray: Student[] = [...students];

  function calculateAverage(grades: number[]):number {
    return grades.reduce((acc, curr) => acc + curr, 0) / grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copyArray.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : copyArray.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? copyArray.sort((a, b) => +a[sortBy] - +b[sortBy])
        : copyArray.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      return copyArray.sort((a:Student, b:Student) => {
        return order === 'asc'
          ? calculateAverage(a[sortBy]) - calculateAverage(b[sortBy])
          : calculateAverage(b[sortBy]) - calculateAverage(a[sortBy]);
      });

    default:
      return copyArray;
  }
}
