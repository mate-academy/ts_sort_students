
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  function calcAverage(student: Student): number {
    return student.grades.reduce((a, b) => a + b)
      / student.grades.length;
  }

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
          ? calcAverage(a) - calcAverage(b)
          : calcAverage(b) - calcAverage(a);
      });

    default:
      return sortedStudents;
  }
}
