
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: string,
): Student[] {
  const SortedStudents = [...students];

  function calculateAverage(numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
  }

  switch (sortBy) {
    case (SortType.Name):
    case (SortType.Surname):
      return SortedStudents.sort((firstStudent, secondStudent) => {
        return order === 'asc'
          ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
          : secondStudent[sortBy].localeCompare(firstStudent[sortBy]);
      });

    case SortType.Age:
      return SortedStudents.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      });

    case SortType.AverageGrade:
      return SortedStudents.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? calculateAverage(a[sortBy]) - calculateAverage(b[sortBy])
          : calculateAverage(b[sortBy]) - calculateAverage(a[sortBy]);
      });

    case SortType.Married: {
      const married
        = SortedStudents.filter((student: Student) => student[sortBy]);
      const unmarried
        = SortedStudents.filter((student: Student) => !student[sortBy]);

      return order === 'asc' ? unmarried.concat(married)
        : married.concat(unmarried);
    }
    default:
      return SortedStudents;
  }
}
