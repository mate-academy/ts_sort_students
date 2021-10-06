// describe Student type
// create and export SortType enum
// create SortOrder type

interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

const average = (array: number[]): number => {
  return array.reduce((a: number, b: number) => a + b, 0) / array.length;
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[], sortBy: SortType, order: SortOrder): Student[] {
  return [...students].sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc' ?
          a[sortBy].localeCompare(b[sortBy]):
          b[sortBy].localeCompare(a[sortBy]);
      case SortType.Age:
      case SortType.Married:
        return order === 'asc' ?
          +a[sortBy] - +b[sortBy]:
          +b[sortBy] - +a[sortBy] 
      case SortType.AverageGrade: 
      return order === 'asc' ? 
        average(a[sortBy]) - average(b[sortBy]):
        average(b[sortBy]) - average(a[sortBy]);
      default: 
      return 0;
    }
  })
}

