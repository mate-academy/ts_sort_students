
export interface Student {
  name: string;
  surname: string;
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

function getAverageScore(students: Student): number {
  const averegSum = students.grades.reduce((a, b) => a + b, 0);

  return averegSum / students.grades.length;
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const notOriginalStudents = [...students];

  notOriginalStudents.sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageScore(a) - getAverageScore(b)
          : getAverageScore(b) - getAverageScore(a);

      default:
        throw new Error('Error');
    }
  });

  return notOriginalStudents;
}
