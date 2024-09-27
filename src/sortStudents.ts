export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

const averageGrade = (array:
number[]): number => (array.reduce((a, b) => a + b) / array.length);

export function sortStudents(students: Student[],
  sortBy: SortType,
  order: SortOrder)
  : Student[] {
  const result = [...students];

  result.sort((person1, person2) => {
    let a = person1;
    let b = person2;

    if (order === 'desc') {
      a = person2;
      b = person1;
    }

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return a[sortBy].localeCompare(b[sortBy]);

      case SortType.AverageGrade:
        return averageGrade(a.grades) - averageGrade(b.grades);

      case SortType.Age:
      case SortType.Married:
        return Number(a[sortBy]) - Number(b[sortBy]);

      default:
        throw new Error('Data is wrong');
    }
  });

  return result;
}
