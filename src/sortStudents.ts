
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

function calculateAverage(student: Student): number {
  return student.grades.reduce((acc, val) => acc + val) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortedStudents.sort((a, b) => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return sortedStudents.sort((a, b) => {
        return order === 'asc'
          ? +a[sortBy] - (+b[sortBy])
          : +b[sortBy] - (+a[sortBy]);
      });

    case SortType.AverageGrade:
      return sortedStudents.sort((a, b) => {
        return order === 'asc'
          ? calculateAverage(a) - calculateAverage(b)
          : calculateAverage(b) - calculateAverage(a);
      });

    default:
      return sortedStudents;
  }
}
