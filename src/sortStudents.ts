
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  function calculateAverage(numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortedStudents.sort((a: Student, b: Student) => {
        return order === 'desc'
          ? b[sortBy].localeCompare(a[sortBy])
          : a[sortBy].localeCompare(b[sortBy]);
      });

    case SortType.Age:
      return sortedStudents.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      });

    case SortType.AverageGrade:
      return sortedStudents.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? calculateAverage(a[sortBy]) - calculateAverage(b[sortBy])
          : calculateAverage(b[sortBy]) - calculateAverage(a[sortBy]);
      });

    case SortType.Married: {
      const married
        = sortedStudents.filter((student: Student) => student[sortBy]);
      const unmarried
        = sortedStudents.filter((student: Student) => !student[sortBy]);

      return order === 'asc' ? unmarried.concat(married)
        : married.concat(unmarried);
    }

    default:
      return sortedStudents;
  }
}
