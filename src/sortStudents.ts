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

function averageGrade(grades: number[]) : number {
  return grades.reduce((a: number, b: number) => a + b, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudent: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyStudent.sort((a, b) => {
        return (order === 'asc')
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });
      break;

    case SortType.Age:
      copyStudent.sort((a, b) => {
        return (order === 'asc')
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      });
      break;

    case SortType.Married:
      copyStudent.sort((a, b) => {
        return (order === 'asc')
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);
      });
      break;

    case SortType.AverageGrade:

      copyStudent.sort((a, b) => {
        return (order === 'asc')
          ? averageGrade(a[sortBy]) - averageGrade(b[sortBy])
          : averageGrade(b[sortBy]) - averageGrade(a[sortBy]);
      });
      break;

    default:
  }

  return copyStudent;
}
