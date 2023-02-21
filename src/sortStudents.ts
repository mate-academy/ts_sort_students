
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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(student: Student): number {
  return student.grades
    .reduce((acc: number, prev: number) => acc + prev, 0)
    / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return Array.from(students)
    .sort((a: Student, b: Student) => {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return order === 'asc'
            ? a[sortBy].localeCompare(b[sortBy])
            : b[sortBy].localeCompare(a[sortBy]);

        case SortType.Age:
        case SortType.Married:
          return order === 'asc'
            ? Number(a[sortBy]) - Number(b[sortBy])
            : Number(b[sortBy]) - Number(a[sortBy]);

        case SortType.AverageGrade:
          return order === 'asc'
            ? getAverageGrade(a) - getAverageGrade(b)
            : getAverageGrade(b) - getAverageGrade(a);

        default:
          throw new Error(`Invalid sort type: ${sortBy}`);
      }
    });
}
