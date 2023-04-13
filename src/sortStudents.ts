
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

type SortOrder = 'asc' | 'desc';

export type { SortOrder };

function getAverageGrade(student: Student): number {
  const averageGrade: number = student.grades.reduce(
    (a: number, b: number) => a + b, 0,
  )
    / student.grades.length;

  return averageGrade;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedObject: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortedObject.sort((a: Student, b: Student): number => {
        if (order === 'desc') {
          return b[sortBy].localeCompare(a[sortBy]);
        }

        return a[sortBy].localeCompare(b[sortBy]);
      });
      break;

    case SortType.Married:
    case SortType.Age:
      sortedObject.sort((a: Student, b: Student): number => {
        if (order === 'desc') {
          return +b[sortBy] - +a[sortBy];
        }

        return +a[sortBy] - +b[sortBy];
      });
      break;

    case SortType.AverageGrade:
      sortedObject.sort((a: Student, b: Student): number => {
        if (order === 'desc') {
          return getAverageGrade(b) - getAverageGrade(a);
        }

        return getAveragesGrade(a) - getAverageGrade(b);
      });
      break;

    default:
  }

  return sortedObject;
}
