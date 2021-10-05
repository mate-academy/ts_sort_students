interface Student {
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

function getAverageGrade(student: number[]): number {
  return student.reduce((a: number, b: number) => a + b, 0) / student.length;
}

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copy.sort(
        (a, b) => {
          return order === 'asc'
            ? a[sortBy].localeCompare(b[sortBy])
            : b[sortBy].localeCompare(a[sortBy]);
        },
      );
      break;

    case SortType.Age:
    case SortType.Married:
      copy.sort(
        (a, b) => {
          return order === 'asc'
            ? Number(a[sortBy]) - Number(b[sortBy])
            : Number(b[sortBy]) - Number(a[sortBy]);
        },
      );
      break;

    case SortType.AverageGrade:
      copy.sort(
        (a, b) => {
          return order === 'asc'
            ? getAverageGrade(a[sortBy]) - getAverageGrade(b[sortBy])
            : getAverageGrade(b[sortBy]) - getAverageGrade(a[sortBy]);
        },
      );
      break;

    default:
      break;
  }

  return copy;
}
