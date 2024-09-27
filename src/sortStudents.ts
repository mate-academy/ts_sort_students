
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

export function countAverageGrade(student: Student): number {
  const sum: number = student.grades
    .reduce((acc, curValue) => acc + curValue, 0);

  return sum / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (
          order === 'asc'
            ? a[sortBy].localeCompare(b[sortBy])
            : b[sortBy].localeCompare(a[sortBy])
        );

      case SortType.Age:
        return (
          order === 'asc'
            ? a.age - b.age
            : b.age - a.age
        );

      case SortType.Married:
        if (a.married === b.married) {
          return 0;
        }

        if (order === 'asc') {
          return a.married ? 1 : -1;
        }

        return b.married ? 1 : -1;

      case SortType.AverageGrade:
        return (
          order === 'asc'
            ? countAverageGrade(a) - countAverageGrade(b)
            : countAverageGrade(b) - countAverageGrade(a)
        );

      default:
        throw new Error('Invalid sortType');
    }
  });
}
