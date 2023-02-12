
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

const getAvarage = (grades: number[]): number => {
  return grades.reduce((a, b) => a + b, 0) / (grades.length || 1);
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student [] {
  const copy = [...students];

  return copy.sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +(a[sortBy]) - +(b[sortBy])
          : +(b[sortBy]) - +(a[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAvarage(a.grades) - getAvarage(b.grades)
          : getAvarage(b.grades) - getAvarage(a.grades);

      default:
        throw Error('Enter a valid sort value.');
    }
  });
}
