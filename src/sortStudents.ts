function averStudentGrade(arr: number[]): number {
  return arr.reduce((prev, current) => (prev + current), 0) / arr.length;
}

export interface Student {
  'name': string,
  'surname': string,
  'age': number,
  'married': boolean | number,
  'grades': number[],
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
  order: SortOrder,
): Student[] {
  const copy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return (order === 'asc')
        ? copy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : copy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
      return (order === 'asc')
        ? copy.sort((a, b) => (a.age - b.age))
        : copy.sort((a, b) => b.age - a.age);

    case SortType.Married:
      return (order === 'asc')
        ? copy.sort((a, b) => a.married - b.married)
        : copy.sort((a, b) => b.married - a.married);

    case SortType.AverageGrade:
      return (order === 'asc')
        ? copy.sort((a, b) => {
          return (averStudentGrade(a.grades) - averStudentGrade(b.grades));
        })
        : copy.sort((a, b) => {
          return (averStudentGrade(b.grades) - averStudentGrade(a.grades));
        });

    default:
      return copy;
  }
}
