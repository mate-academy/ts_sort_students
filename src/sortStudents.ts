
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

export type SortOrder = 'asc' | 'desc';

function getAverage(student: Student): number {
  return student.grades
    .reduce((acc: number, prev: number) => acc + prev, 0)
    / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  sortedStudents.sort((prev: Student, curr: Student): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return prev[sortBy].localeCompare(curr[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(prev[sortBy]) - Number(curr[sortBy])
          : Number(curr[sortBy]) - Number(prev[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverage(prev) - getAverage(curr)
          : getAverage(curr) - getAverage(prev);

      default:
        return 0;
    }
  });

  return sortedStudents;
}
